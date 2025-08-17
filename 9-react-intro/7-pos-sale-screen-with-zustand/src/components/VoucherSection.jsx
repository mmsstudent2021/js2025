import React from "react";
import VoucherItemList from "./VoucherItemList";
import VoucherSummary from "./VoucherSummary";
import VoucherCheckout from "./VoucherCheckout";
import useVoucherStore from "../stores/useVoucherStore";
import VoucherInfo from "./VoucherInfo";

const VoucherSection = () => {
  const { items } = useVoucherStore();
  return (
    <section className=" h-full col-span-2 flex flex-col">
      <h3 className="text-2xl p-5 text-end">Voucher Items ({items.length})</h3>
      <VoucherInfo />
      <VoucherItemList />
      <VoucherSummary />
      <VoucherCheckout />
    </section>
  );
};

export default VoucherSection;

// customer, date, time, voucher ID
// change ပြန်အမ်းငွေ
//
