import { Minus, Plus } from "lucide-react";
import React from "react";
import useVoucherStore from "../stores/useVoucherStore";
import { toast } from "sonner";

const VoucherItem = ({
  item: {
    id,
    product: { title, price },
    quantity,
  },
}) => {
  const { updateQuantity, removeItem } = useVoucherStore();

  const handleClickAdd = () => {
    updateQuantity(id, 1);
  };

  const handleClickSub = () => {
    if (quantity > 1) {
      updateQuantity(id, -1);
    } else {
      if (confirm("Are you sure to remove Item ?")) {
        removeItem(id);
        toast.success("Item remove successfully",{
          position : "top-center"
        });
      }
    }
  };

  return (
    <div className="order-card border-b border-gray-300 px-5 py-3">
      <div className="flex justify-between mb-2">
        <p className="text-sm">{title}</p>
        <div className="flex gap-1 items-center">
          <button
            onClick={handleClickSub}
            className="bg-blue-50 border border-blue-400 rounded p-1 duration-200 active:scale-90"
          >
            <Minus className="lucide lucide-minus size-3 text-blue-600" />
          </button>
          <p className="font-mono text-end w-5 text-sm">{quantity}</p>
          <button
            onClick={handleClickAdd}
            className="bg-blue-50 border border-blue-400 rounded p-1 duration-200 active:scale-90"
          >
            <Plus className="lucide lucide-minus size-3 text-blue-600" />
          </button>
        </div>
      </div>
      <div className="flex justify-between text-gray-500">
        <div className="flex gap-2 items-center">
          <p className="text-sm font-mono">{quantity}</p>
          <p className="text-sm font-mono">x</p>
          <p className="text-sm font-mono">{price}</p>
        </div>
        <p className="text-sm font-mono">{quantity * price}</p>
      </div>
    </div>
  );
};

export default VoucherItem;
