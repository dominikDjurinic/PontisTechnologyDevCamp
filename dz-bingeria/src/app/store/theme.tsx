import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = {
  theme: string;
  toggle: () => void;
};

export const useTheme = create<Theme>()(
  persist(
    (set) => ({
      theme: "light",
      toggle: () =>
        set((s) => ({
          theme: s.theme === "light" ? "dark" : "light",
        })),
    }),
    {
      name: "theme",
    },
  ),
);
