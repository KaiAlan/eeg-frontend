import { create } from 'zustand';

interface ChatState {
  isChatOpen: boolean;  // State for chat visibility
  toggleChat: () => void;  // Action to toggle chat state
  openChat: () => void;  // Action to open chat
  closeChat: () => void;  // Action to close chat
}

const useChatPanelStore = create<ChatState>((set) => ({
  isChatOpen: false,

  toggleChat: () => set((state) => ({ isChatOpen: !state.isChatOpen })),
  openChat: () => set({ isChatOpen: true }),
  closeChat: () => set({ isChatOpen: false }),
}));

export default useChatPanelStore;