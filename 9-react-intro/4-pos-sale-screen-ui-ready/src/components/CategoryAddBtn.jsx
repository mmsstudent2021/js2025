import { Plus } from "lucide-react";
import React from "react";

const CategoryAddBtn = () => {
  return (
    <>
      <button className="bg-transparent duration-200 active:scale-90  border border-transparent text-sm text-end px-4 py-2 rounded-lg w-full flex justify-end items-center gap-2">
        <Plus className=" size-3" />
        <span>Create</span>
      </button>
    </>
  );
};

export default CategoryAddBtn;
