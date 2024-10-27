import { create } from 'zustand';

type ChatMessage = {
  sender: string;
  text: string;
};

interface ChatState {
  chatHistory: ChatMessage[];
  message: string;
  isTyping: boolean;
  setIsTyping: (typing: boolean) => void;
  setMessage: (value: string) => void;
  addMessage: (message: ChatMessage) => void;
  updateLastMessage: (newText: string, append?: boolean) => void;
  clearChat: () => void;
}

export const useChatStore = create<ChatState>((set) => ({
  chatHistory: [{ sender: 'Doc Intel', text: 'Hi Jhon! How can I help you today?' }],
  message: '',
  isTyping: false,
  setMessage: (value) => set({ message: value }),
  addMessage: (message) =>
    set((state) => ({
      chatHistory: [...state.chatHistory, message],
    })),

    // Update the last message in the chat history
    updateLastMessage: (newText: string, append = false) =>
      set((state) => ({
        chatHistory: state.chatHistory.map((msg, index) =>
          index === state.chatHistory.length - 1
            ? {
                ...msg,
                text: append ? `${msg.text} ${newText}`.trim() : newText,
              }
            : msg
        ),
      })),
  clearChat: () => set({ chatHistory: [] }),
  setIsTyping: (typing) => set({ isTyping: typing }), // Set isTyping state
}));