"use client"

import { create } from "zustand";

interface useConversationProps {
    selectedConversation: any;
    setSelectedConversation: (para: any) => void;
    messages: any[];
    setMessages: (para: any) => void

}

const useConversation = create<useConversationProps>()((set) => ({
	selectedConversation: null,
	setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
	messages: [],
	setMessages: (messages) => set({ messages }),
}));

export default useConversation;