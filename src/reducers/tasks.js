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
      text: "Paint Living Room",
      description: "Paint the living room walls in a soothing blue color.",
      categories: ["Painting"],
      timestamp: "2023-12-02T12:00:00.000Z",
      complete: false,
      price: 50,
      dueDate: new Date().toISOString(),
      communication: {
        email: "example@example.com",
        phone: "123-456-7890",
      },
    },
    {
      id: generateUUID(),
      text: "Mount TV in Bedroom",
      description:
        "Mount a new TV on the bedroom wall for a better viewing experience.",
      categories: ["Mounting"],
      timestamp: "2023-12-03T10:30:00.000Z",
      complete: false,
      price: 75,
      dueDate: new Date("2023-12-10T18:00:00.000Z").toISOString(),
      communication: {
        email: "example@example.com",
        phone: "123-456-7890",
      },
    },
    {
      id: generateUUID(),
      text: "Assemble Furniture",
      description: "Assemble a new set of furniture for the study room.",
      categories: ["Assembly"],
      timestamp: "2023-12-04T15:45:00.000Z",
      complete: false,
      price: 60,
      dueDate: new Date("2023-12-15T14:00:00.000Z").toISOString(),
      communication: {
        email: "example@example.com",
        phone: "123-456-7890",
      },
    },
    {
      id: generateUUID(),
      text: "Clean Garage",
      description:
        "Organize and clean the garage space, including sweeping and decluttering.",
      categories: ["Cleaning"],
      timestamp: "2023-12-05T09:00:00.000Z",
      complete: false,
      price: 40,
      dueDate: new Date("2023-12-08T16:30:00.000Z").toISOString(),
      communication: {
        email: "example@example.com",
        phone: "123-456-7890",
      },
    },
    {
      id: generateUUID(),
      text: "Garden Cleanup",
      description:
        "Assist with cleaning up the garden, trimming plants, and removing debris.",
      categories: ["Outdoor Help"],
      timestamp: "2023-12-06T11:15:00.000Z",
      complete: false,
      price: 55,
      dueDate: new Date("2023-12-12T11:00:00.000Z").toISOString(),
      communication: {
        email: "example@example.com",
        phone: "123-456-7890",
      },
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
        price,
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
