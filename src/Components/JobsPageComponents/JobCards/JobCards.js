import "./JobCards.css";

import { useSelector, useDispatch } from "react-redux";
import iconImage from "../../../Assets/icon.png";

import * as React from "react";

import { increaseLimitCount } from "../../../Store/Slices/JobsDataSlice";

export default function JobCards() {
  const dispatch = useDispatch();
  const { jobs, filterDataOptions, limitCount } = useSelector(
    (state) => state.JobsDataState
  );

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      dispatch(increaseLimitCount(limitCount + 20));
    }
  };

  // Getting Id for job description expansion
  const [id, setId] = React.useState("");

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [jobs]);

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
      return item?.location === "remote";
    }
    if (filterDataOptions?.remoteOnSite === "Hybrid") {
      return item?.location === "hybrid";
    }
    if (filterDataOptions?.remoteOnSite === "In-Office") {
      return item?.location !== "remote";
    }
    if (filterDataOptions?.techStack === item?.techStack) {
      return item;
    }
    if (filterDataOptions?.minBasePay === item?.minJdSalary) {
      return item;
    } else {
      return false;
    }
  });

  const renderedJobCards = filteredData?.map((item, index) => {
    return (
      <div className="jobcard" key={`${item?.jdUid} - ${index}`}>
        <p className="jobcard-postedTime"> 5 days ago</p>
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
        {id === item.jdUid ? (
          <div className="jobcard-about">
            <p className="jobcard-about-heading">About Company</p>
            <p>{item?.jobDetailsFromCompany}</p>
          </div>
        ) : (
          <div className="jobcard-about">
            <p className="jobcard-about-heading">About Company</p>
            <p>{item?.jobDetailsFromCompany.substr(0, 150)}</p>
            <div
              className="jobcard-about-ViewJob"
              onClick={() => setId(item.jdUid)}
            >
              Read more..
            </div>
          </div>
        )}
        {item.minExp && (
          <div className="">
            <p style={{ fontWeight: "600", lineHeight: "4px" }}>
              Minimum Experience
            </p>
            <p>{item.minExp} Years</p>
          </div>
        )}
        <button className="jobcard-button">Easy Apply</button>
      </div>
    );
  });

  const renderedJobCardsUnfiltered = jobs?.jdList?.map((item, index) => {
    return (
      <div className="jobcard" key={`${item?.jdUid} - ${index}`}>
        <p className="jobcard-postedTime">5 days ago</p>
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
        {id === item.jdUid ? (
          <div className="jobcard-about">
            <p className="jobcard-about-heading">About Company</p>
            <p>{item?.jobDetailsFromCompany}</p>
          </div>
        ) : (
          <div className="jobcard-about">
            <p className="jobcard-about-heading">About Company</p>
            <p>{item?.jobDetailsFromCompany.substr(0, 150)}</p>
            <div
              className="jobcard-about-ViewJob"
              onClick={() => setId(item.jdUid)}
            >
              Read More..
            </div>
          </div>
        )}
        {item.minExp ? (
          <div className="">
            <p style={{ fontWeight: "600", lineHeight: "4px" }}>
              Minimum Experience
            </p>
            <p>{item.minExp} Years</p>
          </div>
        ) : (
          <div className="">
            <p style={{ fontWeight: "600", lineHeight: "4px" }}>
              Minimum Experience
            </p>
            <p>0 Years</p>
          </div>
        )}
        <button className="jobcard-button">Easy Apply</button>
      </div>
    );
  });

  // console.log(filteredData);

  return (
    <div className="jobCards">
      {filteredData?.length === 0
        ? renderedJobCardsUnfiltered
        : renderedJobCards}
    </div>
  );
}
