import React from "react";
import "./SearchFilters.css";

import SearchAndSelectDropdown from "../../StylingComponents/SearchAndSelectDropdown";
import { useSelector, useDispatch } from "react-redux";

export default function SearchFilters() {
  const { jobs } = useSelector((state) => state.JobsDataState);

  console.log(jobs);
  return (
    <div className='JobSearchFilter'>
      <SearchAndSelectDropdown
        data={jobs}
        placeholder='Min Experience
'
      />
      <SearchAndSelectDropdown data={jobs} placeholder='Company Name' />
      <SearchAndSelectDropdown
        data={jobs}
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
        data={jobs}
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
