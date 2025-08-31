import { Search } from "lucide-react";
import useCategoryStore from "../stores/useCategoryStore";
import useProductStore from "../stores/useProductStore";
import ProductSearchInput from "./ProductSearchInput";

const InventoryHeader = () => {
  const { activeCategory } = useCategoryStore();
  const { filteredProducts, q } = useProductStore();

  return (
    <div className=" grid grid-cols-6 gap-5 px-5 flex-1 ">
      <div className=" col-span-1"></div>
      <div className=" col-span-5 relative">
        <div className="flex justify-between items-center py-5">
          <h3 className="text-2xl">
            Product List ({filteredProducts(activeCategory, q).length})
          </h3>
          <ProductSearchInput />
        </div>
      </div>
    </div>
  );
};

export default InventoryHeader;
