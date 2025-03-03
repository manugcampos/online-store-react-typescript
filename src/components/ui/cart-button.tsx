import { ShoppingCart, Plus, Minus } from "lucide-react";
import type { Product } from "../../types";
import { useCartStore } from "../../store/cart-store";

interface CartButtonProps {
  product: Product;
}

const CartButton: React.FC<CartButtonProps> = ({ product }) => {
  const { addToCart, removeFromCart, getProductQuantity } = useCartStore();
  const quantity = getProductQuantity(product.id);

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleRemoveFromCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    removeFromCart(product.id);
  };

  return (
    <div className="mt-4">
      {quantity === 0 ? (
        <button
          onClick={handleAddToCart}
          className="cursor-pointer flex w-full items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to cart
        </button>
      ) : (
        <div className="flex items-center justify-between">
          <button
            onClick={handleRemoveFromCart}
            className="flex cursor-pointer items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            <Minus className="h-5 w-5" />
          </button>
          <span className="text-sm font-medium">{quantity}</span>
          <button
            onClick={handleAddToCart}
            className="flex cursor-pointer items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default CartButton;
