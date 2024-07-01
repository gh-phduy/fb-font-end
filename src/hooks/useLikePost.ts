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
          // this is not the best UX, bc it will refetch all posts
          // queryClient.invalidateQueries({ queryKey: ["posts"] });
    
          // instead, update the cache directly for that post
          queryClient.setQueryData(["posts"], (oldData: PostType[]) => {
            return oldData.map((p) => {
              if (p._id === post._id) {
                return { ...p, likes: updatedLikes };
              }
              return p;
            });
          });
        queryClient.invalidateQueries({ queryKey: ["notificationsToRead"] });

        },
        onError: (error) => {
          toast.error(error.message);
        },
      });
    return {likePost, isLiking}
};

export default useLikePost;