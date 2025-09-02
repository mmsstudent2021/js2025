
import ProductCard from "./ProductCard";
import useProductStore from "../stores/useProductStore";
import useCategoryStore from "../stores/useCategoryStore";

const ProductList = () => {
  const { filteredProducts, q } = useProductStore();
  const { activeCategory } = useCategoryStore();

  // const filteredProducts = products.filter(
  //   (el) => activeCategory === "All" || el.category === activeCategory
  // );

  return (
    <div className=" grid grid-cols-3 gap-5">
      {filteredProducts(activeCategory, q).length === 0 && (
        <div className=" col-span-full">
          <div className="product-card border border-gray-300 overflow-hidden rounded-lg bg-white p-5 flex flex-col items-center justify-center">
            <img src="/empty.svg" className=" h-[100px] mb-5" alt="" />
            <p>There is no Product</p>
          </div>
        </div>
      )}
      {filteredProducts(activeCategory, q).map((el) => (
        <ProductCard product={el} key={el.id} />
      ))}
    </div>
  );
};

export default ProductList;
