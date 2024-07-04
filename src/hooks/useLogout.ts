"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

const useLogout = () => {
  const router = useRouter()
    const queryClient = useQueryClient();
  const { mutate: logout, isSuccess } = useMutation({
    mutationFn: async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_HOSTNAME}/api/auth/logout`,
          {
            method: "POST",
            credentials: "include",
          }
        );
        const data = await res.json();
        console.log(data)

        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }
      } catch (error) {
        console.log(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
      router.replace('/login')
    },
    onError: () => {
      toast.error("Logout failed");
    },
  });

  // useEffect(() => {
  //   if (isSuccess) {
  //     router.replace("/");
  //   }
  // }, [isSuccess, router]); // Chú ý thêm isSuccess vào dependency array

  return { logout };
};

export default useLogout;