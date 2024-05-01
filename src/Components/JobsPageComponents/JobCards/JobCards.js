import React from "react";
import "./JobCards.css";

import { useSelector } from "react-redux";
import iconImage from "../../../Assets/icon.png";

export default function JobCards() {
  const { jobs } = useSelector((state) => state.JobsDataState);

  const renderedJobCards = jobs?.jdList?.map((item, index) => {
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

  return <div className='jobCards'>{renderedJobCards}</div>;
}
