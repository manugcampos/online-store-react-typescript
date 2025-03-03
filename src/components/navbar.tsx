
import { useState } from "react"
import { Link } from "wouter"
import { useCartStore } from "../store/cart-store"
import { Menu, X, ShoppingCart, Search } from "lucide-react"
import { useQuery } from "@tanstack/react-query"
import { fetchCategories } from "../api/api"
import { calculateTotalPrice } from "../utils/cart-utils"

const Navbar = () => {
  const { cart } = useCartStore()
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0)
  const totalPrice = calculateTotalPrice(cart);

    const {
      data: categories,
      isLoading,
      error,
    } = useQuery<string[]>({
      queryKey: ["categories"], 
      queryFn: fetchCategories, 
    });
  
    if (isLoading) return <p>Loading Categories...</p>;
    if (error) return <p>Error while loading categories</p>;
  

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-black">Store</span>
            </Link>

            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {categories!.map((category) => (
                <Link
                  key={category}
                  href={`/category/${category}`}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900 capitalize"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <div className="relative hidden sm:block">
              <div className="relative">
                <input
                  type="text"
                  className={`${
                    isSearchOpen ? "w-60" : "w-0"
                  } transition-all duration-300 ease-in-out bg-gray-100 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-black`}
                  placeholder="Search products..."
                />
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="absolute right-0 top-0 h-full px-3 flex items-center"
                >
                  <Search className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </div>

            <Link href="/cart" className="ml-4 group -m-2 flex items-center p-2">
              <ShoppingCart className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
              <span className="ml-2">
                <span className="sr-only">items in cart, view cart</span>
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-800">
                  {totalItems} {totalItems === 1 ? "item" : "items"} (${totalPrice.toFixed(2)})
                </span>
              </span>
            </Link>

            {/* mobile button */}
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <div className="px-4 pb-2">
            <input
              type="text"
              className="w-full bg-gray-100 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-black"
              placeholder="Search products..."
            />
          </div>

          {categories!.map((category) => (
            <Link
              key={category}
              href={`/category/${category}`}
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 capitalize"
              onClick={() => setIsOpen(false)}
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

