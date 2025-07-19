import { inputHeight, inputWidth, lists, result } from "./selectors";

export const handleCalcBtn = () => {
  // console.log("hello you click");
  // get value
  const width = inputWidth.valueAsNumber;
  const height = inputHeight.valueAsNumber;

  const area = width * height;

  // set value
  result.innerHTML = `${width}ft * ${height}ft = ${area} ft<sup>2</sup>`;

  // reset input
  inputWidth.value = "";
  inputHeight.value = "";
};

export const handleStoreBtn = () => {
  const delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.className = "del-btn bg-red-500 text-sm text-white px-2 py-1";

  const resultDiv = document.createElement("div");
  resultDiv.innerHTML = result.innerHTML;

  const list = document.createElement("li");
  list.className =
    "border-l-4 pl-2 py-2 flex justify-between hover:bg-stone-100 text-black";
  list.append(resultDiv);
  list.append(delBtn);
  lists.append(list);

  //   lists.innerHTML += `<li class=" " >${result.innerText}</li>`;
  result.innerText = "";
};

export const handleClearBtn = () => {
  result.innerText = "";
};

export const handleLists = (e) => {
  if (e.target.classList.contains("del-btn")) {
    if (window.confirm("Are you sure to delete ?")) {
      e.target.closest("li").remove();
    }
  }
};
