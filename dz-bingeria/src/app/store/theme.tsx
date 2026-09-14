import { create } from "zustand";

type Theme = {
  theme: string;
  toggle: () => void;
};

export const useTheme = create<Theme>((set) => ({
  theme: "light",
  toggle: () =>
    set((s) => ({
      theme: s.theme === "light" ? "dark" : "light",
    })),
}));
