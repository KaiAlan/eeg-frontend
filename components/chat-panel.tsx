"use client";

import useChatPanelStore from "@/stores/chat-panel";
import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "./ui/button";
import {
  AvatarIcon,
  Component1Icon,
  CrossCircledIcon,
  EnterIcon,
} from "@radix-ui/react-icons";
import { Input } from "./ui/input";

const ChatPanel = ({ children }: { children: React.ReactNode }) => {
  const { isChatOpen, closeChat } = useChatPanelStore();

  if (!isChatOpen) {
    return <>{children}</>;
  }
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-screen max-w-[1517px]"
    >
      <ResizablePanel defaultSize={70}>{children}</ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={30} minSize={30}>
        <div className="fixed max-h-screen h-full max-w-[30%] w-full flex flex-col items-start justify-start pt-32 px-4">
          <div className="w-full flex justify-between items-center">
            <span className="text-sm font-bold text-primary">Doct Intl</span>
            <Button
              variant="destructive"
              size="icon"
              onClick={closeChat}
              className="bg-transparent hover:bg-red-100 shadow-none"
            >
              <CrossCircledIcon className="w-6 h-6 text-red-600" />
            </Button>
          </div>
          <div className="w-full flex flex-col justify-between max-h-screen h-full pb-10 text-xs">
            <div className="flex flex-col w-full gap-4 overflow-y-scroll">
            <div className="w-full flex flex-col justify-start items-start gap-1">
                    <span className="flex justify-start items-end gap-1">
                      <AvatarIcon />
                      <span>You</span>
                    </span>
                    <p className="pl-5 text-muted-foreground">
                      Hello! Doc intl.
                    </p>
                  </div>
                  <div className="w-full flex flex-col justify-start items-start gap-1">
                    <span className="flex justify-start items-end gap-1 text-primary">
                      <Component1Icon />
                      <span>Doc Intel</span>
                    </span>
                    <p className="pl-5 text-muted-foreground">
                      Hi Jhon! How can i help you today?
                    </p>
                  </div>
              {chat.map((item, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <div className="w-full flex flex-col justify-start items-start gap-1">
                    <span className="flex justify-start items-end gap-1">
                      <AvatarIcon />
                      <span>You</span>
                    </span>
                    <p className="pl-5 text-muted-foreground">
                      {item.john}
                    </p>
                  </div>
                  <div className="w-full flex flex-col justify-start items-start gap-1">
                    <span className="flex justify-start items-end gap-1 text-primary">
                      <Component1Icon />
                      <span>Doc Intel</span>
                    </span>
                    <p className="pl-5 text-muted-foreground">
                      {item.ai}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full flex flex-col justify-start items-start py-4 bg-background">
              <div className="w-full flex justify-between items-center gap-2">
                <Input className="max-w-4/5 w-full" />
                <Button size="icon">
                  <EnterIcon />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default ChatPanel;

const chat = [
  {
    john: "Hey AI, I just received an invoice, and I am not sure if everything looks correct. Can you help me review it?",
    ai: "Of course, John! Please share the invoice details or tell me what parts you’re concerned about.",
  },
  {
    john: "Sure! Here’s what the invoice says:\n- Invoice Number: 34567\n- Date: October 24, 2024\n- Due Date: November 3, 2024\n- Amount: $1,200\n- Vendor: ABC Supplies\n- Description: Office supplies purchase\n- Payment Method: Bank transfer",
    ai: "Great, I see the details. Let me ask a few questions to make sure everything checks out.\n\n1. Have you received all the supplies listed in the invoice?\n2. Does the total amount ($1,200) match what you expected?\n3. Are the invoice date and due date correct according to your agreement with the vendor?",
  },
  {
    john: "Good questions! Yes, the supplies were received, and the amount seems right. But the due date feels a bit tight. Isn’t a 10-day payment window too short?",
    ai: "Typically, payment windows can range from 10 to 30 days, depending on the vendor's policy. If 10 days feels tight and isn’t what you agreed upon, it might be worth asking the vendor for an extension or checking your original agreement for their terms",
  },
  {
    john: "Makes sense. Also, I noticed the payment method is listed as bank transfer, but we usually pay by credit card. Should I be concerned?",
    ai: "That’s a good catch, John. If your typical payment method is credit card, but the invoice only mentions a bank transfer, it’s a good idea to:\n\n1. Verify with the vendor that the payment method is correct.\n2. Double-check the bank details for any signs of fraud. Sometimes scammers send fake invoices with modified payment instructions.",
  },
];
