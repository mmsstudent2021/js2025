"use client";

import DashboardHeader from "@/features/dashboard/components/DashboardHeader";
import { useParams } from "next/navigation";
import ProductEditSection from "../components/ProductEditSection";

const ProductEditPage = () => {
  const { id } = useParams();

  return (
    <>
      <DashboardHeader
        steps={[
          { title: "Product", href: "/product" },
          { title: "Product Detail", href: `/product/${id}` },
        ]}
        currentPageTitle="Edit Product"
      />
      <ProductEditSection />
    </>
  );
};

export default ProductEditPage;
