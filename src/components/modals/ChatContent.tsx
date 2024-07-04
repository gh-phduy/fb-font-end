"use client";

import useConversation from "@/zustand/useConversation";
import Sidebar from "../chat/sidebar/Sidebar";
import MessageContainer from "../chat/messages/MessageContainer";
import useWindowWidth from "@/hooks/useWindowWidth";
import { useEffect } from "react";

const ChatContent = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  const windowWidth = useWindowWidth();

  if (windowWidth < 900) {
    return <>{selectedConversation ? <MessageContainer /> : <Sidebar />}</>;
  }

  return (
    <>
      <Sidebar />
      <MessageContainer />
    </>
  );
};

export default ChatContent;
