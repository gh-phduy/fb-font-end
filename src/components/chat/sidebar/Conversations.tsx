"use client";

import useGetConversations from "@/hooks/useGetConversation";
import Conversation from "./Conversation";
import { UserType } from "@/components/types";

const Conversations = () => {
  const { isLoading, conversations } = useGetConversations();
  return (
    <div className="py-2 flex flex-col overflow-y-auto">
      {conversations?.map((conversation: UserType, idx: number) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIdx={idx === conversations.length - 1}
        />
      ))}

      {isLoading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};
export default Conversations;
