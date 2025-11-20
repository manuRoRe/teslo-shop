import { tesloApi } from "@/api/teslo-api";
import type { Product } from "@/interfaces/product.interface";

export const getProductByIdAction = async (id: string): Promise<Product> => {
  //if (!id) throw new Error("ID is Required");
  if (id === "new") {
    return {
      id: "new",
      title: "",
      description: "",
      gender: "men",
      price: 0,
      sizes: [],
      slug: "",
      stock: 0,
      tags: [],
      images: [],
    } as unknown as Product;
  }

  const { data } = await tesloApi.get<Product>(`/products/${id}`);
  const urlImages = data.images.map((img) => {
    if (img.includes("http")) return img;
    return `${import.meta.env.VITE_API_URL}/files/product/${img}`;
  });

  return {
    ...data,
    images: urlImages,
  };
};
