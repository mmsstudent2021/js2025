import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const FaqItem = ({ list: { id, question, answer }, openId, setOpenId }) => {
  //   const [show, setShow] = useState(false);
  const handleClickQuestion = () => {
    // setShow(!show);
    // if (id === openId) {
    //   setOpenId(0);
    // } else {
    //   setOpenId(id);
    // }

    setOpenId(id === openId ? 0 : id);
  };
  return (
    <div>
      <div
        onClick={handleClickQuestion}
        className=" flex justify-between items-center border p-2"
        // is-open={show ? "yes" : "no"}
      >
        <h1>{question}</h1>
        {/* {show ? <ChevronDown /> : <ChevronUp />} */}
        <ChevronUp
          className={` duration-300 ${
            id === openId ? "rotate-0" : "-rotate-180"
          }`}
        />
      </div>
      <div
        className={`p-2 border bg-gray-200 ${id === openId ? "" : "hidden"}`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;
