import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
  const [requirements, setRequirements] = useState("");
  const [preferEmail, setPreferEmail] = useState(false);
  const [preferPhone, setPreferPhone] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [securityInfo, setSecurityInfo] = useState("");
  const [showGuidelines, setShowGuidelines] = useState(true);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if either email or phone is filled
    if (
      (preferEmail && email.trim() !== "") ||
      (preferPhone && phone.trim() !== "")
    ) {
      dispatch(
        addTask({
          text: taskText,
          description: descriptionText,
          dueDate: dueDate || null,
          categories: categories.split(","),
          attachments,
          price,
          requirements,
          communication: {
            email: preferEmail ? email : null,
            phone: preferPhone ? phone : null,
          },
          securityInfo,
        })
      );
      // Reset form fields after submission
      setTaskText("");
      setDescriptionText("");
      setDueDate("");
      setCategories("");
      setAttachments(null);
      setPrice("");
      setRequirements("");
      setEmail("");
      setPhone("");
      setPreferEmail(false);
      setPreferPhone(false);
      setSecurityInfo("");
    } else {
      // Display an error message or handle it as appropriate
      alert("Please fill either email or phone.");
    }
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

          {/* Attachments */}
          <label className="FormLabel">
            Attachments:
            <input
              className="StyledInput"
              type="file"
              onChange={(e) => setAttachments(e.target.files[0])}
            />
          </label>

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

          {/* Requirements */}
          <label className="FormLabel">
            Requirements:
            <input
              className="StyledInput"
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              placeholder="Enter additional requirements"
            />
          </label>
          <label className="FormLabel">
            {/* Communication Preferences */}
            Communication Preferences:
            <div className="CheckboxContainer">
              <input
                className="StyledInput"
                type="checkbox"
                checked={preferEmail}
                onChange={() => setPreferEmail(!preferEmail)}
              />
              <span>Email</span>
              {preferEmail && (
                <input
                  className="StyledInput"
                  type="text"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              )}
            </div>
          </label>
          <label className="FormLabel">
            <div className="CheckboxContainer">
              <input
                className="StyledInput"
                type="checkbox"
                checked={preferPhone}
                onChange={() => setPreferPhone(!preferPhone)}
              />
              <span>Phone</span>
              {preferPhone && (
                <input
                  className="StyledInput"
                  type="text"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              )}
            </div>
          </label>
          {/* Submit Button */}
          <button className="StyledButton" type="submit">
            Add Task
          </button>
        </form>
      </div>
    </>
  );
};

export default TaskForm;
