import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTask } from "../reducers/tasks";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import SocialMediaShareButton from "./SocialMediaShareButton";
import "../styles/styles.css";

Modal.setAppElement("#root");

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
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleRemove = (taskId) => {
    dispatch(removeTask(taskId));
    setModalOpen(false);
  };

  const taskUrl = window.location.href;

  return (
    <div className="TaskListItem">
      <div className="task-info">
        <div>
          <strong>Task:</strong> {task.text}
        </div>
        <div>
          <strong>Category:</strong> {task.categories}
        </div>
        <div>
          <strong>Created at:</strong> {formatDate(task.timestamp)}
        </div>
        <div>
          <strong>Due Date:</strong> {formatDate(task.dueDate)}
        </div>
        <div>
          <strong>Price:</strong> ${task.price}
        </div>
      </div>
      <div className="task-actions">
        <Link to={`/tasks/${task.id}`} className="ViewDetailsLink">
          Details
        </Link>
        <SocialMediaShareButton
          id="share-button-twitter"
          platform="twitter"
          shareContent={`Check out this task: ${task.text} ${taskUrl}`}
          aria-label="Share this task on Twitter"
          role="button"
        />
        <SocialMediaShareButton
          id="share-button-linkedin"
          platform="linkedin"
          shareContent={{ url: taskUrl }}
          aria-label="Share this task on LinkedIn"
          role="button"
        />
        <button
          className="DeleteButton"
          onClick={handleOpenModal}
          aria-label="Delete Task"
        >
          <FontAwesomeIcon icon={faTrash} alt="Delete Task" />
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Delete Task Modal"
        className="confirmation-modal"
      >
        <p>Are you sure you want to delete this task?</p>
        <button onClick={() => handleRemove(task.id)}>Yes</button>
        <button onClick={handleCloseModal}>Cancel</button>
      </Modal>
    </div>
  );
};

export default TaskItem;
