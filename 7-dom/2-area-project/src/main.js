import "./style.css";

// select
const result = document.querySelector("#result");
const storeBtn = document.querySelector("#storeBtn");
const clearBtn = document.querySelector("#clearBtn");
const inputWidth = document.querySelector("#widthInput");
const inputHeight = document.querySelector("#heightInput");
const calcBtn = document.querySelector("#calcBtn");
const lists = document.querySelector("#lists");

// handler
const handleCalcBtn = () => {
  // console.log("hello you click");
  // get value
  const width = inputWidth.valueAsNumber;
  const height = inputHeight.valueAsNumber;

  const area = width * height;

  // set value
  result.innerText = `${width}ft * ${height}ft = ${area} sqft`;

  // reset input
  inputWidth.value = "";
  inputHeight.value = "";
};

const handleStoreBtn = () => {
  lists.innerHTML += `<li>${result.innerText}</li>`;
  result.innerText = "";
};

const handleClearBtn = () => {
  result.innerText = "";
};

// event listener

calcBtn.addEventListener("click", handleCalcBtn);
storeBtn.addEventListener("click", handleStoreBtn);
clearBtn.addEventListener("click", handleClearBtn);
