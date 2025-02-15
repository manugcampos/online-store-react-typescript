import { Link } from "wouter";
import type { Product } from "../types";
import type React from "react";
import Rating from "./ui/rating";
import CartButton from "./ui/cart-button";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {

  return (
    <div className="group relative flex flex-col h-full min-h-[450px] min-w-[280px]  rounded-lg shadow-sm bg-white p-4">
      <Link href={`/product/${product.id}`} className="flex flex-col h-full">
        <div className="w-full h-[320px] overflow-hidden rounded-md bg-gray-200 flex justify-center items-center">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            className="h-full w-full object-cover object-center"
            loading="lazy"
          />
        </div>

        <div className="mt-4 flex flex-col flex-grow">
          <h3 className="text-sm font-semibold text-gray-700 line-clamp-2">
            {product.title.length > 56 ? `${product.title.slice(0, 56)}...` : product.title}
          </h3>
          <div className="mt-2">
            <Rating rating={product.rating} />
          </div>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
          <p className="text-sm font-medium text-gray-900 mt-2">${product.price.toFixed(2)}</p>
        </div>
      </Link>

      <CartButton product={product} />

    </div>
  );
};

export default ProductCard;
