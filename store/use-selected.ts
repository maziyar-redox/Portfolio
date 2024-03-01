import { create } from "zustand";

interface SelectedStoreProps {
    selected: string;
    setSelected: (item: string) => void;
};

export const SelectedStore = create<SelectedStoreProps>((set) => ({
    selected: "Web Design",
    setSelected: (item) => set((state) => ({ selected: item })),
}));