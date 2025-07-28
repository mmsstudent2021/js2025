import {
  handleCreateCategoryForm,
  handleCreateProductForm,
  handleTheme,
} from "./handler";
import {
  createCategoryForm,
  createProductForm,
  themeToggleBtn,
} from "./selectors";

const listener = () => {
  themeToggleBtn.addEventListener("click", handleTheme);
  createCategoryForm.addEventListener("submit", handleCreateCategoryForm);
  createProductForm.addEventListener("submit", handleCreateProductForm);
};

export default listener;
