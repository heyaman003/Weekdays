import "./Jobs.css";

import SearchFilters from "../../Components/JobsPageComponents/SearchFilters/SearchFilters";
import JobCards from "../../Components/JobsPageComponents/JobCards/JobCards";

export default function Jobs() {
  return (
    <div className="Jobs">
      <SearchFilters />
      <JobCards />
    </div>
  );
}
