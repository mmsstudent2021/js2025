import React, { useState } from "react";

const TaskList = () => {
  const [tasks, setTask] = useState([
    "interview",
    "requirement analysis",
    "wireframe",
  ]);

  const [jobs, setJob] = useState([
    { id: 1, title: "read book", isDone: false },
    { id: 2, title: "interview", isDone: false },
    { id: 3, title: "requirement analysis", isDone: false },
    { id: 4, title: "wireframe", isDone: false },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newJob = {
      id: Date.now(),
      title: formData.get("title"),
      isDone: false,
    };
    // add new data
    setJob([...jobs, newJob]);
    e.target.reset();
  };

  const handleDelete = (id) => {
    console.log("U del", id);

    if (!confirm("Are you sure to delete ?")) return;

    // setTask(tasks.filter((el, i) => i != index));

    setJob(jobs.filter((el) => el.id != id));

    // remove element
  };

  return (
    <div className=" p-10">
      <h1 className=" text-2xl font-bold font-sans mb-4">Tasks to complete</h1>
      <form onSubmit={handleSubmit} className=" mb-4" action="">
        <input type="text" name="title" className=" border" />
        <button className=" bg-black text-white border px-2">Add</button>
      </form>
      <div className="">
        {jobs.map((el, index) => (
          <div key={el.id} className=" flex gap-2 mb-2">
            <span className=" font-mono">{index + 1}</span>
            <button
              //   onClick={handleDelete}
              onClick={() => handleDelete(el.id)}
              className=" text-xs p-1 bg-red-500 text-white"
            >
              Del
            </button>
            <span>{el.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
