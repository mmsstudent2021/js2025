import React, { useState } from "react";
import FaqItem from "./FaqItem";

const Faq = () => {
  const [lists, setList] = useState([
    {
      id: 1,
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      id: 2,
      question: "What are components in React?",
      answer:
        "Components are reusable pieces of UI that can have their own state and props.",
    },
    {
      id: 3,
      question: "What is JSX?",
      answer:
        "JSX is a syntax extension for JavaScript that looks similar to HTML and is used with React to describe UI.",
    },
    {
      id: 4,
      question: "What is state in React?",
      answer:
        "State is an object that determines how a component renders and behaves.",
    },
    {
      id: 5,
      question: "What are props in React?",
      answer:
        "Props are inputs to components that allow data to be passed from parent to child.",
    },
    {
      id: 6,
      question: "How do you create a React app?",
      answer: "You can create a React app using the Create React App CLI tool.",
    },
  ]);

  const [openId, setOpenId] = useState(5);



  return (
    <div className="p-10 text-base">
      <h1 className=" text-2xl font-bold font-serif mb-3">React Faq</h1>
      <div>
        {lists.map((el) => (
          <FaqItem key={el.id} list={el} openId={openId} setOpenId={setOpenId} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
