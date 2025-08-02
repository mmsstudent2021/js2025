import { productList, productTemplate } from "./selectors";

export const createProductCard = ({ title, category, price, image }) => {
  const productCard = productTemplate.content.cloneNode(true);
  productCard.querySelector(".product-category-name").innerText = category;
  productCard.querySelector(".product-name").innerText = title;
  productCard.querySelector(".product-img").src = image;
  productCard.querySelector(".product-price").innerText = price;
  return productCard;
};

export const renderProducts = (inputProducts) => {
  productList.innerHTML = "";
  inputProducts.forEach((el) => productList.append(createProductCard(el)));
};
