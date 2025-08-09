import { CircleDollarSign, DollarSign } from "lucide-react";
import React from "react";

const ProductCard = ({ product: { id, title, image, price, category } }) => {
  return (
    <div className="product-card border border-gray-300 overflow-hidden rounded-lg bg-white">
      <img
        src={image}
        alt="product photo"
        className="h-36 w-full object-cover product-img"
      />
      <div className="p-4 flex flex-col h-[140px]">
        <div>
          <span className="text-xs text-blue-600 bg-blue-50 border border-blue-400 rounded px-2 py-0.5 product-category-name">
            {category}
          </span>
        </div>
        <h5 className="text-sm my-2 line-clamp-2 product-name">{title}</h5>
        <div className="flex items-center gap-2 text-gray-500 mt-auto">
          <CircleDollarSign className=" size-5" />
          <p className="text-sm">
            <span className="font-mono product-price">{price}</span>
            Kyat
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
