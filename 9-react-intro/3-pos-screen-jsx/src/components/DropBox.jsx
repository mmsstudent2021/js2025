import React, { useState } from "react";

const DropBox = () => {
  const [show, setShow] = useState(false);

  const handleClickOpen = () => {
    console.log("u click");
    setShow(true);
  };

  const handleClickClose = () => {
    console.log("u click");
    setShow(false);
  };

  return (
    <div className=" p-10">
      <div className=" flex gap-2 mb-3">
        <button onClick={handleClickOpen} className=" bg-black p-2 text-white">
          Open
        </button>
        <button onClick={handleClickClose} className=" bg-black p-2 text-white">
          Close
        </button>
      </div>
      {/* {show ? <div className=" border p-3">Hello I'm box</div> : <></>} */}

      {show && <div className=" border p-3">Hello I'm box</div>}
    </div>
  );
};

export default DropBox;
