import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTask, toggleTask } from "../reducers/tasks";
import { TaskListItem } from "../styles/TaskStyles";

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleRemove = (taskId) => {
    dispatch(removeTask(taskId));
  };

  const handleToggle = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  const isTaskOverdue = (dueDate) => {
    if (!dueDate) return false;
    return new Date(dueDate) < new Date();
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <TaskListItem key={task.id}>
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
              <strong>Timestamp:</strong> {formatDate(task.timestamp)}
            </span>
            {task.dueDate && (
              <span
                style={{ color: isTaskOverdue(task.dueDate) ? "red" : "black" }}
              >
                <strong>Due Date:</strong> {formatDate(task.dueDate)}
              </span>
            )}
            <button onClick={() => handleRemove(task.id)}>Remove</button>
          </TaskListItem>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
