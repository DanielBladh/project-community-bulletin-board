import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTask } from "../reducers/tasks";
import CommunityGuidelines from "./CommunityGuidelines";
import "../styles/styles.css";

const TaskForm = () => {
  const [taskText, setTaskText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [categories, setCategories] = useState("");
  const [attachments, setAttachments] = useState(null);
  const [price, setPrice] = useState("");
  const [preferEmail, setPreferEmail] = useState(false);
  const [preferPhone, setPreferPhone] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (showSnackbar) {
      // Automatically hide the snackbar after a few seconds (adjust as needed)
      const timeoutId = setTimeout(() => {
        setShowSnackbar(false);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [showSnackbar]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setEmailError("Invalid email address");
      return;
    }

    // Validate phone number
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone.trim())) {
      setPhoneError("Invalid phone number");
      return;
    }

    // If you reach here, validation passed

    dispatch(
      addTask({
        text: taskText,
        description: descriptionText,
        dueDate: dueDate || null,
        categories: categories.split(","),
        attachments,
        price,
        communication: {
          email,
          phone,
        },
      })
    );

    // Reset form fields after submission
    setTaskText("");
    setDescriptionText("");
    setDueDate("");
    setCategories("");
    setAttachments(null);
    setPrice("");
    setEmail("");
    setPhone("");

    // Show snackbar
    setShowSnackbar(true);

    // Clear validation errors
    setEmailError("");
    setPhoneError("");

    // Redirect to tasks list after a brief delay
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const categoryOptions = [
    "Assembly",
    "Mounting",
    "Moving",
    "Cleaning",
    "Outdoor Help",
    "Home Repairs",
    "Painting",
    "Other",
  ];

  return (
    <>
      <CommunityGuidelines />
      <div className="FormWrapper">
        <div className="FormTitle">Create Task</div>
        <form className="StyledForm" onSubmit={handleSubmit}>
          {/* Task Details */}
          <label className="FormLabel">
            Task:
            <input
              className="StyledInput"
              type="text"
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              placeholder="Enter task title"
              required
            />
          </label>
          <label className="FormLabel">
            Description:
            <input
              className="StyledInput"
              type="text"
              value={descriptionText}
              onChange={(e) => setDescriptionText(e.target.value)}
              placeholder="Describe the task in more details"
              required
            />
          </label>

          {/* Due Date */}
          <label className="FormLabel">
            Due Date:
            <input
              className="StyledInput"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
            />
          </label>

          {/* Task Category */}
          <label className="FormLabel">
            Categories:
            <select
              className="StyledSelect"
              type="text"
              value={categories}
              onChange={(e) => setCategories(e.target.value)}
              required
            >
              <option value="" disabled>
                Select a category
              </option>
              {categoryOptions.map((x, index) => (
                <option key={index} value={x}>
                  {x}
                </option>
              ))}
            </select>
          </label>

          {/* Attachments
          <label className="FormLabel">
            Attachments:
            <input
              className="StyledInput"
              type="file"
              onChange={(e) => setAttachments(e.target.files[0])}
            />
          </label> */}

          {/* Pricing */}
          <label className="FormLabel">
            Price:
            <input
              className="StyledInput"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price"
              required
            />
          </label>

          {/* Email input */}
          <label className="FormLabel">
            Email:
            <input
              className="StyledInput"
              type="text"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(""); // Clear error when typing
              }}
            />
            {emailError && <div className="ValidationError">{emailError}</div>}
          </label>

          {/* Phone input */}
          <label className="FormLabel">
            Phone:
            <input
              className="StyledInput"
              type="text"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                setPhoneError(""); // Clear error when typing
              }}
            />
            {phoneError && <div className="ValidationError">{phoneError}</div>}
          </label>
          {/* Submit Button */}
          <button className="StyledButton" type="submit">
            Add Task
          </button>
        </form>
        {/* Snackbar for success feedback */}
        {showSnackbar && (
          <div className="snackbar">Task created successfully!</div>
        )}
      </div>
    </>
  );
};

export default TaskForm;