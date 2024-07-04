"use client"

import { LogInProps } from "@/components/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { redirect, useRouter } from "next/navigation";

const useLogIn = () => {
  const router = useRouter()
  const queryClient = useQueryClient();

    const {
        mutate: loginMutation,
        isPending,
        isError,
        error,
      } = useMutation({
        mutationFn: async ({ username, password }: LogInProps) => {
          try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/auth/login`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              credentials: "include",
              body: JSON.stringify({ username, password }),
            });
    
            const data = await res.json();
    
            if (!res.ok) {
              throw new Error(data.error || "Something went wrong");
            }
            return data
          } catch (error) {
            console.error(error);
            throw error;
          }
        },
        onSuccess: (data) => {
          console.log("data useLogin Success: ", data)
           queryClient.invalidateQueries({ queryKey: ["authUser"] });
          
          // refetch the authUser
         
          // router.replace('/')
          // setAuthUserGlobal()
        },
      });
    return { loginMutation, isError, error, isPending }
};

export default useLogIn;