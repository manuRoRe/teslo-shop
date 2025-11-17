import { Outlet } from "react-router";
import { CustomFooter } from "../components/CustomFooter";
import { CustomHeader } from "../components/CustomHeader";

export const ShopLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomHeader></CustomHeader>
      <Outlet></Outlet>
      <CustomFooter></CustomFooter>
    </div>
  );
};
