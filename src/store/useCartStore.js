import { create } from 'zustand';
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      cart: {},
      addToCart: (productId) =>
        set((state) => {
          const existingQuantity = state.cart[productId] || 0;
          return {
            cart: {
              ...state.cart,
              [productId]: existingQuantity + 1,
            },
          };
        }),
      removeFromCart: (productId) =>
        set((state) => {
          const existingQuantity = state.cart[productId];
          if (existingQuantity > 1) {
            return {
              cart: {
                ...state.cart,
                [productId]: existingQuantity - 1,
              },
            };
          } else {
            // eslint-disable-next-line no-unused-vars
            const { [productId]: _, ...rest } = state.cart;
            return { cart: rest };
          }
        }),
      clearCart: () => set({ cart: {} }),
    }),
    {
      name: "cart-store",
      getStorage: () => localStorage,
    }
  )
);

export default useCartStore;
