import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  techStackData: [
    "Python",
    "Java",
    "GoLang",
    "Ruby/Rails",
    "C++",
    "Kotlin",
    "Django",
    "C#",
    "GraphQL",
    "Flask",
    "TypeScript",
    "AWS",
    "JavaScript",
    "RUST",
    "Node JS",
    "React",
  ],
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
