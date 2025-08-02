import { renderCategory } from "./category";
import { categories, products } from "./constants";
import { renderProducts } from "./product";

const initialRender = () => {
  renderCategory(categories);
  renderProducts(products);
};
export default initialRender;
