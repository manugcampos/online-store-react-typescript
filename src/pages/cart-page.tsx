import type React from "react";
import { useCartStore } from "../store/cart-store";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { Link } from "wouter";
import { calculateTotalPrice } from "../utils/cart-utils";

const CartPage: React.FC = () => {
  const { cart, removeFromCart, clearCart, addToCart } = useCartStore();

  const totalPrice = calculateTotalPrice(cart);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-0">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="mt-12 text-center">
            <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">Your cart is empty</h3>
            <p className="mt-1 text-sm text-gray-500">Start adding products to your cart</p>
          </div>
        ) : (
          <div className="mt-12">
            <section aria-labelledby="cart-heading">
              <h2 id="cart-heading" className="sr-only">
                Products in your cart
              </h2>
              <ul role="list" className="border-t border-b border-gray-200 divide-y divide-gray-200">
                {cart.map((item) => (
                  <li key={item.id} className="flex py-6">
                    <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>

                    <div className="ml-4 flex-1 flex flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{item.title}</h3>
                          <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                      </div>
                      <div className="flex-1 flex items-end justify-between text-sm">
                        <div className="flex items-center">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-1 rounded-full text-gray-400 hover:text-gray-500"
                          >
                            <Minus className="h-5 w-5" />
                          </button>
                          <p className="mx-2 text-gray-500">Quantity: {item.quantity}</p>
                          <button
                            onClick={() => addToCart(item)}
                            className="p-1 rounded-full text-gray-400 hover:text-gray-500"
                          >
                            <Plus className="h-5 w-5" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="font-medium text-black hover:text-gray-800"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <div className="mt-10 sm:ml-auto sm:w-full sm:max-w-md">
              <div className="bg-gray-50 px-4 py-6 sm:px-6 rounded-lg">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>${totalPrice.toFixed(2)}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                <div className="mt-6">
                  <Link href="/checkout">
                    <button
                      className="w-full bg-black border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-black"
                      disabled={cart.length === 0}
                    >
                      Checkout
                    </button>
                  </Link>
                </div>
                <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                  <button type="button" className="text-black font-medium hover:text-gray-800" onClick={clearCart}>
                    Empty cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
