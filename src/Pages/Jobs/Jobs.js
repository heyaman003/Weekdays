import "./Jobs.css";

// Loader from MUI
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
// -------------------------

import { useSelector, useDispatch } from "react-redux";

// Components
import SearchFilters from "../../Components/JobsPageComponents/SearchFilters/SearchFilters";
import JobCards from "../../Components/JobsPageComponents/JobCards/JobCards";

import { useGetJobsQuery } from "../../Store/APIServices/JobData";
import { getAllJobs } from "../../Store/Slices/JobsDataSlice";

export default function Jobs() {
  // This is used in redux to store data into state
  const dispatch = useDispatch();
  // -------------------------------------

  const responseGetJobs = useGetJobsQuery();

  const { jobs } = useSelector((state) => state.JobsDataState);

  console.log(jobs);

  React.useEffect(() => {
    if (responseGetJobs.isSuccess) {
      dispatch(getAllJobs(responseGetJobs?.currentData));
    }
  }, [responseGetJobs.isSuccess]);
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
          }}>
          <CircularProgress />
        </Box>
      ) : (
        <div className='Jobs'>
          <SearchFilters />
          <JobCards />
        </div>
      )}
    </>
  );
}
