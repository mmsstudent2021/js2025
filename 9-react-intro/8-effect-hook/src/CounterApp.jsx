import React, { useEffect, useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("hello");

  useEffect(() => {
    console.log("Counter Mounted");
    // document.querySelector("body").classList.add("dark");

    function handleScroll() {
      console.log(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    // cleanup function
    return () => {
      console.log("Counter Unmounted");
      window.removeEventListener("scroll", handleScroll);

      //   document.querySelector("body").classList.remove("dark");
    };
  }, [text]);

  return (
    <div className=" flex flex-col items-center justify-center w-[300px] py-10 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Counter: {count}</h1>
      <div className="flex gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 active:scale-95 transition"
        >
          Increase
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-6 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 active:scale-95 transition"
        >
          Decrease
        </button>
      </div>
      <input
        type="text"
        className="border p-1"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
