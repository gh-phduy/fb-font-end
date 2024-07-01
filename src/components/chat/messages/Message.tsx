"use client";

import { MessageType, UserType } from "@/components/types";
import { extractTime } from "@/components/utils/date";
import useConversation from "@/zustand/useConversation";
import { useQuery } from "@tanstack/react-query";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import React from "react";

interface MessageProps {
  message: MessageType;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const { data: authUser } = useQuery<UserType>({ queryKey: ["authUser"] });
  const { selectedConversation } = useConversation();
  const fromMe = authUser?._id === message.senderId;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser?.profileImg
    : selectedConversation?.profileImg;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  const shakeClass = message.shouldShake ? "shake" : "";

  console.log("Mes: ", message);
  console.log("Mes.mes: ", message.message);

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <Avatar>
            <AvatarImage src={profilePic} />
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
      </div>
      <div
        className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}
      >
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
};
export default Message;
