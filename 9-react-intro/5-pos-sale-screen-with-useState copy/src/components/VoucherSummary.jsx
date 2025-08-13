import React from "react";

const VoucherSummary = () => {
  return (
    <div className="p-5" id="summary">
      <table className="w-full text-end text-sm font-mono">
        <tbody>
          <tr>
            <td className="py-1">Total :</td>
            <td className="py-1">10500</td>
          </tr>
          <tr>
            <td className="py-1">Tax (5%) :</td>
            <td className="py-1">500</td>
          </tr>
          <tr>
            <td className="py-1">Net Total :</td>
            <td className="py-1">10500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VoucherSummary;
