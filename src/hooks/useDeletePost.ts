"use client"

import { PostType } from "@/components/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useDeletePost = (post: PostType) => {
  const queryClient = useQueryClient();

    const { mutate: deletePost, isPending: isDeleting } = useMutation({
        mutationFn: async () => {
          try {
            const res = await fetch(
              `${process.env.NEXT_PUBLIC_HOSTNAME}/api/posts/${post._id}`,
              {
                method: "DELETE",
                credentials: "include",
              }
            );
            const data = await res.json();
    
            if (!res.ok) {
              throw new Error(data.error || "Something went wrong");
            }
            return data;
          } catch (error) {
            console.error(error);
          }
        },
        onSuccess: () => {
          toast.success("Post deleted successfully");
          queryClient.invalidateQueries({ queryKey: ["posts"] });
        },
      });
    return {deletePost, isDeleting}
};

export default useDeletePost;