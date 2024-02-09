import { create } from "zustand";

interface SidebarStoreProps {
    collapse: boolean;
    onExpand: () => void;
    onCollapse: () => void;
};

export const SidebarStore = create<SidebarStoreProps>((set) => ({
    collapse: false,
    onExpand: () => set(() => ({ collapse: true })),
    onCollapse: () => set(() => ({ collapse: false }))
}));