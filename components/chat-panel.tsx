"use client";

import useChatPanelStore from "@/stores/chat-panel";
import React, { useEffect, useRef } from "react";
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
  PieChartIcon,
} from "@radix-ui/react-icons";
import { Input } from "./ui/input";
import { useChatStore } from "@/stores/chat-store";
import { useChatAi } from "@/data/chat/ai-chat";

const ChatPanel = ({ children }: { children: React.ReactNode }) => {
  const { isChatOpen, closeChat } = useChatPanelStore();
  const { chatHistory, message, setMessage, addMessage, isTyping } =
    useChatStore();
    const mutation = useChatAi()
    const chatEndRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);


   // Scroll to the bottom whenever chat history changes
   useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);

  const handleSendMessage = () => {
    if (inputRef.current && !isTyping) {
        const inputValue = inputRef.current.value.trim()
        setMessage(inputValue)
        if (message.trim() === "") return; // Prevent empty messages
        addMessage({ sender: "You", text: message });
        mutation.mutate({ value: message });
        inputRef.current.value = "";
    }
  };

//   const formatMessage = (text: string) => {
//     return text.split('\n').map((line, index) => {
//         // Handle links and images
//         const linkRegex = /\[([^[]+)]\((https?:\/\/[^\s]+)\)/g;

//         // Replace line endings and format with bold and links
//         let formattedLine = line
//             .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') // Bold text
//             .replace(linkRegex, '<img src="$2" style="width: 50px; height: 50px;" target="_blank" rel="noopener noreferrer"/>'); // Links

//         // Check if the line contains a product image URL and replace it with an <img> tag
//         const imageRegex = /https?:\/\/[^\s]+/; // Simple regex to match any URL
//         const imageMatch = line.match(imageRegex);
//         if (imageMatch) {
//             const imgUrl = imageMatch[0];
//             formattedLine = formattedLine.replace(imageMatch[0], `<img src="${imgUrl}" alt="Product Image" className="max-w-[100px]" />`);
//         }

//         // Replace ' - ' with line breaks for better readability
//         formattedLine = formattedLine.replace(/ - /g, '<br />').replace(/(\d+\.) /g, '<br />$1'); // Ensure numbered list has line breaks

//         // Return the line as a paragraph with dangerously set HTML
//         return <p key={index} dangerouslySetInnerHTML={{ __html: formattedLine }} />;
//     });
// };

// const formatMessage = (text: string) => {
//   return text.split('\n\n').map((block, index) => {
//       const lines = block.split('\n').map(line => line.trim());
      
//       // Check if the first line is a numbered product title
//       const isProductTitle = /^\d+\.\s+\*\*(.+?)\*\*/.test(lines[0]);
      
//       if (isProductTitle) {
//           // Extract product details and image URL
//           const productImageUrlMatch = block.match(/(https?:\/\/[^\s]+)/);
//           const productImageUrl = productImageUrlMatch ? productImageUrlMatch[0] : null;

//           // Extract the rest of the lines as product details
//           const productDetails = lines.map(line => {
//               // Bold text
//               return line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
//                   .replace(/ - /g, '<br />'); // Replace ' - ' with line breaks
//           });

//           return (
//               <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
//                   <div style={{ flexGrow: 1 }}>
//                       {productDetails.map((detail, idx) => (
//                           <p key={idx} dangerouslySetInnerHTML={{ __html: detail }} />
//                       ))}
//                   </div>
//                   {productImageUrl && (
//                       <img src={productImageUrl} alt="Product Image" style={{ maxWidth: '100px', height: 'auto', marginLeft: '10px' }} />
//                   )}
//               </div>
//           );
//       }
      
//       // If it's not a product title, just return the block as plain text
//       return (
//           <p key={index}>{block}</p>
//       );
//   });
// };

const formatMessage = (text: string) => {
  return text.split('\n\n').map((block, index) => {
      const lines = block.split('\n').map(line => line.trim());

      // Check if the first line is a numbered product title
      const isProductTitle = /^\d+\.\s+\*\*(.+?)\*\*/.test(lines[0]);

      if (isProductTitle) {
          // Extract product details and image URL
          const productImageUrlMatch = block.match(/(https?:\/\/[^\s]+)/);
          const productImageUrl = productImageUrlMatch ? productImageUrlMatch[0] : null;

          // Extract the rest of the lines as product details
          const productDetails = lines.map(line => {
              // Bold text and remove the product image link text
              return line
                  .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                  .replace(/ - /g, '<br />') // Replace ' - ' with line breaks
                  .replace(/Product Image.*/, ''); // Remove any remaining "Product Image" text
          });

          return (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{ flexGrow: 1 }}>
                      {productDetails.map((detail, idx) => (
                          <p key={idx} dangerouslySetInnerHTML={{ __html: detail }} />
                      ))}
                  </div>
                  {productImageUrl && (
                      <a href={productImageUrl} target="_blank" rel="noopener noreferrer">
                          <img src={productImageUrl} alt="Product Image" style={{ maxWidth: '100px', height: 'auto', marginLeft: '10px' }} />
                      </a>
                  )}
              </div>
          );
      }

      // If it's not a product title, just return the block as plain text
      return (
          <p key={index}>{block}</p>
      );
  });
};


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
              {/* <div className="w-full flex flex-col justify-start items-start gap-1">
                <span className="flex justify-start items-end gap-1">
                  <AvatarIcon />
                  <span>You</span>
                </span>
                <p className="pl-5 text-muted-foreground">Hello! Doc intl.</p>
              </div>
              <div className="w-full flex flex-col justify-start items-start gap-1">
                <span className="flex justify-start items-end gap-1 text-primary">
                  <Component1Icon />
                  <span>Doc Intel</span>
                </span>
                <p className="pl-5 text-muted-foreground">
                  Hi Jhon! How can i help you today?
                </p>
              </div> */}
              {chatHistory.map((chat, index) => (
                <div key={index} className="w-full flex flex-col gap-1">
                  <span className="flex items-end gap-1">
                    {chat.sender === "You" ? (
                      <AvatarIcon />
                    ) : (
                      <Component1Icon />
                    )}
                    <span
                      className={chat.sender === "You" ? "" : "text-primary"}
                    >
                      {chat.sender}
                    </span>
                  </span>
                  <div className="pl-5 text-muted-foreground">
                {chat.sender === 'Doc Intel' ? formatMessage(chat.text) : <p>{chat.text}</p>}
              </div>
              <div ref={chatEndRef} /> 
                </div>
              ))}
            </div>
            <div className="w-full flex flex-col justify-start items-start py-4 bg-background">
              <div className="w-full flex justify-between items-center gap-2">
                <Input
                  className="max-w-4/5 w-full"
                  // value={message}
                  ref={inputRef}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <Button size="icon" onClick={handleSendMessage} disabled={isTyping}>
                {mutation.isPending ? <PieChartIcon className="animate-spin" /> : <EnterIcon />}
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

