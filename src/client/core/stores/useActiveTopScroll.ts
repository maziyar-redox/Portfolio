import { create } from "zustand"

interface ActiveTopScrollProps {
    activeTopScroll: boolean;
    setActiveTopScroll: (activeTopScroll: boolean) => void;
};

export const useActiveTopScroll = create<ActiveTopScrollProps>()((set) => ({
    activeTopScroll: false,
    setActiveTopScroll: (activeTopScroll) => set(() => ({ activeTopScroll })),
}));