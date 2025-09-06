"use client";

import DashboardHeader from "@/features/dashboard/components/DashboardHeader";
import ProductCreateSection from "../components/ProductCreateSection";

const ProductCreatePage = () => {
  return (
    <>
      <DashboardHeader
        steps={[{ title: "Product", href: "/product" }]}
        currentPageTitle="Create Product"
      />
      <ProductCreateSection />
    </>
  );
};

export default ProductCreatePage;
