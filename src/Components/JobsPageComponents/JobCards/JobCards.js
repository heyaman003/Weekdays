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
  const { jobs, filterDataOptions } = useSelector(
    (state) => state.JobsDataState
  );

  const responseGetJobs = useGetJobsQuery();

  const filteredData = jobs?.jdList?.filter((item, index) => {
    if (filterDataOptions?.jobRole?.includes(item?.jobRole)) {
      return item;
    }
    if (filterDataOptions?.location === item?.location) {
      return item;
    }
    if (filterDataOptions?.companyName === item?.companyName) {
      return item;
    }
    if (filterDataOptions?.minExp === item?.minExp) {
      return item;
    }
    if (filterDataOptions?.remoteOnSite === "Remote") {
      if (item?.location === "remote") {
        return item;
      }
    }
    if (filterDataOptions?.techStack === item?.techStack) {
      return item;
    }
    if (filterDataOptions?.minBasePay === item?.minBasePay) {
      return item;
    }
  });

  console.log(filteredData);

  React.useEffect(() => {
    if (responseGetJobs.isSuccess) {
      dispatch(getAllJobs(responseGetJobs?.currentData));
    }
  }, [responseGetJobs.isSuccess]);

  const [dataToBeVisible, setDataToBeVisible] = React.useState([]);

  const fetchMoreDataWithScrolling = () => {
    const newData = dataToBeVisible.length
      ? [...dataToBeVisible, ...responseGetJobs?.currentData?.jdList]
      : responseGetJobs?.currentData?.jdList?.slice(0, 9);
    setDataToBeVisible(newData);
  };

  React.useEffect(() => {
    if (responseGetJobs.isSuccess) {
      fetchMoreDataWithScrolling();
    }
  }, [responseGetJobs.isSuccess]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchMoreDataWithScrolling();
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dataToBeVisible]);

  const renderedJobCards = dataToBeVisible?.map((item, index) => {
    return (
      <div className='jobcard' key={`${item?.jdUid} - ${index}`}>
        <p className='jobcard-postedTime'>Posted 12 days ago</p>
        <div className='jobcard-companyDetails'>
          <img src={iconImage} alt='iconImage' />
          <div className='jobcard-companyDetails-text'>
            <p className='jobcard-companyName'>Company Name</p>
            <p className='jobcard-JobName'>{item?.jobRole.toUpperCase()}</p>
            <p className='jobcard-JobLocation'>
              {item?.location.toUpperCase()}
            </p>
          </div>
        </div>
        <p style={{ fontWeight: 400, color: "#8b8b8b" }}>
          Estimated Salary: ₹18 - 35 LPA
        </p>
        <div className='jobcard-about'>
          <p className='jobcard-about-heading'>About Company</p>
          <p>{item?.jobDetailsFromCompany}</p>
          <div className='jobcard-about-ViewJob'>View Job</div>
        </div>
        <div className=''>
          <p style={{ fontWeight: "600", lineHeight: "4px" }}>
            Minimum Experience
          </p>
          <p>2 years</p>
        </div>
        <button className='jobcard-button'>Easy Apply</button>
      </div>
    );
  });

  return (
    <div className='jobCards'>
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
        renderedJobCards
      )}
    </div>
  );
}
