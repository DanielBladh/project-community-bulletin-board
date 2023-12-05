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
        <h2>Task List</h2>
        <div>
          <label>Filter by Category: </label>
          <select
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
        {filteredTasks.length === 0 ? (
          <p style={{ marginTop: "2rem", fontWeight: "bold" }}>
            No tasks found for the selected category.
          </p>
        ) : (
          <ul style={{ margin: 0, padding: 0 }}>
            {filteredTasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default TaskList;
