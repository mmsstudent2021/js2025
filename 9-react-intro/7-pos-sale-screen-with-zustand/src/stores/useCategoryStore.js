import { create } from "zustand";

const useCategoryStore = create((set) => {
  return {
    categories: [
      { id: 0, title: "All" },
      { id: 1, title: "Bread" },
      { id: 2, title: "Cake" },
      { id: 3, title: "Coffee" },
      { id: 4, title: "Smoothie" },
    ],
    activeCategory: "All",

    addCategory: (newCategory) =>
      set((oldState) => ({
        categories: [...oldState.categories, newCategory],
      })),
    selectCategory: (newCategory) => set({ activeCategory: newCategory }),
  };
});

export default useCategoryStore;
