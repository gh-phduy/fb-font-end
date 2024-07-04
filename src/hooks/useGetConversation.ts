'use client'

import useConversation from "@/zustand/useConversation";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useGetConversations = () => {
  const { data: conversations, isLoading } = useQuery({
    queryKey: ["conversation"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_HOSTNAME}/api/users`,
          {
            credentials: "include",
          }
        );
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || "Something went wrong!");
        }
        return data;
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error("An unknown error occurred.");
        }
      }
    },
  });
  return { conversations, isLoading };
};
export default useGetConversations;
