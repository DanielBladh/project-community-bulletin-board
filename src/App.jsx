import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { tasks } from "./reducers/tasks";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Navbar from "./components/Navbar";
import { AppContainer } from "./styles/AppStyles"; // Importing the AppContainer style

const reducer = combineReducers({
  tasks: tasks.reducer,
});

const store = configureStore({ reducer });

const App = () => {
  return (
    <Provider store={store}>
      <Router>
          <Navbar />
        <AppContainer>
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/add" element={<TaskForm />} />
          </Routes>
        </AppContainer>
      </Router>
    </Provider>
  );
};

export default App;
