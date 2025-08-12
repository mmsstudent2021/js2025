import React from "react";

const TaskCreateForm = ({ storeJob }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log("u submit");
    storeJob(formData.get("title"));
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className=" mb-4" action="">
      <input type="text" name="title" className=" border" />
      <button className=" bg-black text-white border px-2">Add</button>
    </form>
  );
};

export default TaskCreateForm;
