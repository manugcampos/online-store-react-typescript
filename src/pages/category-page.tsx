import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import { fetchProductsByCategory } from "../api/api";
import { Product } from "../types";
import ProductCard from "../components/product-card";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>(); 

  const { data, isLoading, error } = useQuery<Product[]>({
    queryKey: ["category", category],
    queryFn: () => fetchProductsByCategory(category),
  });

  if (isLoading) return <p className="text-center text-xl mt-10">Loading products...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">Error loading products</p>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold capitalize mb-6">{category}</h1>
      {data?.length === 0 ? (
        <p className="text-center text-gray-500">There are no products in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data!.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
