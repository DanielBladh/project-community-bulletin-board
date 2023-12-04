import React from "react";
import { useDispatch } from "react-redux";
import {
  TaskListItem,
  DeleteButton,
  ViewDetailsLink,
} from "../styles/TaskStyles";
import { toggleTask, removeTask } from "../reducers/tasks";
import styled from "styled-components";
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

const StyledLink = styled(Link)`
  text-decoration: none;
`;

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
    <TaskListItem>
      {/* <input
        type="checkbox"
        checked={task.complete}
        onChange={() => handleToggle(task.id)}
      /> */}
      <span>
        {task.text}
      </span>
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
      <StyledLink to={`/tasks/${task.id}`}>
        <ViewDetailsLink>View Details</ViewDetailsLink>
      </StyledLink>
      <DeleteButton onClick={() => handleRemove(task.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </DeleteButton>
    </TaskListItem>
  );
};

export default TaskItem;
