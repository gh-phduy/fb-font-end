import { SocketContextProvider } from "@/components/providers/SocketProvider";
import React from "react";
import { Toaster } from "react-hot-toast";

interface layoutProps {
  children: React.ReactNode;
}

const layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <SocketContextProvider>
      {children}
      <Toaster />
    </SocketContextProvider>
  );
};
export default layout;
