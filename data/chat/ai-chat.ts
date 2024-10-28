'use client'

import { useChatStore } from "@/stores/chat-store";
import { useMutation, useQuery } from "@tanstack/react-query";
// import { useState } from "react";

type ChatResponseType = {
    answer: string
}

export function useGetAiChatResponse(value: string) {
    return useQuery({
        queryKey: ["getSearchResults"],
        queryFn: async () => await getChatResponse({ value }),
    })
}


export function useChatAi() {
    const { addMessage, updateLastMessage, setIsTyping } = useChatStore()

    const simulateTypingEffect = async (text: string) => {
        const words = text.split(' ');
      
        for (let i = 0; i < words.length; i++) {
          updateLastMessage(words[i], true); // Append each word incrementally
          await new Promise((resolve) => setTimeout(resolve, 20)); // Delay between words
        }
      };
    // const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async ({ value }: { value: string }) => getChatResponse({ value }),
        onMutate: () => {
            addMessage({ sender: 'Doc Intel', text: 'Thinking...' }); // Add placeholder message
            setIsTyping(true); // Start typing effect
        },
        onSuccess: async (data) => {
            updateLastMessage(''); // Clear the thinking message
            await simulateTypingEffect(data.answer); // Simulate typing
            setIsTyping(false); // End typing effect
        },
        // retry: 3,
        onError: (error) => {
            console.dir(error)
            updateLastMessage('Something went wrong. Please try again.');
            setIsTyping(false);
        },
    });
}


export const getChatResponse = async ({value}:{value: string}): Promise<ChatResponseType> => {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
        },
    };

    const response = fetch(
        `https://eegai-production.up.railway.app/api/chat?question=${value}`,
        options
    )
        .then((response) => response.json())
        .catch((err) => {
            return { error: err }
        });

    return response;
}