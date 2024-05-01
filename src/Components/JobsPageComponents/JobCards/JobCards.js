import "./JobCards.css";

import { useSelector, useDispatch } from "react-redux";
import iconImage from "../../../Assets/icon.png";

import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { useGetJobsQuery } from "../../../Store/APIServices/JobData";
import { getAllJobs } from "../../../Store/Slices/JobsDataSlice";

export default function JobCards() {
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.JobsDataState);

  const responseGetJobs = useGetJobsQuery();

  React.useEffect(() => {
    if (responseGetJobs.isSuccess) {
      dispatch(getAllJobs(responseGetJobs?.currentData));
    }
  }, [responseGetJobs.isSuccess]);

  const [visibleData, setVisibleData] = React.useState([]);

  const fetchMoreData = () => {
    // Simulate fetching more data
    const newData = visibleData.length
      ? [...visibleData, ...responseGetJobs?.currentData?.jdList]
      : responseGetJobs?.currentData?.jdList?.slice(0, 9);
    setVisibleData(newData);
  };

  console.log(visibleData);

  React.useEffect(() => {
    if (responseGetJobs.isSuccess) {
      fetchMoreData();
    }
  }, [responseGetJobs.isSuccess]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchMoreData();
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleData]);

  const renderedJobCards = visibleData?.map((item, index) => {
    return (
      <div className="jobcard" key={`${item?.jdUid} - ${index}`}>
        <p className="jobcard-postedTime">Posted 12 days ago</p>
        <div className="jobcard-companyDetails">
          <img src={iconImage} alt="iconImage" />
          <div className="jobcard-companyDetails-text">
            <p className="jobcard-companyName">Company Name</p>
            <p className="jobcard-JobName">{item?.jobRole.toUpperCase()}</p>
            <p className="jobcard-JobLocation">
              {item?.location.toUpperCase()}
            </p>
          </div>
        </div>
        <p style={{ fontWeight: 400, color: "#8b8b8b" }}>
          Estimated Salary: ₹18 - 35 LPA
        </p>
        <div className="jobcard-about">
          <p className="jobcard-about-heading">About Company</p>
          <p>{item?.jobDetailsFromCompany}</p>
          <div className="jobcard-about-ViewJob">View Job</div>
        </div>
        <div className="">
          <p style={{ fontWeight: "600", lineHeight: "4px" }}>
            Minimum Experience
          </p>
          <p>2 years</p>
        </div>
        <button className="jobcard-button">Easy Apply</button>
      </div>
    );
  });

  return (
    <div className="jobCards">
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
        renderedJobCards
      )}
    </div>
  );
}
