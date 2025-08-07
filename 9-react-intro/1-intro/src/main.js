import { createElement, Fragment } from "react";
import "./style.css";
import { createRoot } from "react-dom/client";

// vars
const fruits = ["apple", "banana", "orange", "mango", "grape"];
const status = true;

// handler
const handleBtn = () => {
  console.log("thank you");
};

// selector
const app = document.querySelector("#app");

// react
const view = createElement(
  Fragment,
  null,
  createElement(
    "h1",
    {
      className: "underline text-red-500 text-4xl font-bold font-serif mb-3",
      id: "heading",
      hhz: "sayar",
    },
    "Hello React",
    " ",
    status ? "✅" : "😂"
  ),
  createElement(
    "p",
    { className: "mb-5" },
    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error nobis cumque ullam. Voluptatem placeat, quia quasi earum voluptatibus omnis fugit iure eligendi, qui nobis, iusto ratione atque laboriosam mollitia veniam!"
  ),
  createElement(
    "ul",
    { className: "mb-5" },
    fruits.map((el, index) =>
      createElement("li", { className: " border mb-1 p-1", key: index }, el)
    )
  ),
  createElement(
    "button",
    { className: "bg-black text-white p-3", onClick: handleBtn },
    "learn React"
  )
);
// console.log(view);

// react dom
const root = createRoot(app);
root.render(view);

// // create element
// const h1 = document.createElement("h1");
// const textNode = document.createTextNode("Hello JS DOM");
// h1.append(textNode);

// const para = document.createElement("p");
// const pTextNode =
//   " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error nobis cumque ullam. Voluptatem placeat, quia quasi earum voluptatibus omnis fugit iure eligendi, qui nobis, iusto ratione atque laboriosam mollitia veniam!";
// para.append(pTextNode);

// const btn = document.createElement("button");
// btn.innerText = "Learn More";

// // handler
// const handleBtn = () => {
//   console.log("thank you");
// };

// // listener
// btn.addEventListener("click", handleBtn);

// // append to body
// app.append(h1);
// app.append(para);
// app.append(btn);

// const run = function (...x) {
//   return x;
// };

// run("a","b","c")

// ` ${} hello`
