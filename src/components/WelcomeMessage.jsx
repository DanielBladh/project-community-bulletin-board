// WelcomeMessage.jsx
import React from "react";
import styled from "styled-components";

const WelcomeContainer = styled.div`
  padding: 20px;
  text-align: center;
  margin-bottom: 3rem;
`;

const WelcomeMessage = () => {
  return (
    <WelcomeContainer>
      <div>
        <h1>Welcome to our Community Bulletin Board!</h1>
        <h3>Creates more time for life!</h3>
        <p>
          Connect with neighbors, collaborate on tasks, and stay informed about
          community events.
        </p>
      </div>
    </WelcomeContainer>
  );
};

export default WelcomeMessage;
