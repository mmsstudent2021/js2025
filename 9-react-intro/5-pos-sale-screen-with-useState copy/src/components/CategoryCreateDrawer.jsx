import { X } from "lucide-react";
import React from "react";
import CategoryCreateForm from "./CategoryCreateForm";

const CategoryCreateDrawer = ({ openDrawer, setOpenDrawer, storeCategory }) => {
  const handleClose = () => {
    setOpenDrawer(false);
  };
  return (
    <div
      className={`fixed top-0 left-0 z-40 h-screen w-[400px] bg-white  duration-300 ${
        openDrawer ? " translate-x-0 shadow-2xl " : " -translate-x-full"
      }`}
    >
      <div className=" flex justify-between items-start p-5 mb-5">
        <h3 className=" font-bold text-xl ">Create new category</h3>
        <X onClick={handleClose} />
      </div>
      <CategoryCreateForm setOpenDrawer={setOpenDrawer} storeCategory={storeCategory} />
    </div>
  );
};

export default CategoryCreateDrawer;
