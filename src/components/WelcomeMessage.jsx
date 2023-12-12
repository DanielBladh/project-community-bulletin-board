import React, { useRef } from "react";
import { Link } from "react-router-dom";
import cleaningImage from "../assets/cleaning.jpg";
import electricalImage from "../assets/electrical.jpg";
import furnitureImage from "../assets/furniture.jpeg";
import mountTVImage from "../assets/mount-tv.jpg";
import movingImage from "../assets/moving.jpg";
import plumbingImage from "../assets/plumbing.jpg";
import "../styles/WelcomeMessage.css"

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
    { name: "Home Cleaning", price: "$49", image: cleaningImage },
    { name: "Minor Plumbing Repairs", price: "$74", image: plumbingImage },
    { name: "Electrical Help", price: "$69", image: electricalImage },
  ];

  return (
    <div className="WelcomeContainer">
      <div>
        <h1>Welcome to our Community Bulletin Board!</h1>
        <h2>Creates more time for life!</h2>
        <p>
          Connect with neighbors, collaborate on tasks, and stay informed about
          community events.
        </p>
        <div className="PopularTasksContainer">
          <h2>Popular Tasks:</h2>
          <div className="PopularTasksGrid">
            {popularTasks.map((task, index) => (
              <Link className="TaskFormLink" key={index} to="/add">
                <div className="PopularTaskItem" onClick={scrollToTaskForm}>
                  <img src={task.image} alt={task.name} />
                  <div>
                    <strong>{task.name}</strong>
                    <p>Projects starting at {task.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* <div ref={taskFormRef}>
        <TaskForm></TaskForm>
      </div> */}
    </div>
  );
};

export default WelcomeMessage;
