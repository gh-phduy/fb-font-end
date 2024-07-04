"use client";

import {
  SocketContext,
  // useSocketContext,
} from "@/components/providers/SocketProvider";
import { UserType } from "@/components/types";
import useConversation from "@/zustand/useConversation";
import React, { useContext } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Socket } from "socket.io-client";

interface ConversationProps {
  conversation: UserType;
  lastIdx: boolean;
}

export interface SocketContextType {
  socket: Socket | null;
  onlineUsers: string[];
}
const Conversation: React.FC<ConversationProps> = ({
  conversation,
  lastIdx,
}) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useContext(SocketContext) as SocketContextType;
  const isOnline = onlineUsers.includes(conversation._id as string);

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
				${isSelected ? "bg-sky-500" : ""}
			`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : "offline"}`}>
          <Avatar className="h-12 w-12">
            <AvatarImage src={conversation.profileImg} />
            <AvatarFallback>
              <Image
                src="/avatar-placeholder.png"
                fill={true}
                className="object-cover"
                priority
                alt="Avatar placeholder"
              />
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-text-1">{conversation.fullName}</p>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};
export default Conversation;
