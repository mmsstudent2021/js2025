import React from "react";

const Task = ({ task: { id, title }, index, removeJob }) => {
  const handleDelBtn = () => {
    console.log("u click");
    if (!confirm("Are you sure to delete?")) return;
    removeJob(id);
  };
  return (
    <div key={id} className=" flex gap-2 mb-2">
      <span className=" font-mono">{index + 1}</span>
      <button
        // onClick={handleDelete}
        onClick={handleDelBtn}
        className=" text-xs p-1 bg-red-500 text-white"
      >
        Del
      </button>
      <span>{title}</span>
    </div>
  );
};

export default Task;
