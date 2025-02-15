import { create } from "zustand"
import type { Product } from "../types"

interface CartItem extends Product {
  quantity: number
}

interface CartState {
  cart: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (id: number) => void
  clearCart: () => void
  getProductQuantity: (id: number) => number
}

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id)
      if (existingItem) {
        return {
          cart: state.cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)),
        }
      }
      return { cart: [...state.cart, { ...product, quantity: 1 }] }
    }),
  removeFromCart: (id) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === id)
      if (existingItem && existingItem.quantity > 1) {
        return {
          cart: state.cart.map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item)),
        }
      }
      return {
        cart: state.cart.filter((item) => item.id !== id),
      }
    }),
  clearCart: () => set({ cart: [] }),
  getProductQuantity: (id) => {
    const item = get().cart.find((item) => item.id === id)
    return item ? item.quantity : 0
  },
}))

