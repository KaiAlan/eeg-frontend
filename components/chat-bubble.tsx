"use client";

import useChatPanelStore from "@/stores/chat-panel";
import React from "react";
import { Button } from "./ui/button";
import { RiRobot2Fill } from "react-icons/ri";

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
        className="fixed bottom-6 right-6 flex flex-col justify-center items-center w-16 h-16 bg-primary shadow-md drop-shadow-md rounded-full z-50"
      >
        <RiRobot2Fill size={30} />
        {/* <span className="text-[8px]">DocIntl</span> */}
      </Button>
    </>
  );
};

export default ChatBubble;
