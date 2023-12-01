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
      complete: false,
      price: 500,
      dueDate: new Date().toISOString()
    },
   
  ],
  reducers: {
    addTask: (state, action) => {
      const {
        text,
        description,
        dueDate,
        categories,
        attachments,
        price, // Include price in the payload
        requirements,
        communication,
        securityInfo,
      } = action.payload;
      state.push({
        id: generateUUID(),
        text,
        description,
        complete: false,
        timestamp: new Date().toISOString(),
        dueDate: dueDate || null,
        categories: categories || [],
        attachments,
        price,
        requirements,
        communication,
        securityInfo,
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

export const { addTask, removeTask, toggleTask, uuidv4 } = tasks.actions;
