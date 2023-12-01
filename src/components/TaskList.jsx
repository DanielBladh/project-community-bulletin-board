// TaskList.jsx
import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import WelcomeMessage from "./WelcomeMessage";
import { TasklistContainer } from "../styles/TaskStyles";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <>
      <WelcomeMessage />
      <TasklistContainer>
        <h2>Task List</h2>
        <ul style={{ margin: 0, padding: 0 }}>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      </TasklistContainer>
    </>
  );
};

export default TaskList;
