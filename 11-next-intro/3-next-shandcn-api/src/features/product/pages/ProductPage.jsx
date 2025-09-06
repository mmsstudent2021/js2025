"use client";

import DashboardHeader from "@/features/dashboard/components/DashboardHeader";
import ProductSection from "../components/ProductSection";

export const ProductPage = () => {
  return (
    <>
      <DashboardHeader currentPageTitle="Product" />
      <ProductSection />
    </>
  );
};
