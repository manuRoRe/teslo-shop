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
import { PlusIcon } from "lucide-react";
import { Link } from "react-router";

export const AdminProductsPage = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <AdminTitle
          title="Productos"
          subTitle="Aqui puedes administrar tus productos"
        ></AdminTitle>

        <Link to="/admin/products/new">
          <Button>
            <PlusIcon />
            Nuevo Producto
          </Button>
        </Link>
      </div>

      <Table className="bg-white p-10 shadow-xs border border-gray-200 mb-10">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Imagen</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Inventario</TableHead>
            <TableHead>Tallas</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium text-center">1</TableCell>
            <TableCell>
              <img
                src="https://placehold.co/250x250"
                alt="product"
                className="w-20 h-20 object-cover rounded-md"
              />
            </TableCell>
            <TableCell>Producto</TableCell>
            <TableCell>$250.00</TableCell>
            <TableCell>Categoria 1</TableCell>
            <TableCell>100 stock</TableCell>
            <TableCell>XS,S,L</TableCell>
            <TableCell className="text-right">
              <Link to="/admin/products/t-shirt">Editar</Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <CustomPagination totalPages={8}></CustomPagination>
    </>
  );
};
