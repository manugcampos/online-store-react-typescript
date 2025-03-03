import type React from "react"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "wouter"
import { fetchProductDetail } from "../api/api"
import type { Product } from "../types"
import { useCartStore } from "../store/cart-store"
import { ShoppingCart, ArrowLeft } from "lucide-react"
import { Link } from "wouter"
import Rating from "../components/ui/rating"

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { addToCart, getProductQuantity } = useCartStore()

  const {
    data: product,
    isLoading,
    error,
  } = useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => fetchProductDetail(Number(id)),
  })

  if (isLoading) return <div className="flex justify-center items-center h-screen">Loading product...</div>
  if (error || !product)
    return <div className="flex justify-center items-center h-screen text-red-500">Error loading product</div>

  const quantity = getProductQuantity(product.id)

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-2">
            <li>
              <div className="flex items-center text-sm">
                <Link href="/" className="font-medium text-gray-500 hover:text-gray-900">
                  <ArrowLeft className="flex-shrink-0 h-5 w-5 text-gray-400 mr-2" aria-hidden="true" />
                  Back
                </Link>
              </div>
            </li>
          </ol>
        </nav>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start mt-8">
          <div className="flex justify-center bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              className="w-full h-full object-center object-cover sm:rounded-lg"
              style={{ maxHeight: "600px", width: "auto" }}
            />
          </div>

          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.title}</h1>
            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">${product.price.toFixed(2)}</p>
            </div>

            <div className="mt-2">
              <Rating rating={product.rating} />
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="text-base text-gray-700">{product.description}</p>
            </div>

            <div className="mt-10 flex sm:flex-col1">
              <button
                onClick={() => addToCart(product)}
                className="max-w-xs cursor-pointer flex-1 bg-black border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-black sm:w-full"
              >
                <ShoppingCart className="mr-2 h-5 w-5" aria-hidden="true" />
                {quantity > 0 ? `Add another (${quantity} in cart)` : "Add to cart"}
              </button>
            </div>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>
              <div className="border-t divide-y divide-gray-200">
                <div className="py-4">
                  <h3 className="text-sm font-medium text-gray-900">Category</h3>
                  <p className="mt-2 text-sm text-gray-500">{product.category}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
