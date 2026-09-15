import { create } from "zustand";

type ShowComparison = {
  showsToCompare: number[];
  add: (id: number) => void;
  remove: (id: number) => void;
  removeAll: () => void;
};

export const useShowComparison = create<ShowComparison>((set, get) => ({
  showsToCompare: [],
  add: (id) => {
    const { showsToCompare } = get();
    if (showsToCompare.length < 3 && !showsToCompare.includes(id)) {
      set((s) => ({
        showsToCompare: [...s.showsToCompare, id],
      }));
    }
  },
  remove: (id) =>
    set((s) => ({
      showsToCompare: s.showsToCompare.filter((showId) => showId !== id),
    })),
  removeAll: () =>
    set(() => ({
      showsToCompare: [],
    })),
}));
