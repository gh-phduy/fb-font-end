"use client"

import { SignUpProps } from "@/components/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const useSignUp = () => {
  const queryClient = useQueryClient();
    const router = useRouter()

    const { mutate, isError, isPending, error } = useMutation({
        mutationFn: async ({
          email,
          username,
          fullName,
          password,
        }: SignUpProps) => {
          try {
            const res = await fetch(
              `${process.env.NEXT_PUBLIC_HOSTNAME}/api/auth/signup`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ email, username, fullName, password }),
              }
            );
    
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed to create account");
            console.log(data);
            return data;
          } catch (error) {
            console.error(error);
            throw error;
          }
        },
        onSuccess: () => {
          toast.success("Account created successfully");
          queryClient.invalidateQueries({ queryKey: ["authUser"] });
          router.replace('/')
        },
      });
    return {mutate, isError, error, isPending}
};

export default useSignUp;