"use client"

import { useQuery } from "@tanstack/react-query";

const useGetNotification = () => {
    const { data: notifications, isLoading, error } = useQuery({
        queryKey: ["notifications"],
        queryFn: async () => {
          try {
            const res = await fetch(
              `${process.env.NEXT_PUBLIC_HOSTNAME}/api/notifications`,
              {
                credentials: "include",
              }
            );
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Something went wrong");
            return data;
          } catch (error) {
            console.log();
          }
        },
      });
    return {notifications, isLoading, error}
};

export default useGetNotification;