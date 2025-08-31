import React from "react";
import VoucherItem from "./VoucherItem";
import useVoucherStore from "../stores/useVoucherStore";

const VoucherItemList = () => {
  const { items } = useVoucherStore();
  return (
    <div>
      <div className="p-5 hidden last:block">
        <div className="product-card border border-gray-300 overflow-hidden rounded-lg bg-white p-5 flex flex-col items-center justify-center">
          <img src="/empty.svg" className=" h-[100px] mb-5" alt="" />
          <p className=" text-center">
            There is no item. <br />
            Click product to add in voucher
          </p>
        </div>
      </div>
      {items.map((item) => (
        <VoucherItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default VoucherItemList;
