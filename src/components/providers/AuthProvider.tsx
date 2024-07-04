"use client";

import useQueryAuthUser from "@/hooks/useQueryAuthUser";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { InfinitySpin } from "react-loader-spinner";

interface AuthProviderProps {
  children: React.ReactNode;
  login?: boolean;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children, login }) => {
  const router = useRouter();
  const { authUser, isLoading, isSuccess, isError } = useQueryAuthUser();

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <InfinitySpin width="200" color="#0866ff" />
      </div>
    );
  }

  if (login) {
    if (isError || !authUser) {
      return <>{children}</>;
    }
    if (authUser) {
      router.replace("/");
    }
  } else {
    if (isError || !authUser) {
      router.replace("/login");
    }

    if (isSuccess) {
      return <>{children}</>;
    }
  }
};

export default AuthProvider;
