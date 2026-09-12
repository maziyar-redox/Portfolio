import { create } from "zustand"

interface ActiveState {
    activeSection: string;
    setActiveSection: (activeSection: string) => void;
};

export const useActiveSection = create<ActiveState>()((set) => ({
    activeSection: "",
    setActiveSection: (activeSection) => set(() => ({ activeSection })),
}))