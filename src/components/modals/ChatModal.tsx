"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FaFacebookMessenger } from "react-icons/fa6";
import ChatContent from "./ChatContent";

const ChatModal = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="h-10 w-10 bg-bg-4 text-text-1 rounded-full overflow-hidden flex-center">
          <FaFacebookMessenger size={22} />
        </div>
      </DialogTrigger>
      <DialogContent className="top-[50%] h-[60dvh] 430:h-[70dvh] space-x-3 p-5 right-[50%] rounded-lg translate-x-1/2 bg-bg-2 w-[90dvw] -translate-y-1/2 flex max-w-[1400px] bg-clip-padding">
        <ChatContent />
      </DialogContent>
    </Dialog>
  );
};

export default ChatModal;
