import { Plus } from "lucide-react";
import React, { useState } from "react";
import CategoryCreateDrawer from "./CategoryCreateDrawer";

const CategoryAddBtn = ({ storeCategory }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleClick = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="bg-transparent duration-200 active:scale-90  border border-transparent text-sm text-end px-4 py-2 rounded-lg w-full flex justify-end items-center gap-2"
      >
        <Plus className=" size-3" />
        <span>Create</span>
      </button>

      <CategoryCreateDrawer
        storeCategory={storeCategory}
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
      />
    </>
  );
};

export default CategoryAddBtn;
