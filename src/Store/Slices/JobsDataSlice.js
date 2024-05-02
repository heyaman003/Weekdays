import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  limitCount: 20,

  remoteOrNotData: ["Remote", "Hybrid", "In-Office"],

  filterDataOptions: {
    jobRole: "",
    location: "",
    minExp: "",
    remoteOnSite: "",
    techStack: "",
    companyName: "",
    minBasePay: "",
  },
};

const jobsDataSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    getAllJobs: (state, action) => {
      state.jobs = action.payload;
    },
    filterJobs: (state, action) => {
      state.filterDataOptions = action.payload;
    },
    increaseLimitCount: (state, action) => {
      state.limitCount = action.payload;
    },
  },
});

export const { getAllJobs, filterJobs, increaseLimitCount } =
  jobsDataSlice.actions;
export default jobsDataSlice.reducer;
