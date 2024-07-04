"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Sidebar from "../chat/sidebar/Sidebar";
import MessageContainer from "../chat/messages/MessageContainer";
import { FaFacebookMessenger } from "react-icons/fa6";
import useConversation from "@/zustand/useConversation";
import { useEffect } from "react";
import ChatContent from "./ChatContent";

const ChatModal = () => {
  // const { selectedConversation, setSelectedConversation } = useConversation();

  // useEffect(() => {
  //   // cleanup function (unmounts)
  //   return () => setSelectedConversation(null);
  // }, [setSelectedConversation]);
  return (
    <Dialog>
      <DialogTrigger>
        <div className="h-10 w-10 bg-bg-4 text-text-1 rounded-full overflow-hidden flex-center">
          <FaFacebookMessenger size={22} />
        </div>
      </DialogTrigger>
      <DialogContent className="top-[50%] h-[60dvh] 430:h-auto space-x-3 p-5 right-[50%] rounded-lg translate-x-1/2 bg-bg-2 -translate-y-1/2 flex sm:h-[450px] max-w-[1400px] md:h-[550px] bg-clip-padding">
        <ChatContent />
      </DialogContent>
    </Dialog>
  );
};

export default ChatModal;
