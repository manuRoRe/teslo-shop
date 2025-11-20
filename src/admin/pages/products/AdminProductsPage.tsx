import { AdminTitle } from "@/admin/components/AdminTitle";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { Button } from "@/components/ui/button";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";
import { currencyFormatter } from "@/lib/currency-formatter";
import { useProducts } from "@/shop/hooks/useProducts";
import { PencilIcon, PlusIcon } from "lucide-react";
import { Link } from "react-router";

export const AdminProductsPage = () => {
  const { data } = useProducts();

  return (
    <>
      <div className="flex justify-between items-center">
        <AdminTitle
          title="Productos"
          subTitle="Aqui puedes administrar tus productos"
        ></AdminTitle>
        <div className="flex justify-end mb-10 gap-4">
          <Link to="/admin/products/new">
            <Button>
              <PlusIcon />
              Nuevo Producto
            </Button>
          </Link>
        </div>
      </div>

      <Table className="bg-white p-10 shadow-xs border border-gray-200 mb-10">
        <TableHeader>
          <TableRow>
            <TableHead>Imagen</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Inventario</TableHead>
            <TableHead>Tallas</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.products.map((prod) => (
            <TableRow key={prod.id}>
              <TableCell>
                <img
                  src={prod.images?.[0] ?? "https://placehold.co/250x250"}
                  alt={prod.title}
                  className="w-20 h-20 object-cover rounded-md"
                />
              </TableCell>
              <TableCell className="underline hover:text-blue-500">
                <Link to={`/admin/products/${prod.id}`}>{prod.title}</Link>
              </TableCell>
              <TableCell>{currencyFormatter(prod.price)}</TableCell>
              <TableCell>{prod.gender ?? prod.tags?.[0] ?? "-"}</TableCell>
              <TableCell>{prod.stock} stock</TableCell>
              <TableCell>{prod.sizes?.join(", ")}</TableCell>
              <TableCell>
                <Link to={`/admin/products/${prod.id}`}>
                  <PencilIcon className="text-blue-500" />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <CustomPagination totalPages={data?.pages || 1}></CustomPagination>
    </>
  );
};
