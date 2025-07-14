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
  const list = document.createElement("li");
  list.innerHTML = result.innerHTML;
  list.className = "border-l-4 pl-2 text-black";
  lists.append(list);
  //   lists.innerHTML += `<li class=" " >${result.innerText}</li>`;
  result.innerText = "";
};

export const handleClearBtn = () => {
  result.innerText = "";
};
