import { Drawer } from "flowbite";
import { createNewCategoryBtn } from "./category";
import {
  categoryList,
  productList,
  productTemplate,
  themeToggleDarkIcon,
  themeToggleLightIcon,
} from "./selectors";
import { createProductCard, renderProducts } from "./product";
import { categories, products } from "./constants";

export const handleTheme = () => {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");
  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
};

export const handleCreateCategoryForm = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newCategory = {
    id: categories[categories.length - 1].id + 1,
    title: formData.get("new_category_name"),
  };
  categoryList.append(createNewCategoryBtn(newCategory));
  e.target.reset();
  document.querySelector(`[data-drawer-hide="create-category-drawer"]`).click();
  //   const drawer = new Drawer(document.querySelector("#create-category-drawer"));
  //   drawer.hide();
  //   e.target
  //     .closest("#create-category-drawer")
  //     .querySelector(`[data-drawer-hide="create-category-drawer"]`)
  //     .click();
};

export const handleCreateProductForm = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  //   console.log(formData.get("new_product_name"));
  //   console.log(formData.get("new_product_price"));
  //   console.log(formData.get("new_product_category"));

  productList.append(
    createProductCard({
      title: formData.get("new_product_name"),
      price: formData.get("new_product_price"),
      category: formData.get("new_product_category"),
    })
  );

  e.target.reset();

  document.querySelector(`[data-drawer-hide="create-product-drawer"]`).click();
};

export const handleSearchForm = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  console.log(formData.get("search"));

  // e.target.reset();
};

export const handleSearch = (e) => {
  // if (e.key === "Enter") {
  //   console.log(e.target.value);
  // }

  const q = e.target.value;

  console.log(q);

  renderProducts(
    products.filter((el) => el.title.toLowerCase().search(q) != -1)
  );
};

export const handleCategoryList = (e) => {
  const clickedCategory = e.target.innerText;

  // remove all underline from btn
  categoryList.childNodes.forEach((el) => {
    el.classList.replace("bg-blue-100", "bg-transparent");
    el.classList.replace("text-blue-600", "text-black");
    el.classList.replace("border-blue-400", "border-transparent");
  });

  // set to clicked btn

  e.target.classList.replace("bg-transparent", "bg-blue-100");
  e.target.classList.replace("text-black", "text-blue-600");
  e.target.classList.replace("border-transparent", "border-blue-400");

  if (clickedCategory === "All") {
    renderProducts(products);
  } else {
    renderProducts(products.filter((el) => el.category === clickedCategory));
  }
};
