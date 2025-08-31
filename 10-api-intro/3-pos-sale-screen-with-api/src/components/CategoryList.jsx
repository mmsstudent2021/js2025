import CategoryBtn from "./CategoryBtn";
import CategoryAddBtn from "./CategoryAddBtn";
import { useEffect, useState } from "react";
import useCategoryStore from "../stores/useCategoryStore";
import LoadingSpinner from "./LoadingSpinner";
import CategorySkeletonLoader from "./CategorySkeletonLoader";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const CategoryList = () => {
  // const { categories, setCategories } = useCategoryStore();
  // const [isLoading, setIsLoading] = useState(true);
  // const [categories, setCategories] = useState([]);
  // console.log("cat list");

  const {
    data: categories,
    isLoading,
    error,
  } = useSWR("http://localhost:8000/categories", fetcher);

  useEffect(() => {
    // data fetch
    // fetch("http://localhost:8000/categories")
    //   .then((res) => res.json())
    //   .then((json) => {
    //     setCategories(json);
    //     setIsLoading(false);
    //   });
    // console.log("cat in useeffect");
  }, []);

  return (
    <>
      <div className="  flex flex-col gap-3 mb-6">
        {isLoading && <CategorySkeletonLoader />}
        {categories?.map((el) => (
          <CategoryBtn category={el} key={el.id} />
        ))}
      </div>
      <CategoryAddBtn />
    </>
  );
};

export default CategoryList;
