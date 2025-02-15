import { Product } from "../types";

const API_URL = "https://fakestoreapi.com";

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_URL}/products`);
  return response.json();
};

export const fetchProductDetail = async (id: number): Promise<Product> => {
  const response = await fetch(`${API_URL}/products/${id}`);
  return response.json();
};

export const fetchCategories = async (): Promise<string[]> => {
  const response = await fetch(`${API_URL}/products/categories`);
  return response.json();
};

export const fetchProductsByCategory = async (category: string): Promise<Product[]> => {
    const response = await fetch(`${API_URL}/products/category/${category}`);
    if (!response.ok) {
      throw new Error("Error al obtener productos de la categoría");
    }
    return response.json();
  };