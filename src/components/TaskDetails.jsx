import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { formatDate, isTaskOverdue } from "../components/TaskItem";
import "../styles/styles.css";

const TaskDetails = () => {
  const { taskId } = useParams();
  const task = useSelector((state) =>
    state.tasks.find((task) => task.id === taskId)
  );

  if (!task) {
    return <div>Task not found</div>;
  }

  return (
    <>
      <div className="TaskDetailsContainer">
        <h2>Task Details</h2>
        <p>
          <strong>Task:</strong> {task.text}
        </p>
        <p>
          <strong>Description:</strong> {task.description}
        </p>
        <p>
          <strong>Price:</strong>{" "}
          {task.price ? `$${task.price}` : "Not specified"}
        </p>
        <p>
          <strong>Created at:</strong> {formatDate(task.timestamp)}
        </p>
        <p style={{ color: isTaskOverdue(task.dueDate) ? "red" : "black" }}>
          <strong>Due Date:</strong>{" "}
          {task.dueDate ? formatDate(task.dueDate) : "Not specified"}
        </p>
        <p>
          <strong>Categories:</strong>{" "}
          {task.categories && task.categories.join(", ")}
        </p>
        {/* <p>
          <strong>Attachments:</strong>{" "}
          {task.attachments ? "Yes" : "No attachments"}
        </p> */}
        <p>
          <strong>Email:</strong> {task.communication?.email || "Not specified"}
        </p>
        <p>
          <strong>Phone:</strong> {task.communication?.phone || "Not specified"}
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
