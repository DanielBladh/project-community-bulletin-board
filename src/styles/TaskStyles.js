import styled from "styled-components";

export const TaskListItem = styled.li`
  // background-color: #e9edc9;
  width: 800px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    margin-right: 10px;
  }

  span {
    flex: 1;
    margin-right: 10px;
  }

  button {
    cursor: pointer;
  }
`;

export const ViewDetailsLink = styled.span`
  color: white;
  cursor: pointer;
  padding: 2px 5px;
  border: 1px solid #007bff;
  border-radius: 5px;
  background-color: #007bff;
  &:hover {
    background-color: #005bff;
    color: white;
  }
`;
export const FormWrapper = styled.div`
  max-width: 600px;
  margin: 0px auto;
  margin-bottom: 2rem;
`;

export const FormTitle = styled.h2`
  text-align: center;
  color: #333;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  /* Additional styling for checkboxes */
  input[type="checkbox"] {
    margin-right: 5px;
    margin-top: 1px;
  }
`;

export const StyledInput = styled.input`
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 3px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const StyledSelect = styled.select`
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 3px;
`;

export const StyledButton = styled.button`
  cursor: pointer;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 3px;
`;
export const DeleteButton = styled.button`
  cursor: pointer;
  padding: 2px 5px;
  background-color: lightcoral;
  color: white;
  border: none;
  border-radius: 3px;
  margin-left: 1.5rem;
`;

export const TasklistContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px; 
`;

export const TaskDetailsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 20px;
`;
