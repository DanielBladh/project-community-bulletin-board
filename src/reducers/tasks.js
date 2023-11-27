import { createSlice } from "@reduxjs/toolkit";

const generateUUID = () => {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
};

export const tasks = createSlice({
  name: "tasks",
  initialState: [
    {
      id: generateUUID(),
      text: "Watch video on actions & reducers",
      complete: true,
    },
    { id: generateUUID(), text: "Follow redux codealong", complete: true },
    { id: generateUUID(), text: "Fork weekly assignment", complete: true },
    { id: generateUUID(), text: "Create a todo app", complete: false },
  ],
  reducers: {
    addTask: (state, action) => {
      const { text, dueDate, categories } = action.payload;
      state.push({
        id: generateUUID(),
        text,
        complete: false,
        timestamp: new Date().toISOString(),
        dueDate: dueDate || null,
        categories: categories || [
          "Assembly",
          "Mounting",
          "Moving",
          "Cleaning",
          "Outdoor Help",
          "Homee Repairs",
          "Painting",
          "Trending",
        ],
      });
    },
    removeTask: (state, action) => {
      const taskId = action.payload;
      return state.filter((task) => task.id !== taskId);
    },
    toggleTask: (state, action) => {
      const taskId = action.payload;
      const task = state.find((task) => task.id === taskId);
      if (task) {
        task.complete = !task.complete;
      }
    },
  },
});

export const { addTask, removeTask, toggleTask } = tasks.actions;
