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
import { useQuery } from "@tanstack/react-query";
import { UserType } from "../types";
import useEditProfile from "@/hooks/useEditProfile";

const formSchema = z.object({
  fullName: z.string(),
  username: z.string(),
  link: z.string(),
  bio: z.string(),
  newPassword: z.string(),
  currentPassword: z.string(),
  email: z.string(),
});

export function EditProfileForm() {
  const { data: authUser } = useQuery<UserType>({ queryKey: ["authUser"] });
  const { updateProfile } = useEditProfile();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: authUser?.fullName,
      username: authUser?.username,
      email: authUser?.email,
      bio: authUser?.bio,
      link: authUser?.link,
      newPassword: "",
      currentPassword: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    updateProfile(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >
        <div className="flex flex-wrap gap-3">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="flex-1 input border border-gray-700 rounded p-3 input-md"
                    placeholder="Username"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="flex-1 input border border-gray-700 rounded p-3 input-md"
                    placeholder="Full Name"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-wrap gap-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    className="flex-1 input border border-gray-700 rounded p-3 input-md"
                    placeholder="Email"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="flex-1 input border border-gray-700 rounded p-3 input-md"
                    placeholder="Bio"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-wrap gap-3">
          <FormField
            control={form.control}
            name="currentPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    className="flex-1 input border border-gray-700 rounded p-3 input-md"
                    placeholder="Current Password"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    className="flex-1 input border border-gray-700 rounded p-3 input-md"
                    placeholder="New Password"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="link"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="password"
                  className="flex-1 input border border-gray-700 rounded p-3 input-md"
                  placeholder="Link"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          className="btn btn-primary rounded-full btn-sm text-white"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
