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
  remoteOrNot: ["Remote", "Hybrid", "In-Office"],
  minBasePaySalary: ["0L", "10L", "20L", "30L", "40L", "50L", "60L", "70L"],
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
