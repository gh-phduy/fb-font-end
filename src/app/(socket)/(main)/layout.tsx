"use client";

import NavBar from "./_navigation/navigation";
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
