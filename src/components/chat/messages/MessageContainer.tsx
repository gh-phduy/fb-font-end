"use client";

import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import useConversation from "@/zustand/useConversation";
import { useQuery } from "@tanstack/react-query";
import { UserType } from "@/components/types";

const MessageContainer = () => {
  const { selectedConversation } = useConversation();

  return (
    <div className="430:w-full 430:h-auto w-[60dvw] w-full flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-900 font-bold">
              {selectedConversation.fullName}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  const { data: authUser } = useQuery<UserType>({ queryKey: ["authUser"] });
  return (
    <div className="flex items-center h-full justify-center">
      <div className="px-4 justify-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser?.fullName}</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-6xl text-center" />
      </div>
    </div>
  );
};
