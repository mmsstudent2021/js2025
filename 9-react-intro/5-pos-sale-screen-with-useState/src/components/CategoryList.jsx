import React, { useState } from "react";
import CategoryBtn from "./CategoryBtn";
import CategoryAddBtn from "./CategoryAddBtn";

const CategoryList = () => {
  // data
  // const [categories, setCategory] = useState([
  //   { id: 0, title: "All" },
  //   { id: 1, title: "Bread" },
  //   // { id: 2, title: "Cake" },
  //   // { id: 3, title: "Coffee" },
  //   // { id: 4, title: "Smoothie" },
  // ]);

  // const [activeCategoryId, setActiveCategoryId] = useState(0);

  // const storeCategory = (newCategoryTitle) => {
  //   const newCategory = {
  //     id: Date.now(),
  //     title: newCategoryTitle,
  //   };
  //   // setCategory([...categories, newCategory]);
  // };

  return (
    <>
      <div className="  flex flex-col gap-3 mb-6">
        {categories.map((el) => (
          <CategoryBtn
            // activeCategoryId={activeCategoryId}
            // setActiveCategoryId={setActiveCategoryId}
            category={el}
            key={el.id}
          />
        ))}
      </div>
      <CategoryAddBtn />
    </>
  );
};

export default CategoryList;
