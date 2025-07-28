import { createNewCategoryBtn } from "./category";
import { categories, products } from "./constants";
import { createProductCard } from "./product";
import { categoryList, productList } from "./selectors";

const initialRender = () => {
  categories.forEach((el) =>
    categoryList.append(createNewCategoryBtn(el.title))
  );

  products.forEach((el) => productList.append(createProductCard(el)));
};
export default initialRender;
