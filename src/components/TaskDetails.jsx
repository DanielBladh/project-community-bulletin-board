// TaskDetails.jsx
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { formatDate } from "./TaskItem";

const TaskDetails = () => {
  const { taskId } = useParams();
  const task = useSelector((state) =>
    state.tasks.find((task) => task.id === taskId)
  );

  if (!task) {
    return <div>Task not found</div>;
  }

  return (
    <div>
      <h2>Task Details</h2>
      <p>{task.text}</p>
      <p>
        <strong>Timestamp:</strong> {formatDate(task.timestamp)}
      </p>
      {task.dueDate && (
        <p style={{ color: isTaskOverdue(task.dueDate) ? "red" : "black" }}>
          <strong>Due Date:</strong> {formatDate(task.dueDate)}
        </p>
      )}
      <p>
        <button>Edit</button>
      </p>
    </div>
  );
};

export default TaskDetails;
