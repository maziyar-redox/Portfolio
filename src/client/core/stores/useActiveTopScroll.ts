import { create } from "zustand"

interface ActiveTopScrollProps {
    activeTopScroll: boolean;
    activeElement: boolean;
    setActiveElement: (activeElement: boolean) => void;
    setActiveTopScroll: (activeTopScroll: boolean) => void;
};

export const useActiveTopScroll = create<ActiveTopScrollProps>()((set) => ({
    activeTopScroll: false,
    activeElement: true,
    setActiveElement: (activeElement) => set(() => ({ activeElement })),
    setActiveTopScroll: (activeTopScroll) => set(() => ({ activeTopScroll })),
}));