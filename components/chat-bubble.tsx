"use client";

import useChatPanelStore from "@/stores/chat-panel";
import React from "react";
import { Button } from "./ui/button";

const ChatBubble = ({ children }: { children: React.ReactNode }) => {
  const { isChatOpen, openChat } = useChatPanelStore();

  if (isChatOpen) {
    return <>{children}</>;
  }
  return (
    <>
      {children}
      <Button
        onClick={openChat}
        className="fixed bottom-6 right-6 flex justify-center items-center w-12 h-12 bg-primary shadow-md drop-shadow-md rounded-full z-50"
      >
        chat
      </Button>
    </>
  );
};

export default ChatBubble;
