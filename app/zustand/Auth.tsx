import { create } from "zustand";

interface AuthModalState {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const useAuthModal = create<AuthModalState>((set) => ({
  isOpen: false,
  setIsOpen: (open) => set({ isOpen: open }),
}));
