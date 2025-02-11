import React, { useState } from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import WelcomeMessage from "./WelcomeMessage";
import "../styles/styles.css";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const categories = [
    "All",
    "Assembly",
    "Mounting",
    "Moving",
    "Cleaning",
    "Outdoor Help",
    "Home Repairs",
    "Painting",
    "Other",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.categories.includes(selectedCategory));

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <WelcomeMessage />
      <div className="TasklistContainer">
        <div className="tasklist-info">
          <h2>Task List</h2>
          <div>
            <label htmlFor="filterCategory">Filter by Category: </label>
            <select
              id="filterCategory"
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              style={{ marginBottom: "1.5rem" }}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <p className="task-length">{`Number of tasks: ${filteredTasks.length}`}</p>
        </div>
        {filteredTasks.length === 0 ? (
          <p style={{ marginTop: "2rem", fontWeight: "bold" }}>
            No tasks found for the selected category.
          </p>
        ) : (
          <div className="TaskListGrid">
            {filteredTasks.map((task) => (
              <div key={task.id} className="TaskListCard">
                <TaskItem task={task} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default TaskList;
