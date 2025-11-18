import { useQuery } from "@tanstack/react-query";
import { getProductsAction } from "../actions/get-products.action";
import { useParams, useSearchParams } from "react-router";
import type { Gender, Size } from "@/types/common";

export const useProducts = () => {
  const [searchParams] = useSearchParams();

  const limit = searchParams.get("limit") || 9;
  const page = searchParams.get("page") || 1;

  const offset = (Number(page) - 1) * Number(limit);

  const sizes = (searchParams.get("sizes") || []) as Size;
  const { gender } = useParams();

  const genderPage: Gender = (!gender ? "" : gender) as Gender;

  return useQuery({
    queryKey: ["products", { offset, limit, gender, sizes }],
    queryFn: () =>
      getProductsAction({
        limit: limit,
        offset: isNaN(offset) ? 0 : offset,
        gender: genderPage,
        sizes: sizes,
      }),
    staleTime: 1000 * 5 * 60,
  });
};
