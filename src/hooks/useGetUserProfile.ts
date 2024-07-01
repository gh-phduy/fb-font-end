"use client"

import { UserType } from "@/components/types";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

const useGetUserProfile = () => {
  const { username } = useParams();

    const {
        data: user,
        isLoading,
        refetch,
        isRefetching,
      } = useQuery<UserType>({
        queryKey: ["userProfile"],
        queryFn: async () => {
          try {
            const res = await fetch(
              `${process.env.NEXT_PUBLIC_HOSTNAME}/api/users/profile/${username}`,
              {
                credentials: "include",
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
      });
    return {user}
};

export default useGetUserProfile;