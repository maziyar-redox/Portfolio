import { create } from "zustand";

interface ActiveStoreProps {
    activeItem: string;
    setActiveItem: (item: string) => void;
};

export const ActiveStore = create<ActiveStoreProps>((set) => ({
    activeItem: "design",
    setActiveItem: (item) => set((state) => ({ activeItem: item })),
}));