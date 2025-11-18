import { tesloApi } from "@/api/teslo-api";
import type { ProductsResponse } from "@/interfaces/products.response";
import type { Gender, Size } from "@/types/common";

// localhost:3000/api/files/product/1703767-00-A_0_2000.jpg

interface Options {
  offset?: number | string;
  limit?: number | string;
  gender?: Gender;
  sizes?: Size;
  minPrice?: number;
  maxPrice?: number;
  query?: string;
}

export const getProductsAction = async ({
  offset,
  gender,
  limit,
  sizes,
  minPrice,
  maxPrice,
  query,
}: Options): Promise<ProductsResponse> => {
  const { data } = await tesloApi.get<ProductsResponse>("/products", {
    params: {
      offset: offset,
      limit: limit,
      gender: gender,
      sizes: sizes,
      minPrice,
      maxPrice,
      q: query,
    },
  });

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
