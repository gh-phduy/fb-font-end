"use client";

import { useContext, useEffect } from "react";
import useConversation from "../zustand/useConversation";
import notificationSound from "../assets/sounds/notification.mp3";
import { SocketContext } from "@/components/providers/SocketProvider";
import { SocketContextType } from "@/components/chat/sidebar/Conversation";

const useListenMessages = () => {
  const { socket } = useContext(SocketContext) as SocketContextType;
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      const sound = new Audio(notificationSound);
      sound.play();
      setMessages([...messages, newMessage]);
    });

    return () => {
      socket?.off("newMessage");
    };
  }, [socket, setMessages, messages]);
};
export default useListenMessages;
