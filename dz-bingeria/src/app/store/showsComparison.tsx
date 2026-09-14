import { create } from "zustand";

type ShowComparison = {
  showsToCompare: number[];
  add: (id: number) => void;
  remove: (id: number) => void;
  removeAll: () => void;
};

export const useShowComparison = create<ShowComparison>((set) => ({
  showsToCompare: [],
  add: (id) =>
    set((s) => ({
      showsToCompare: [...s.showsToCompare, id],
    })),
  remove: (id) =>
    set((s) => ({
      showsToCompare: s.showsToCompare.filter((showId) => showId !== id),
    })),
  removeAll: () =>
    set(() => ({
      showsToCompare: [],
    })),
}));
