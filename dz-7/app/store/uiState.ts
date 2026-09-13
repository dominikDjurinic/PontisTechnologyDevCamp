import { create } from "zustand";

type UIState = {
  activeModal: string | null;
  openModal: (modal: string) => void;
  closeModal: () => void;
};

export const useUIState = create<UIState>((set) => ({
  activeModal: null,
  openModal: (modal) => set({ activeModal: modal }),
  closeModal: () => set({ activeModal: null }),
}));
