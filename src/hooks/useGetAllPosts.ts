"use client"

import { useQuery } from "@tanstack/react-query";

const useGetAllPosts = (POST_ENDPOINT: string) => {
    const {
        data: posts,
        isLoading,
        refetch,
        isRefetching,
      } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
          try {
            const res = await fetch(POST_ENDPOINT, {
              credentials: "include",
            });
            const data = await res.json();
    
            if (!res.ok) {
              throw new Error(data.error || "Something went wrong");
            }
    
            return data;
          } catch (error) {
            console.log(error);
          }
        },
      });
    return { posts,isLoading,refetch,isRefetching }
        
        
};

export default useGetAllPosts;