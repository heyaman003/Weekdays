import React, { useState } from "react";
import "./SearchFilters.css";

import SearchAndSelectDropdown from "../../StylingComponents/SearchAndSelectDropdown";
import SelectComponent from "../../StylingComponents/SelectComponent";

import { useSelector, useDispatch } from "react-redux";

export default function SearchFilters() {
  const { jobs, techStackData } = useSelector((state) => state.JobsDataState);

  console.log(jobs?.jdList);
  console.log(techStackData);

  const [minExperience, setMinExperience] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [remoteOrNot, setRemoteOrNot] = useState("");
  const [techStack, setTechStack] = useState("");
  const [minBasePay, setMinBasePay] = useState("");

  return (
    <div className="JobSearchFilter">
      <SearchAndSelectDropdown
        data={jobs?.jdList?.map((data) => data.jobRole.toUpperCase())}
        placeholder="Role"
      />
      <SelectComponent
        data={jobs?.jdList?.map((data) => data.jobRole.toUpperCase())}
        placeholder="Min Experience"
      />
      <SelectComponent
        data={jobs?.jdList?.map((data) => data.location.toUpperCase())}
        placeholder="Company Name"
      />
      <SelectComponent
        data={jobs?.jdList?.map((data) => data.location.toUpperCase())}
        placeholder="Location"
      />
      <SelectComponent
        data={jobs?.jdList?.map((data) => data.jobRole.toUpperCase())}
        placeholder="Remote/on-site"
      />
      <SelectComponent
        options={techStackData.map((data) => data.toUpperCase())}
        data={techStack}
        setData={setTechStack}
        placeholder="Tech Stack"
      />
      <SelectComponent
        data={jobs?.jdList?.map((data) => data.jobRole.toUpperCase())}
        placeholder="Min Base Pay"
      />
    </div>
  );
}
