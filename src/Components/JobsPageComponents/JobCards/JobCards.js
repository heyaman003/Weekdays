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
            <p className='jobcard-JobName'>JOB NAME</p>
            <p className='jobcard-JobLocation'>Location</p>
          </div>
        </div>
        <p style={{ fontWeight: 400, color: "#8b8b8b" }}>
          Estimated Salary: ₹18 - 35 LPA
        </p>
        <div className='jobcard-about'>
          <p className='jobcard-about-heading'>About Company</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
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
