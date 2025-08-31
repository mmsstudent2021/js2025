import { CircleDollarSign, DollarSign } from "lucide-react";
import React from "react";
import useVoucherStore from "../stores/useVoucherStore";
import { toast } from "sonner";

const ProductCard = ({ product: { id, title, image, price, category } }) => {
  const { items, addItem, updateQuantity } = useVoucherStore();
  const isExistedItem = items.find((el) => el.product.id === id);

  const handleClick = () => {
    if (isExistedItem) {
      updateQuantity(isExistedItem.id, 1);
    } else {
      const newItem = {
        id: Date.now(),
        product: { id, title, price },
        quantity: 1,
      };
      addItem(newItem);
      toast.success("Added to voucher", {
        position: "top-center",
      });
    }
  };
  return (
    <div
      onClick={handleClick}
      className="relative product-card border border-gray-300  overflow-hidden rounded-lg bg-white duration-200 active:scale-95"
    >
      {isExistedItem && (
        <div className=" absolute right-3 top-3  bg-blue-500 text-white rounded-full text-xs px-2 py-1">
          Added
        </div>
      )}
      <img
        src={image}
        alt="product photo"
        className="h-36 w-full object-cover product-img"
      />
      <div className="p-4 flex flex-col h-[140px] border-t border-blue-100">
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
