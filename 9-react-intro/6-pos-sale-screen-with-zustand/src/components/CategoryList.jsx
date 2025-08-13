
import CategoryBtn from "./CategoryBtn";
import CategoryAddBtn from "./CategoryAddBtn";
import useCategoryStore from "../stores/useCategoryStore";

const CategoryList = () => {
  const { categories } = useCategoryStore();


  return (
    <>
      <div className="  flex flex-col gap-3 mb-6">
        {categories.map((el) => (
          <CategoryBtn category={el} key={el.id} />
        ))}
      </div>
      <CategoryAddBtn />
    </>
  );
};

export default CategoryList;
