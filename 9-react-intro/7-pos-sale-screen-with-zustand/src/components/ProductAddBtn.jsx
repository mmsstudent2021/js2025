import { Plus } from "lucide-react";
import ProductCreateDrawer from "./ProductCreateDrawer";
import useProductStore from "../stores/useProductStore";

const ProductAddBtn = () => {
  const { setProductDrawerStatus } = useProductStore();
  const handleClick = () => {
    setProductDrawerStatus(true);
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="size-12 text-white bg-blue-600 rounded-full duration-200 active:scale-90  flex justify-center items-center absolute bottom-5 right-5"
      >
        <Plus />
      </button>
      <ProductCreateDrawer />
    </>
  );
};

export default ProductAddBtn;
