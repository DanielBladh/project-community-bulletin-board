// TaskDetails.jsx
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { formatDate, isTaskOverdue } from "../components/TaskItem";

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
      <div>
        <h2>Task Details</h2>
        <p>
          <strong>Task:</strong> {task.text}
        </p>
        <p>
          <strong>Description:</strong>
           {task.description}
        </p>
        <p>
          <strong>Due Date:</strong>{" "}
          {task.dueDate ? formatDate(task.dueDate) : "Not specified"}
        </p>
        <p>
          <strong>Categories:</strong>{" "}
          {task.categories && task.categories.join(", ")}
        </p>
        <p>
          <strong>Attachments:</strong>{" "}
          {task.attachments ? "Yes" : "No attachments"}
        </p>
        <p>
          <strong>Price:</strong>{" "}
          {task.price ? `$${task.price}` : "Not specified"}
        </p>
        <p>
          <strong>Requirements:</strong>{" "}
          {task.requirements || "No specific requirements"}
        </p>
        <p>
          <strong>Communication Preferences:</strong>{" "}
          {task.communication &&
            `Email: ${task.communication.email ? "Yes" : "No"}, Phone: ${
              task.communication.phone ? "Yes" : "No"
            }`}
        </p>
        <p>
          <strong>Security Info:</strong>{" "}
          {task.securityInfo || "No security information provided"}
        </p>
        <p style={{ color: isTaskOverdue(task.dueDate) ? "red" : "black" }}>
          <strong>Timestamp:</strong> {formatDate(task.timestamp)}
        </p>
        <p>
          <button>Edit</button>
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
