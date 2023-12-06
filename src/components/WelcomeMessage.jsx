import React, { useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import cleaningImage from "../assets/cleaning.jpg";
import electricalImage from "../assets/electrical.jpg";
import furnitureImage from "../assets/furniture.jpeg";
import mountTVImage from "../assets/mount-tv.jpg";
import movingImage from "../assets/moving.jpg";
import plumbingImage from "../assets/plumbing.jpg";

const WelcomeContainer = styled.div`
  padding: 20px;
  text-align: center;
  margin-bottom: 3rem;
`;

const PopularTasksContainer = styled.div`
  margin-top: 2rem;
`;

const PopularTasksHeading = styled.h2`
  margin-bottom: 1rem;
`;

const PopularTasksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

const PopularTaskItem = styled.div`
  cursor: pointer;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: background-color 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    background-color: #f0f0f0;
  }

  img {
    max-width: 100%;
    height: auto;
    margin-bottom: 8px;
  }
`;

const TaskFormLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const TaskForm = styled.div`
  /* Your TaskForm styles go here */
  margin-top: 2rem;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const WelcomeMessage = () => {
  const taskFormRef = useRef(null);

  const scrollToTaskForm = () => {
    if (taskFormRef.current) {
      taskFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const popularTasks = [
    { name: "Furniture Assembly", price: "$49", image: furnitureImage },
    { name: "Mount a TV", price: "$69", image: mountTVImage },
    { name: "Help Moving", price: "$67", image: movingImage },
    { name: "Home & Apartment Cleaning", price: "$49", image: cleaningImage },
    { name: "Minor Plumbing Repairs", price: "$74", image: plumbingImage },
    { name: "Electrical Help", price: "$69", image: electricalImage },
  ];

  return (
    <WelcomeContainer>
      <div>
        <h1>Welcome to our Community Bulletin Board!</h1>
        <h3>Creates more time for life!</h3>
        <p>
          Connect with neighbors, collaborate on tasks, and stay informed about
          community events.
        </p>
        <PopularTasksContainer>
          <PopularTasksHeading>Popular Tasks:</PopularTasksHeading>
          <PopularTasksGrid>
            {popularTasks.map((task, index) => (
              <TaskFormLink key={index} to="/add">
                <PopularTaskItem onClick={scrollToTaskForm}>
                  <img src={task.image} alt={task.name} />
                  <div>
                    <strong>{task.name}</strong>
                    <p>Projects starting at {task.price}</p>
                  </div>
                </PopularTaskItem>
              </TaskFormLink>
            ))}
          </PopularTasksGrid>
        </PopularTasksContainer>
      </div>
      {/* <div ref={taskFormRef}>
        <TaskForm></TaskForm>
      </div> */}
    </WelcomeContainer>
  );
};

export default WelcomeMessage;
