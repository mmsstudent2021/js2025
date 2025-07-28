export const createNewCategoryBtn = (categoryName) => {
  const btn = document.createElement("button");
  btn.className =
    "bg-transparent border border-transparent text-sm text-end px-4 py-2 rounded-lg";
  btn.innerText = categoryName;
  return btn;
};
