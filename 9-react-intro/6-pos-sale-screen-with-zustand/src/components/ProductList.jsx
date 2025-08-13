import React, { useState } from "react";
import ProductCard from "./ProductCard";
import useProductStore from "../stores/useProductStore";

const ProductList = () => {
  // const [products, setProduct] = useState();

  const { products } = useProductStore();
  return (
    <div className=" grid grid-cols-3 gap-5">
      {products.map((el) => (
        <ProductCard product={el} key={el.id} />
      ))}
    </div>
  );
};

export default ProductList;
