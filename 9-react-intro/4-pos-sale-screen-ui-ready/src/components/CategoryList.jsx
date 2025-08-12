import React, { useState } from "react";
import CategoryBtn from "./CategoryBtn";

const CategoryList = () => {
  // data
  const [categories, setCategory] = useState([
    { id: 0, title: "All" },
    { id: 1, title: "Bread" },
    { id: 2, title: "Cake" },
    { id: 3, title: "Coffee" },
    { id: 4, title: "Smoothie" },
  ]);

  const [activeCategoryId, setActiveCategoryId] = useState(0);

  console.log(categories);

  // mutable way - push

  // immutable way [...categories, {new}]

  return (
    <div className="  flex flex-col gap-3 mb-6">
      {categories.map((el) => (
        <CategoryBtn
          activeCategoryId={activeCategoryId}
          setActiveCategoryId={setActiveCategoryId}
          category={el}
          key={el.id}
        />
      ))}
    </div>
  );
};

export default CategoryList;
