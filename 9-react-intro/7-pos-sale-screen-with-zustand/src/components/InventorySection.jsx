import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Search } from "lucide-react";
import ProductAddBtn from "./ProductAddBtn";
import InventoryHeader from "./InventoryHeader";

const InventorySection = () => {
  return (
    <section className="h-full col-span-5 border-r border-gray-200 dark:border-gray-700 bg-gray-50 flex flex-col relative">
      <InventoryHeader />

      <div className=" grid grid-cols-6 gap-5 px-5 flex-1 ">
        <div className=" col-span-1">
          <CategoryList />
        </div>
        <div className=" col-span-5 relative">
          <div className=" h-[880px] overflow-scroll ">
            <ProductList />
          </div>
          <ProductAddBtn />
        </div>
      </div>
    </section>
  );
};

export default InventorySection;
