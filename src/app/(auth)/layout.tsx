"use client";

import AuthProvider from "@/components/providers/AuthProvider";
import { useAuthUser } from "@/zustand/useAuthUser";
import { redirect } from "next/navigation";

interface layoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<layoutProps> = ({ children }) => {
  return (
    <AuthProvider login>
      <div className="bg-[#f0f2f5] h-dvh">{children}</div>
    </AuthProvider>
  );
};

export default AuthLayout;
