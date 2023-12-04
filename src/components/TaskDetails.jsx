// TaskDetails.jsx
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { formatDate, isTaskOverdue } from "../components/TaskItem";
import { TaskDetailsContainer } from "../styles/TaskStyles";

const TaskDetails = () => {
  const { taskId } = useParams();
  const task = useSelector((state) =>
    state.tasks.find((task) => task.id === taskId)
  );

  if (!task) {
    return <div>Task not found</div>;
  }

  const renderCommunicationPreferences = () => {
    if (task.communication) {
      const emailText = task.communication.email
        ? `Email: ${task.communication.email}`
        : "Email: Not specified";
      const phoneText = task.communication.phone
        ? `Phone: ${task.communication.phone}`
        : "Phone: Not specified";

      return (
        <>
          <p>
            <strong>Communication Preferences:</strong>
          </p>
          <p>{emailText}</p>
          <p>{phoneText}</p>
        </>
      );
    }
    return null;
  };

  return (
    <>
      <TaskDetailsContainer>
        <h2>Task Details</h2>
        <p>
          <strong>Task:</strong> {task.text}
        </p>
        <p>
          <strong>Description:</strong> {task.description}
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
        {renderCommunicationPreferences()}
        <p>
          <strong>Security Info:</strong>{" "}
          {task.securityInfo || "No security information provided"}
        </p>
      </TaskDetailsContainer>
    </>
  );
};

export default TaskDetails;
