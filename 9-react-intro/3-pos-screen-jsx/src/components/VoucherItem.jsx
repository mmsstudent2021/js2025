import { Minus, Plus } from "lucide-react";
import React from "react";

const VoucherItem = () => {
  return (
    <div className="order-card border-b border-gray-300 px-5 py-3">
      <div className="flex justify-between mb-2">
        <p className="text-sm">Berry Layered Mousse Cake</p>
        <div className="flex gap-1 items-center">
          <button className="bg-blue-50 border border-blue-400 rounded p-1">
            <Minus className="lucide lucide-minus size-3 text-blue-600" />
          </button>
          <p className="font-mono text-end w-5 text-sm">1</p>
          <button className="bg-blue-50 border border-blue-400 rounded p-1">
            <Plus className="lucide lucide-minus size-3 text-blue-600" />
          </button>
        </div>
      </div>
      <div className="flex justify-between text-gray-500">
        <div className="flex gap-2 items-center">
          <p className="text-sm font-mono">1</p>
          <p className="text-sm font-mono">x</p>
          <p className="text-sm font-mono">10500</p>
        </div>
        <p className="text-sm font-mono">10500</p>
      </div>
    </div>
  );
};

export default VoucherItem;
