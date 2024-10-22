import { create } from "zustand";
import { OpenRequestSchemaType } from "@/schemas/open-request";

export type OpenRequestStore = {
    requests: OpenRequestSchemaType[];
    addRequest: (request: OpenRequestSchemaType) => void;
    clearRequests: () => void;
};


export const useOpenRequestStore = create<OpenRequestStore>((set) => ({
    requests: [],

    addRequest: (request: OpenRequestSchemaType) =>
        set((state) => ({
            requests: [...state.requests, request],
        })),

    clearRequests: () => set({ requests: [] }),
}));