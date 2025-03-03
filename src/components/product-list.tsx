import { useQuery } from "@tanstack/react-query"
import { fetchProducts } from "../api/api"
import type { Product } from "../types"
import ProductCard from "./product-card"

const ProductList = () => {
  const { data, isLoading, error } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  })

  if (isLoading) return <p className="text-center text-xl mt-10">Loading products...</p>
  if (error) return <p className="text-center text-red-500 mt-10">Error while loading products</p>

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Featured products</h2>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList

