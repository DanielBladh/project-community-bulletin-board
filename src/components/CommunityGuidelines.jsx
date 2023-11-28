// CommunityGuidelines.jsx
import React from "react";
import styled from "styled-components";

const GuidelinesContainer = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
`;

const RuleList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const RuleItem = styled.li`
  margin-bottom: 10px;
`;

const CommunityGuidelines = ({ onAccept }) => {
  return (
    <GuidelinesContainer>
      <h2>Community Guidelines for Posting Tasks</h2>
      <RuleList>
        <RuleItem>
          <strong>1. Clear and Descriptive Title:</strong> Ensure that the task
          title is clear and accurately represents the nature of the task.
        </RuleItem>
        <RuleItem>
          <strong>2. Informative Description:</strong> Provide a detailed and
          informative description of the task, including any specific
          requirements or expectations.
        </RuleItem>
        <RuleItem>
          <strong>3. Fair and Realistic Pricing:</strong> Set a fair and
          realistic price for the task based on its complexity, time commitment,
          and market standards.
        </RuleItem>
        {/* Add more rules as needed */}
      </RuleList>
      <button onClick={onAccept}>I Accept</button>
    </GuidelinesContainer>
  );
};

export default CommunityGuidelines;
