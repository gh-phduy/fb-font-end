import { PostType } from "@/components/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const useLikePost = (post: PostType) => {
  const queryClient = useQueryClient();

    const { mutate: likePost, isPending: isLiking } = useMutation({
        mutationFn: async () => {
          try {
            const res = await fetch(
              `${process.env.NEXT_PUBLIC_HOSTNAME}/api/posts/like/${post._id}`,
              {
                method: "POST",
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
        onSuccess: (updatedLikes) => {
          queryClient.setQueryData(["posts"], (oldData: PostType[]) => {
            return oldData.map((p) => {
              if (p._id === post._id) {
                return { ...p, likes: updatedLikes };
              }
              return p;
            });
          });

        },
        onError: (error) => {
          toast.error(error.message);
        },
      });
    return {likePost, isLiking}
};

export default useLikePost;