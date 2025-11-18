import { tesloApi } from "@/api/teslo-api";

export const getProductsAction = async () => {
  const { data } = await tesloApi.get("/products");
  return data;
};
