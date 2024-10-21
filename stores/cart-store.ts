import { create } from 'zustand';

export type CartItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

export type CartStore = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (item: CartItem) => void;
  deleteItem: (id: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  
  addItem: (item: CartItem) => set((state) => {
    const existingItem = state.items.find((i) => i.id === item.id);
    if (existingItem) {
      return {
        items: state.items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        ),
      };
    }
    return { items: [...state.items, item] };
  }),
  removeItem: (item: CartItem) => set((state) => {
    const existingItem = state.items.find((i) => i.id === item.id);
    if (existingItem) {
      return {
        items: state.items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity - item.quantity } : i
        ),
      };
    }
    return { items: [...state.items, item] };
  }),

  deleteItem: (id: string) => set((state) => ({
    items: state.items.filter((item) => item.id !== id),
  })),

  clearCart: () => set({ items: [] }),
}));
