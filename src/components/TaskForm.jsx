import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../reducers/tasks";

const TaskForm = () => {
  const [taskText, setTaskText] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [categories, setCategories] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() !== "") {
      dispatch(
        addTask({
          text: taskText,
          dueDate: dueDate || null,
          categories: categories.split(","),
        })
      );
      setTaskText("");
      setDueDate("");
      setCategories("");
    }
  };

  const options = [
    "Assembly",
    "Mounting",
    "Moving",
    "Cleaning",
    "Outdoor Help",
    "Homee Repairs",
    "Painting",
    "Trending",
  ];

  return (
    <div>
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Task:
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
        </label>
        <label>
          Due Date:
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </label>
        <label>
          Categories:
          <select type="text" onChange={(e) => setCategories(e.target.value)}>
            {options.map((x, index) => {
              return (
                <option key={index} value={x}>
                  {x}
                </option>
              );
            })}
          </select>
        </label>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
