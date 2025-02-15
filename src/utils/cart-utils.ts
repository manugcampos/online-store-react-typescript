import { Product } from "../types";

export const calculateTotalPrice = (cart: Product[]): number => {
  return cart.reduce((sum, item) => sum + item.price * (item.quantity || 0), 0);
};
