import React from "react";
import "./JobCards.css";

import { useSelector } from "react-redux";

export default function JobCards() {
  const { jobs } = useSelector((state) => state.JobsDataState);
  return <div>JobCards</div>;
}
