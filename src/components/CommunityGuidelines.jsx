import React from "react";
import styled from "styled-components";

const GuidelinesContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const RuleList = styled.ul`
  margin-top: 0.5rem;
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RuleItem = styled.li`
  margin-bottom: 10px;
  text-align: left;
  max-width: 600px;
  
  @media (max-width: 600px) {
    /* Adjust styles for mobile */
    max-width: 100%; /* Set max-width to 100% for smaller screens */
  }
`;

const CommunityGuidelines = () => {
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
      </RuleList>
    </GuidelinesContainer>
  );
};

export default CommunityGuidelines;
