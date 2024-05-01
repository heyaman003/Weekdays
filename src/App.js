import "./App.css";

import { useGetJobsQuery } from "./Store/APIServices/JobData";

function App() {
  const responseGetJobs = useGetJobsQuery();

  // console.log(responseGetJobs);

  return <div className='App'>Hello</div>;
}

export default App;
