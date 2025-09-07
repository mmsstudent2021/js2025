"use client";

import { fetchProduct, productApiUrl } from "@/services/product";
import { Loader2Icon } from "lucide-react";
import { useParams } from "next/navigation";
import React from "react";
import useSWR from "swr";

const ProductDetailSection = () => {
  const { id } = useParams();

  const {
    data: product,
    isLoading,
    error,
  } = useSWR(`${productApiUrl}/${id}`, fetchProduct);

  if (isLoading) {
    return (
      <section className=" p-5">
        <Loader2Icon className=" animate-spin" />
      </section>
    );
  }

  return (
    <section className=" flex flex-col p-5">
      <div className=" mb-10">
        <h2 className="text-2xl font-bold">Product Detail</h2>
      </div>
      <div className=" grid grid-cols-4">
        <div className=" col-span-1">
          <table className=" w-full">
            <tbody>
              <tr className="text-stone-700 uppercase text-sm leading-normal">
                <td className="py-3 px-6 border-b text-left">#ID</td>
                <td className="py-3 px-6 border-b text-left">
                  {product?.id}
                </td>
              </tr>
              <tr className="text-stone-700 uppercase text-sm leading-normal">
                <td className="py-3 px-6 border-b text-left">Title</td>
                <td className="py-3 px-6 border-b text-left">
                  {product?.title}
                </td>
              </tr>
              <tr className="text-stone-700 uppercase text-sm leading-normal">
                <td className="py-3 px-6 border-b text-left">Price</td>
                <td className="py-3 px-6 border-b text-left">
                  {product?.price}
                </td>
              </tr>
              <tr className="text-stone-700 uppercase text-sm leading-normal">
                <td className="py-3 px-6 border-b text-left">Category</td>
                <td className="py-3 px-6 border-b text-left">
                  {product?.category}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailSection;
