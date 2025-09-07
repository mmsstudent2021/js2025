"use client";

import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import useSWR, { useSWRConfig } from "swr";
import { categoryApiUrl, fetchCategory } from "@/services/category";
import { fetchProduct, productApiUrl, storeProduct } from "@/services/product";
import { toast } from "sonner";
import { useParams, useRouter } from "next/navigation";
import { Loader2Icon } from "lucide-react";

const ProductEditSection = () => {
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const { id } = useParams();

  const { data: product, isLoading: productLoading } = useSWR(
    `${productApiUrl}/${id}`,
    fetchProduct
  );

  const { data: categories, isLoading: categoryLoading } = useSWR(
    categoryApiUrl,
    fetchCategory
  );

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      productName: "",
      category: "",
      price: "",
      confirm: false,
    },
  });

  const onSubmit = async (data) => {
    try {
      const res = await storeProduct(data);

      if (!res.ok) {
        throw new Error("Product store api fail");
      }

      const json = await res.json();

      toast.success("Product stored successfully");

      mutate(productApiUrl);

      reset();

      // programmatic rout
      router.push(`/product/${json.id}`);
    } catch (e) {
      toast.error("Failed to store", {
        description: e.message,
      });
    }
  };

  if (productLoading || categoryLoading) {
    return (
      <section className=" p-5">
        <Loader2Icon className=" animate-spin" />
      </section>
    );
  }

  console.log(product);

  return (
    <section className=" flex flex-col p-5">
      <div className=" mb-10">
        <h2 className="text-2xl font-bold">Edit Product</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className=" grid grid-cols-4  mb-10">
          <div className=" col-span-1 ">
            {/* Product Name */}
            <div className="space-y-3 mb-5">
              <Label htmlFor="title">Product Name</Label>
              <Input
                id="title"
                placeholder="Enter product name"
                defaultValue={product?.title}
                {...register("title", {
                  required: "Product name is required",
                })}
              />
              {errors.title && (
                <p className="text-sm text-red-500">{errors.title.message}</p>
              )}
            </div>

            <div className="space-y-3 mb-5">
              <Label htmlFor="price">Product Name</Label>
              <Input
                id="price"
                placeholder="Enter product name"
                defaultValue={`${product?.price?.toString()}`}
                {...register("price", {
                  required: "Product name is required",
                })}
              />

              {errors.price && (
                <p className="text-sm text-red-500">{errors.price.message}</p>
              )}
            </div>

            {/* Category */}
            {/* <div className="space-y-3 mb-5">
              <Label>Category</Label>
              <Controller
                name="category"
                control={control}
                rules={{ required: "Please select a category" }}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className={`w-full`}>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories
                        ?.filter((category) => category.id != 0)
                        ?.map((category) => (
                          <SelectItem key={category.id} value={category.title}>
                            {category.title}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.category && (
                <p className="text-sm text-red-500">
                  {errors.category.message}
                </p>
              )}
            </div> */}
          </div>
        </div>
        <div className="">
          {/* Checkbox */}

          <div className=" mb-5">
            <div className="flex items-center space-x-2">
              <Controller
                name="confirm"
                control={control}
                rules={{ required: "You must confirm to add product" }}
                render={({ field }) => (
                  <Checkbox
                    id="confirm"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />
              <Label htmlFor="confirm">I am sure to add Product.</Label>
            </div>
            {errors.confirm && (
              <p className="text-sm text-red-500">{errors.confirm.message}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <Button
              type="button"
              onClick={() => router.back()}
              variant="outline"
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2Icon className="animate-spin" /> Updating
                </>
              ) : (
                <>Update Product</>
              )}
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ProductEditSection;
