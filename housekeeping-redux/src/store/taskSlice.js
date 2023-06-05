import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    editTask: (state, action) => {
        const { taskId, task } = action.payload;
        state.splice(Number(taskId), 1, task);
    //   state[taskId] = task;
       
    },
    deleteTask: (state, action) => {
      const taskId = action.payload;
      state.splice(taskId, 1);
    },
  },
});

export const { addTask, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
