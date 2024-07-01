"use client";

import { useQuery } from "@tanstack/react-query";

const useQueryAuthUser = () => {
  const { data: authUser, isLoading } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/auth/me`, {
          credentials: 'include'
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Something went wrong!");
        }

        return data;
      } catch (error) {
        console.error("Query Auth User", error);
      }
    },
  });
  return { authUser, isLoading };
};

export default useQueryAuthUser;
