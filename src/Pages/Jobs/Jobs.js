import "./Jobs.css";

// Loader from MUI
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
// -------------------------

// Components
import SearchFilters from "../../Components/JobsPageComponents/SearchFilters/SearchFilters";
import JobCards from "../../Components/JobsPageComponents/JobCards/JobCards";

import { useGetJobsQuery } from "../../Store/APIServices/JobData";

export default function Jobs() {
  const responseGetJobs = useGetJobsQuery();

  console.log(responseGetJobs);
  return (
    <div className='Jobs'>
      <SearchFilters />
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
        <JobCards />
      )}
    </div>
  );
}
