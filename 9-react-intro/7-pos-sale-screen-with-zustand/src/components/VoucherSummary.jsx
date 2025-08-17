import React from "react";
import useVoucherStore from "../stores/useVoucherStore";

const VoucherSummary = () => {
  const { items } = useVoucherStore();
  const total = items.reduce(
    (pv, cv) => pv + cv.product.price * cv.quantity,
    0
  );
  const tax = total * 0.05; // 5% tax

  const netTotal = total + tax;

  return (
    <div className="p-5" id="summary">
      <table className="w-full text-end text-sm font-mono">
        <tbody>
          <tr>
            <td className="py-1">Total :</td>
            <td className="py-1">{total}</td>
          </tr>
          <tr>
            <td className="py-1">Tax (5%) :</td>
            <td className="py-1">{tax}</td>
          </tr>
          <tr>
            <td className="py-1">Net Total :</td>
            <td className="py-1">{netTotal}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VoucherSummary;
