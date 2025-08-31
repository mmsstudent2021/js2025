import { create } from "zustand";
import { generateVoucherId } from "../utils/voucher";
import dayjs from "dayjs";

const useVoucherStore = create((set, get) => ({
  items: [],
  //   addItems: (newItem) => set({ items: [...get().items, newItem] }),
  addItem: (newItem) => set((state) => ({ items: [...state.items, newItem] })),
  updateQuantity: (id, amount) =>
    set((state) => ({
      items: state.items.map((el) =>
        el.id === id ? { ...el, quantity: el.quantity + amount } : el
      ),
    })),

  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((el) => el.id != id) })),
  information: {
    voucherId: generateVoucherId(),
    date: dayjs().format("DD/MM/YYYY"),
    time: dayjs().format("h:mm:ss A"),
  },
  reset: () =>
    set({
      items: [],
      information: {
        voucherId: generateVoucherId(),
        date: dayjs().format("DD/MM/YYYY"),
        time: dayjs().format("h:mm:ss A"),
      },
    }),
}));

export default useVoucherStore;
