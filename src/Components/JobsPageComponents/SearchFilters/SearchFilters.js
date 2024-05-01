import React from "react";
import "./SearchFilters.css";

import SearchAndSelectDropdown from "../../StylingComponents/SearchAndSelectDropdown";
import { useSelector, useDispatch } from "react-redux";

export default function SearchFilters() {
  const { jobs, techStackData } = useSelector((state) => state.JobsDataState);

  console.log(jobs?.jdList);
  console.log(techStackData);

  return (
    <div className='JobSearchFilter'>
      <SearchAndSelectDropdown
        data={jobs?.jdList?.map((data) => data.jobRole.toUpperCase())}
        placeholder='Min Experience
'
      />
      <SearchAndSelectDropdown
        data={jobs?.jdList?.map((data) => data.location.toUpperCase())}
        placeholder='Company Name'
      />
      <SearchAndSelectDropdown
        data={jobs?.jdList?.map((data) => data.location.toUpperCase())}
        placeholder='Location
'
      />
      <SearchAndSelectDropdown
        data={jobs?.jdList?.map((data) => data.jobRole.toUpperCase())}
        placeholder='Remote/on-site
'
      />
      <SearchAndSelectDropdown
        data={techStackData.map((data) => data.toUpperCase())}
        placeholder='Tech Stack
'
      />
      <SearchAndSelectDropdown
        data={jobs?.jdList?.map((data) => data.jobRole.toUpperCase())}
        placeholder='Role
'
      />
      <SearchAndSelectDropdown
        data={jobs?.jdList?.map((data) => data.jobRole.toUpperCase())}
        placeholder='Min Base Pay
'
      />
    </div>
  );
}
