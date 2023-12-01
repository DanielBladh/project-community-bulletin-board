// TaskList.jsx
import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import WelcomeMessage from "./WelcomeMessage";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <>
    <WelcomeMessage />
    <div>
      <h2>Task List</h2>
      <ul style={{ margin: 0, padding: 0 }}>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
    </>
  );
};

export default TaskList;
