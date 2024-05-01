import "./App.css";
import { lazy, Suspense } from "react";

// Loader from MUI
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
// -------------------------

import { useGetJobsQuery } from "./Store/APIServices/JobData";

// Pages Import
const JobsPage = lazy(() => import("./Pages/Jobs/Jobs"));

function App() {
  const responseGetJobs = useGetJobsQuery();

  // console.log(responseGetJobs);

  return (
    <>
      <div className='App'>
        <Suspense
          fallback={
            <>
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            </>
          }>
          <JobsPage />
        </Suspense>
      </div>
    </>
  );
}

export default App;
