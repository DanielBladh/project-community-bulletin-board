import React from "react";
import { useDispatch } from "react-redux";
import "../styles/styles.css";
import { toggleTask, removeTask } from "../reducers/tasks";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const isTaskOverdue = (dueDate) => {
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
    <div className="TaskListItem">
      <span>{task.text}</span>
      <span>
        <strong>Category</strong> {task.categories}
      </span>
      <span>
        <strong>Created at</strong> {formatDate(task.timestamp)}
      </span>
      {task.dueDate && (
        <span style={{ color: isTaskOverdue(task.dueDate) ? "red" : "black" }}>
          <strong>Due Date:</strong> {formatDate(task.dueDate)}
        </span>
      )}
      <span>
        <strong>Price</strong>
        <br /> ${task.price}
      </span>
      <Link to={`/tasks/${task.id}`}>
        <span className="ViewDetailsLink">View Details</span>
      </Link>
      <button className="DeleteButton" onClick={() => handleRemove(task.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default TaskItem;
