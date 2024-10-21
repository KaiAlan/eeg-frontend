
import { create } from 'zustand'

export type FilterSeller = {
    sellers: string[]
}

export type FilterSellersStore = {
    filterSellers: string[] | null
    update: (sellers: string[]) => void
}

// const dummyUser:  = {
//     id: 'Ppf1as2342',
//     label: 'John Doe',
//     email: 'johndoe@example.com'
// }

export const useFilterSellersStore = create<FilterSellersStore>((set) => ({
    filterSellers: null,
    update: (sellers: string[]) => set({ filterSellers: sellers })
}))