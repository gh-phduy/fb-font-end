"use client";

import useConversation from "@/zustand/useConversation";
import Sidebar from "../chat/sidebar/Sidebar";
import MessageContainer from "../chat/messages/MessageContainer";

const ChatContent = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  return <>{selectedConversation ? <MessageContainer /> : <Sidebar />}</>;
};

export default ChatContent;
