import React from "react";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Search } from "lucide-react";

const InventorySection = () => {
  return (
    <section className="h-full col-span-5 border-r border-gray-200 dark:border-gray-700 bg-gray-50 flex flex-col relative">
      <div className="flex justify-between items-center p-5">
        <h3 className="text-2xl">Sale Screen</h3>
        <div id="search-form">
          <label
            htmlFor="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <Search className=" size-5 text-gray-500" />
            </div>
            <input
              type="search"
              id="search"
              name="search"
              className="block w-full px-4 py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-6 gap-5 px-5 flex-1 ">
        <div className=" col-span-1">
          <CategoryList />
        </div>
        <div className=" col-span-5">
          <div className=" h-[880px] overflow-scroll">
            <ProductList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InventorySection;
