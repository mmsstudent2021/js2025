import { productTemplate } from "./selectors";

export const createProductCard = ({ title, category, price }) => {
  const productCard = productTemplate.content.cloneNode(true);
  productCard.querySelector(".product-category-name").innerText = category;
  productCard.querySelector(".product-name").innerText = title;
  productCard.querySelector(".product-price").innerText = price;
  return productCard;
};
