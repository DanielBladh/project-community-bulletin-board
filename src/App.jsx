import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { tasks } from "./reducers/tasks";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskDetails from "./components/TaskDetails";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./styles/styles.css"
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

// Add Font Awesome icons to the library
library.add(fas);

const reducer = combineReducers({
  tasks: tasks.reducer,
});

const store = configureStore({ reducer });

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        {/* <Sidebar /> */}
        <div className="AppContainer">
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/tasks/:taskId" element={<TaskDetails />} />
            <Route path="/add" element={<TaskForm />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
