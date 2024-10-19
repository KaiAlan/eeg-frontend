
import { create } from 'zustand'

export type User = {
    id: string;
    name: string;
    email: string;
}

export type UserStore = {
    user: User | null
    update: (user: User) => void
}

const dummyUser: User = {
    id: 'Ppf1as2342',
    name: 'John Doe',
    email: 'johndoe@example.com'
}

export const useUserStore = create<UserStore>((set) => ({
    user: dummyUser,
    update: (user) => set(() => ({user}))
}))