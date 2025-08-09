import React from "react";

const CategoryBtn = ({ category: { id, title } }) => {
  // console.log(props);
  return (
    <button className="bg-blue-100 border border-blue-400 duration-200 text-blue-600 text-sm text-end px-4 py-2 rounded-lg hover:bg-blue-100 hover:border-blue-400 active:bg-blue-100 active:border-blue-400">
      {title}
    </button>
  );
};

export default CategoryBtn;
