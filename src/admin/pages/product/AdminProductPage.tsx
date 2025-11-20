import { Navigate, useParams } from "react-router";

import { useProduct } from "@/admin/hooks/useProduct";
import { CustomFullScreamLoading } from "@/components/custom/CustomFullScreamLoading";
import { ProductForm } from "./ui/ProductForm";

export const AdminProductPage = () => {
  const { id } = useParams();

  const { isError, isLoading, data: product } = useProduct(id || "");

  const title = id === "new" ? "Nuevo producto" : "Editar producto";
  const subtitle =
    id === "new"
      ? "Aquí puedes crear un nuevo producto."
      : "Aquí puedes editar el producto.";

  if (isError) return <Navigate to="/admin/products"></Navigate>;

  if (isLoading) return <CustomFullScreamLoading></CustomFullScreamLoading>;

  if (!product) {
    return <Navigate to="/admin/products" />;
  }

  return (
    <ProductForm
      title={title}
      subtitle={subtitle}
      product={product}
    ></ProductForm>
  );
};
