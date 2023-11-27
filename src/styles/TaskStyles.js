import styled from "styled-components";

export const TaskListItem = styled.li`
  background-color: #e9edc9;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
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
