// WelcomeMessage.jsx
import React from "react";
import styled from "styled-components";

const WelcomeContainer = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  text-align: center;
`;

const WelcomeMessage = () => {
  return (
    <WelcomeContainer>
      <h1>Welcome to Our Community Bulletin Board!</h1>
      <p>
        Connect with neighbors, collaborate on tasks, and stay informed about
        community events.
      </p>
    </WelcomeContainer>
  );
};

export default WelcomeMessage;
