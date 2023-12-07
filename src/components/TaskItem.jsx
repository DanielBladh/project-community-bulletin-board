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
      <span>
        <strong>Task</strong>
        <br />
        {task.text}
      </span>
      <span>
        <strong>Category</strong>
        <br />
        {task.categories}
      </span>
      <span>
        <strong>Created at</strong>
        <br /> {formatDate(task.timestamp)}
      </span>
      {task.dueDate && (
        <span style={{ color: isTaskOverdue(task.dueDate) ? "red" : "black" }}>
          <strong>Due Date:</strong>
          <br /> {formatDate(task.dueDate)}
        </span>
      )}
      <span>
        <strong>Price</strong>
        <br /> ${task.price}
      </span>
      <div>
      <Link to={`/tasks/${task.id}`}>
        <span className="ViewDetailsLink">Details</span>
      </Link>
      <button className="DeleteButton" onClick={() => handleRemove(task.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
      </div>
    </div>
  );
};

export default TaskItem;
