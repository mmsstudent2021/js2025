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
    activeCategoryId: 0,

    addCategory: (newCategory) =>
      set((oldState) => ({
        categories: [...oldState.categories, newCategory],
      })),
    selectCategory: (newCategoryId) => set({ activeCategoryId: newCategoryId }),
  };
});

export default useCategoryStore;
