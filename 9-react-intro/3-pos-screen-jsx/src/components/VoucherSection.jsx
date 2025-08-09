import React from "react";
import VoucherItemList from "./VoucherItemList";
import VoucherSummary from "./VoucherSummary";

const VoucherSection = () => {
  return (
    <section className=" h-full col-span-2 flex flex-col">
      <h3 class="text-2xl p-5 text-end">Order Items</h3>
      <VoucherItemList />
      <VoucherSummary />
    </section>
  );
};

export default VoucherSection;
