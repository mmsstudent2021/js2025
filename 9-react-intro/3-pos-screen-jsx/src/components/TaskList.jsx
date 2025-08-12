import React, { useState } from "react";
import Task from "./Task";
import TaskCreateForm from "./TaskCreateForm";

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

  const storeJob = (newJobTitle) => {
    const newJob = {
      id: Date.now(),
      title: newJobTitle,
      isDone: false,
    };
    setJob([...jobs, newJob]);
  };

  const removeJob = (id) => {
    setJob(jobs.filter((el) => el.id != id));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const newJob = {
  //     id: Date.now(),
  //     title: formData.get("title"),
  //     isDone: false,
  //   };
  //   // add new data
  //   setJob([...jobs, newJob]);
  //   e.target.reset();
  // };

  // const handleDelete = (id) => {
  //   console.log("U del", id);

  //   if (!confirm("Are you sure to delete ?")) return;

  //   // setTask(tasks.filter((el, i) => i != index));

  //   setJob(jobs.filter((el) => el.id != id));

  //   // remove element
  // };

  return (
    <div className=" p-10">
      <h1 className=" text-2xl font-bold font-sans mb-4">Tasks to complete</h1>
      <TaskCreateForm storeJob={storeJob} />
      <div className="">
        {jobs.map((el, index) => (
          <Task
            key={el.id}
            task={el}
            index={index}
            removeJob={removeJob}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
