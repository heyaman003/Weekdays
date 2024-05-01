import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
};

const jobsDataSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    getAllJobs: (state, action) => {
      state.jobs = action.payload;
    },
  },
});

export const { getAllJobs } = jobsDataSlice.actions;
export default jobsDataSlice.reducer;
