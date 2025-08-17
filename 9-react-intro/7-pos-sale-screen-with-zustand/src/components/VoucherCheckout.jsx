import React from "react";
import useVoucherStore from "../stores/useVoucherStore";

const VoucherCheckout = () => {
  const { information, items, reset } = useVoucherStore();
  const handleClick = () => {
    console.log({
      items,
      information,
    });

    reset();
  };
  return (
    <div className="px-5 mt-auto">
      <div className="flex justify-end gap-3 mb-3">
        <div className="flex items-center">
          <input
            id="inline-radio"
            type="radio"
            defaultValue
            name="inline-radio-group"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="inline-radio"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Dine In
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="inline-2-radio"
            type="radio"
            defaultValue
            name="inline-radio-group"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="inline-2-radio"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Take Away
          </label>
        </div>
      </div>
      <button
        type="button"
        onClick={handleClick}
        className="w-full mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Check Out
      </button>
    </div>
  );
};

export default VoucherCheckout;
