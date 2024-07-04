"use client";

import { useQuery } from "@tanstack/react-query";
import NavBar from "./_navigation/navigation";
import { InfinitySpin } from "react-loader-spinner";
import AuthProvider from "@/components/providers/AuthProvider";

interface layoutProps {
  children: Readonly<React.ReactNode>;
}

const NavBarLayout: React.FC<layoutProps> = ({ children }) => {
  return (
    <AuthProvider>
      <NavBar />
      {children}
    </AuthProvider>
  );
};

export default NavBarLayout;
