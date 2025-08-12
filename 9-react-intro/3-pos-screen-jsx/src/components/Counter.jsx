import React, { useState } from "react";

const Counter = () => {
  const [x, setX] = useState(0);

  const handleClickAdd = () => {
    console.log("u click");
    // setX(5);
    // setX(x + 1);
    // setX(x + 1);
    // setX(x + 1);
    setX((oldState) => {
      return oldState + 1;
    });
    setX((oldState) => {
      return oldState + 1;
    });
    setX((oldState) => {
      return oldState + 1;
    });
  };

  const handleClickSub = () => {
    console.log("u click");
    setX(x - 1);
  };

  return (
    <div className=" p-10">
      <div>
        <h1 className=" text-3xl font-bold">Counter : {x}</h1>
        <div className=" flex gap-2">
          <button onClick={handleClickAdd} className=" bg-black text-white p-2">
            {" "}
            + Add{" "}
          </button>

          <button onClick={handleClickSub} className=" bg-black text-white p-2">
            {" "}
            - Sub{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
