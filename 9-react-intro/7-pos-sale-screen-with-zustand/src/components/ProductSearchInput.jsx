import { Search } from "lucide-react";
import { useRef, useState } from "react";
import useProductStore from "../stores/useProductStore";

const ProductSearchInput = () => {
  const { setQ } = useProductStore();

  //   const [keyword, setKeyword] = useState("aaa");
  //   console.log(keyword);

  const inputRef = useRef();

  //   console.log(inputRef);

  const handleChange = () => {
    // setKeyword(e.target.value);
    setQ(inputRef.current.value);
  };

  return (
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
          onChange={handleChange}
          ref={inputRef}
          //   value={keyword}
          className="block w-full px-4 py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default ProductSearchInput;
