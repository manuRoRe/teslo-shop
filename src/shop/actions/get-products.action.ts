import { tesloApi } from "@/api/teslo-api";
import type { ProductsResponse } from "@/interfaces/products.response";

// localhost:3000/api/files/product/1703767-00-A_0_2000.jpg

export const getProductsAction = async (): Promise<ProductsResponse> => {
  const { data } = await tesloApi.get<ProductsResponse>("/products");

  const productsWithImageUrl = data.products.map((p) => ({
    ...p,
    images: p.images.map(
      (img) => `${import.meta.env.VITE_API_URL}/files/product/${img}`
    ),
  }));

  return {
    ...data,
    products: productsWithImageUrl,
  };
};
