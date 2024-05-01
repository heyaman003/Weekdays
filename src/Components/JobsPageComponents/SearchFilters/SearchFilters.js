import React from "react";
import "./SearchFilters.css";

import SearchAndSelectDropdown from "../../StylingComponents/SearchAndSelectDropdown";
import { useSelector, useDispatch } from "react-redux";

export default function SearchFilters() {
  const { jobs } = useSelector((state) => state.JobsDataState);

  console.log(jobs?.jdList);
  return (
    <div className='JobSearchFilter'>
      <SearchAndSelectDropdown
        data={jobs?.jdList?.map((data) => data.jobRole)}
        placeholder='Min Experience
'
      />
      <SearchAndSelectDropdown data={jobs} placeholder='Company Name' />
      <SearchAndSelectDropdown
        data={jobs?.jdList?.map((data) => data.location)}
        placeholder='Location
'
      />
      <SearchAndSelectDropdown
        data={jobs}
        placeholder='Remote/on-site
'
      />
      <SearchAndSelectDropdown
        data={jobs}
        placeholder='Tech Stack
'
      />
      <SearchAndSelectDropdown
        data={jobs?.jdList?.map((data) => data.jobRole)}
        placeholder='Role
'
      />
      <SearchAndSelectDropdown
        data={jobs}
        placeholder='Min Base Pay
'
      />
    </div>
  );
}
