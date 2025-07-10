// 1. select input,button,heading
const heading = document.getElementById("heading");
const textInput = document.getElementById("textInput");
const setBtn = document.getElementById("setBtn");

// console.dir(textInput)
// console.dir(heading);
// // access
// console.dir(heading.innerHTML);
// console.dir(heading.innerText);
// // overwrite
// heading.innerText = "hello Khun Htet"

// 3. handler
const handleClick = () => {
  console.log("you click");

  // 4. get text from input

  //   console.dir(textInput);
  //   console.dir(textInput.value);

  // 5. set text to heading

  heading.innerText = textInput.value;
};

// 2. click btn (event listen)
//setBtn.onclick = handleClick; // no invoke | assign
setBtn.addEventListener("click", handleClick);

// const obj = { x: "aaa" };
// console.log(obj);
// obj.x = "xxx"
// console.log(obj);
// console.dir(setBtn)
