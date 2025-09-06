"use client";

import { fetchProduct, productApiUrl } from "@/services/product";
import useSWR from "swr";
import ProductRow from "./ProductRow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const ProductSection = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useSWR(productApiUrl, fetchProduct);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  //   console.log(products);

  return (
    <section className="p-4">
      <div className="  flex justify-between items-center mb-5">
        <div>
          <Input placeholder="Search Product" />
        </div>
        <div>
          <Link href={`/product/create`}>
            <Button>Create Product</Button>
          </Link>
        </div>
      </div>
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-stone-200 text-stone-700 uppercase text-sm leading-normal">
              <th className="py-3 px-6 border-b text-right">#</th>
              <th className="py-3 px-6 border-b text-left">Title</th>
              <th className="py-3 px-6 border-b text-left">Category</th>
              <th className="py-3 px-6 border-b text-right">Price</th>
              <th className="py-3 px-6 border-b text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, idx) => (
              <ProductRow key={product.id} product={product} index={idx + 1} />
            ))}
          </tbody>
        </table>
      </div>
      <div></div>
    </section>
  );
};

export default ProductSection;
