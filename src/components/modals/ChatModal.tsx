"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Sidebar from "../chat/sidebar/Sidebar";
import MessageContainer from "../chat/messages/MessageContainer";
import { FaFacebookMessenger } from "react-icons/fa6";

const ChatModal = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="h-10 w-10 bg-bg-4 text-text-1 rounded-full overflow-hidden flex-center">
          <FaFacebookMessenger size={22} />
        </div>
      </DialogTrigger>
      <DialogContent className="top-[50%] space-x-3 p-5 right-[50%] rounded-lg translate-x-1/2 bg-bg-2 -translate-y-1/2 overflow-hidden flex sm:h-[450px] md:h-[550px] bg-clip-padding">
        <Sidebar />
        <MessageContainer />
      </DialogContent>
    </Dialog>
  );
};

export default ChatModal;
