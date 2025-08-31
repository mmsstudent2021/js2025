import { create } from "zustand";

const useCategoryStore = create((set) => {
  return {
    categories: [],
    activeCategory: "All",
    setCategories: (newCategories) => set({ categories: newCategories }),
    addCategory: (newCategory) =>
      set((oldState) => ({
        categories: [...oldState.categories, newCategory],
      })),
    selectCategory: (newCategory) => set({ activeCategory: newCategory }),
  };
});

export default useCategoryStore;
