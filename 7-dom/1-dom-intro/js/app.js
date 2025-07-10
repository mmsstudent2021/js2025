// 1. select input,button,heading
const heading = document.getElementById("heading");
// const heading = document.getElementsByTagName("h1");
const textInput = document.getElementById("textInput");
const setBtn = document.getElementById("setBtn");
const ageInput = document.querySelector("#ageInput");
const dateInput = document.querySelector("#dateInput");

// const lists = document.querySelector(".list");
const lists = document.querySelectorAll(".list");

console.log(lists);
// console.log(lists[0].innerText);
// console.log(lists[1].innerText);
// console.log(lists[2].innerText);

lists.forEach((el) => {
  console.log(el.innerText);
});

// console.log(heading);
// console.log(heading[0]);

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

  console.log(ageInput);
  console.log(ageInput.value);
  console.log(ageInput.valueAsNumber);

  console.log(dateInput);
  console.dir(dateInput.value);
  console.dir(dateInput.valueAsDate);

  // 4. get text from input

  //   console.dir(textInput);
  //   console.dir(textInput.value);

  // 5. set text to heading

  heading.innerText = textInput.value;
};

// 2. click btn (event listen)
//setBtn.onclick = handleClick; // no invoke | assign
// setBtn.addEventListener("click", handleClick);
setBtn.addEventListener("dblclick", handleClick);

// const obj = { x: "aaa" };
// console.log(obj);
// obj.x = "xxx"
// console.log(obj);
// console.dir(setBtn)

// console.log(document.querySelectorAll("input[type=checkbox]:checked"));

const ulList = document.querySelector("#ulList");

console.log(ulList);
console.log(ulList.innerHTML);
console.log(ulList.innerText);

// ulList.innerHTML = `<li>it is new</li>`
ulList.innerHTML += `<li class='list'>it is new</li>`;
ulList.innerHTML += `<li class='list'>it is 2</li>`;
ulList.innerHTML += `<li class='list'>it is 3</li>`;
