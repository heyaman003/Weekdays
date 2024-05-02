import "./App.css";
import { lazy, Suspense } from "react";

// Loader from MUI
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
// -------------------------

import { useGetJobsMutation } from "./Store/APIServices/JobData";
import { getAllJobs } from "./Store/Slices/JobsDataSlice";

import { useSelector, useDispatch } from "react-redux";

// Pages Import
const JobsPage = lazy(() => import("./Pages/Jobs/Jobs"));

function App() {
  const dispatch = useDispatch();
  const [getJobs, responseGetJobs] = useGetJobsMutation();

  const { limitCount } = useSelector((state) => state.JobsDataState); //limitCount state from jobsDataSlice

  React.useEffect(() => {
    getJobs(limitCount);
  }, [limitCount]); //Send limit data initially 20 to api to get a response of 20 jdList data

  React.useEffect(() => {
    if (responseGetJobs.isSuccess) {
      dispatch(getAllJobs(responseGetJobs?.data));
    }
  }, [responseGetJobs.isSuccess]); //Storing the response from to jobs state in jobDataSlice

  return (
    <>
      {responseGetJobs.isLoading ? (
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <div className="App">
          <JobsPage />
        </div>
      )}
    </>
  );
}

export default App;
