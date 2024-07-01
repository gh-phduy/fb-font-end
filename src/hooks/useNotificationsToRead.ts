"use client"

import { useQuery } from "@tanstack/react-query";

const useGetNotificationToRead = () => {
    const { data: notificationsToRead, isLoading: isLoadingToRead } = useQuery({
        queryKey: ["notificationsToRead"],
        queryFn: async () => {
          try {
            const res = await fetch(
              `${process.env.NEXT_PUBLIC_HOSTNAME}/api/notifications/to-read`,
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
    return {notificationsToRead, isLoadingToRead}
};

export default useGetNotificationToRead;