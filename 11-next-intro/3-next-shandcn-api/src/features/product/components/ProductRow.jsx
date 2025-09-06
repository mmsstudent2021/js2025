import { Button } from "@/components/ui/button";
import { destroyProduct, productApiUrl } from "@/services/product";
import { ArrowRight, Edit, Trash, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";
import { useSWRConfig } from "swr";

const ProductRow = ({ product: { id, title, category, price } }) => {
  const { mutate } = useSWRConfig();

  const handleDelete = async () => {
    try {
      const res = await destroyProduct(id);

      if (!res.ok) {
        throw new Error("Product Delete api fail");
      }

      toast.success("Product delete successfully");

      mutate(productApiUrl);
    } catch (e) {
      toast.error("Failed to delete", {
        description: e.message,
      });
    }
  };

  return (
    <tr className="  text-stone-700 uppercase text-sm leading-normal">
      <td className="py-3 px-6 border-b text-right">{id}</td>
      <td className="py-3 px-6 border-b text-left">{title}</td>
      <td className="py-3 px-6 border-b text-left">{category}</td>
      <td className="py-3 px-6 border-b text-right">{price}</td>
      <td className="py-3 px-6 border-b text-right flex gap-2 justify-end">
        <Button onClick={handleDelete} variant={`outline`}>
          <Trash2 />
        </Button>
        <Link href={`/product/${id}/edit`}>
          <Button variant={`outline`}>
            <Edit />
          </Button>
        </Link>
        <Link href={`/product/${id}`}>
          <Button variant={`outline`}>
            <ArrowRight />
          </Button>
        </Link>
      </td>
    </tr>
  );
};

export default ProductRow;
