import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../reducers/tasks";
import {
  FormWrapper,
  FormTitle,
  StyledForm,
  FormLabel,
  StyledInput,
  StyledSelect,
  StyledButton,
} from "../styles/TaskStyles";

const TaskForm = () => {
  const [taskText, setTaskText] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [categories, setCategories] = useState("");
  const [attachments, setAttachments] = useState(null);
  const [budget, setBudget] = useState("");
  const [requirements, setRequirements] = useState("");
  const [preferEmail, setPreferEmail] = useState(false);
  const [preferPhone, setPreferPhone] = useState(false);
  const [securityInfo, setSecurityInfo] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() !== "") {
      dispatch(
        addTask({
          text: taskText,
          dueDate: dueDate || null,
          categories: categories.split(","),
          attachments,
          budget,
          requirements,
          communication: {
            email: preferEmail,
            phone: preferPhone,
          },
          securityInfo,
        })
      );
      // Reset form fields after submission
      setTaskText("");
      setDueDate("");
      setCategories("");
      setAttachments(null);
      setBudget("");
      setRequirements("");
      setPreferEmail(false);
      setPreferPhone(false);
      setSecurityInfo("");
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
    "Trending",
  ];

  return (
    <FormWrapper>
      <FormTitle>Create Task</FormTitle>
      <StyledForm onSubmit={handleSubmit}>
        {/* Task Details */}
        <FormLabel>
          Task:
          <StyledInput
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Enter task title"
          />
        </FormLabel>

        {/* Due Date */}
        <FormLabel>
          Due Date:
          <StyledInput
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </FormLabel>

        {/* Task Category */}
        <FormLabel>
          Categories:
          <StyledSelect
            type="text"
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
          >
            <option value="" disabled>
              Select a category
            </option>
            {categoryOptions.map((x, index) => (
              <option key={index} value={x}>
                {x}
              </option>
            ))}
          </StyledSelect>
        </FormLabel>

        {/* Attachments */}
        <FormLabel>
          Attachments:
          <StyledInput
            type="file"
            onChange={(e) => setAttachments(e.target.files[0])}
          />
        </FormLabel>

        {/* Budget */}
        <FormLabel>
          Price:
          <StyledInput
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="Enter budget"
          />
        </FormLabel>

        {/* Requirements */}
        <FormLabel>
          Requirements:
          <StyledInput
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            placeholder="Enter additional requirements"
          />
        </FormLabel>

        {/* Communication Preferences */}
        <FormLabel>
          Communication Preferences:
          <StyledInput
            type="checkbox"
            checked={preferEmail}
            onChange={() => setPreferEmail(!preferEmail)}
          />
          Email
          <StyledInput
            type="checkbox"
            checked={preferPhone}
            onChange={() => setPreferPhone(!preferPhone)}
          />
          Phone
        </FormLabel>

        {/* Submit Button */}
        <StyledButton type="submit">Add Task</StyledButton>
      </StyledForm>
    </FormWrapper>
  );
};

export default TaskForm;
