// TaskItem.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { TaskListItem } from "../styles/TaskStyles";
import { toggleTask, removeTask } from "../reducers/tasks";
import { Link } from "react-router-dom";

export const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const isTaskOverdue = (dueDate) => {
  if (!dueDate) return false;
  return new Date(dueDate) < new Date();
};

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  const handleRemove = (taskId) => {
    dispatch(removeTask(taskId));
  };

  return (
    <TaskListItem>
      <input
        type="checkbox"
        checked={task.complete}
        onChange={() => handleToggle(task.id)}
      />
      <span
        style={{
          textDecoration: task.complete ? "line-through" : "none",
        }}
      >
        {task.text}
      </span>
      <span>
        <strong>Created at:</strong> {formatDate(task.timestamp)}
      </span>
      {task.dueDate && (
        <span style={{ color: isTaskOverdue(task.dueDate) ? "red" : "black" }}>
          <strong>Due Date:</strong> {formatDate(task.dueDate)}
        </span>
      )}
      <Link to={`/tasks/${task.id}`}>View Details</Link>
      <button onClick={() => handleRemove(task.id)}>Remove</button>
    </TaskListItem>
  );
};

export default TaskItem;
