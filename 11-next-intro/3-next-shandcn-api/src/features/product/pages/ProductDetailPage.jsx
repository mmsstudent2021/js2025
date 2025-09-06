"use client";

import DashboardHeader from "@/features/dashboard/components/DashboardHeader";
import ProductDetailSection from "../components/ProductDetailSection";

const ProductDetailPage = () => {
  return (
    <>
      <DashboardHeader
        steps={[{ title: "Product", href: "/product" }]}
        currentPageTitle="Product Detail"
      />
      <ProductDetailSection />
    </>
  );
};

export default ProductDetailPage;
