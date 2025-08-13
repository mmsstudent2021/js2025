import React from "react";

const CategoryBtn = ({
  category: { id, title },
  // activeCategoryId,
  // setActiveCategoryId,
}) => {
  // const isActive = id === activeCategoryId;
  const isActive = id === false;
  const baseClasses =
    "duration-200 text-sm text-end px-4 py-2 rounded-lg hover:bg-blue-100 hover:border-blue-400 active:bg-blue-100 active:border-blue-400";
  const activeClasses = "bg-blue-100 border-blue-400 text-blue-600";
  const inactiveClasses = "bg-transparent border-transparent text-black";

  const handleClick = () => {
    // setActiveCategoryId(id);
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      {title}
    </button>
  );
};

export default CategoryBtn;
