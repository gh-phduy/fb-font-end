"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { IoMdSend } from "react-icons/io";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { PostType } from "../types";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

interface CommentFormProps {
  post: PostType;
}

const CommentForm: React.FC<CommentFormProps> = ({ post }) => {
  const queryClient = useQueryClient();
  const { mutate: commentPost, isPending: isCommenting } = useMutation({
    mutationFn: async (comment: string) => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_HOSTNAME}/api/posts/comment/${post._id}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ text: comment }),
          }
        );
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    onSuccess: () => {
      toast.success("Comment posted successfully");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    commentPost(values.username);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" py-2.5 w-full flex-center"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl className="w-full">
                <Input className="rounded-full" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="h-10 cursor-pointer w-10 hover:bg-bg-4 rounded-full flex-center"
        >
          <IoMdSend size={22} />
        </Button>
      </form>
    </Form>
  );
};

export default CommentForm;
