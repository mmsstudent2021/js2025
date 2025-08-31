import { create } from "zustand";

const useProductStore = create((set, get) => ({
  products: [],
  addProduct: (newProduct) =>
    set((state) => ({ products: [...state.products, newProduct] })),
  productDrawerStatus: false,
  setProductDrawerStatus: (newStatus) =>
    set({ productDrawerStatus: newStatus }),

  filteredProducts: (category, keyword) => {
    const { products } = get();
    return products
      .filter((el) => category === "All" || el.category === category)
      .filter(
        (el) => el.title.toLowerCase().search(keyword.toLowerCase()) != -1
      );
  },
  q: "",
  setQ: (keyword) => set({ q: keyword }),
}));

export default useProductStore;
