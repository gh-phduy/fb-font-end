"use client";

// import NotifyModal from "@/components/modals/NotifyModal";
import { useQuery } from "@tanstack/react-query";
import NavBar from "./_navigation/navigation";
import { InfinitySpin } from "react-loader-spinner";
import { redirect, useRouter } from "next/navigation";
import useQueryAuthUser from "@/hooks/useQueryAuthUser";

interface layoutProps {
  children: Readonly<React.ReactNode>;
}

const NavBarLayout: React.FC<layoutProps> = ({ children }) => {
  // const router = useRouter();
  const { authUser, isLoading } = useQueryAuthUser();

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <InfinitySpin width="200" color="#0866ff" />
      </div>
    );
  }

  if (!authUser) {
    // router.push("/login");
    redirect("/login");
  }
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default NavBarLayout;
