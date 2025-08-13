import { Plus } from "lucide-react";
import React from "react";

const ProductAddBtn = () => {
  return (
    <>
      <button className="size-12 text-white bg-blue-600 rounded-full duration-200 active:scale-90  flex justify-center items-center absolute bottom-5 right-5">
        <Plus />
      </button>
    </>
  );
};

export default ProductAddBtn;
