import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { homeAsyncActions } from "../ducks/home";
import JobCard from "./jobCard";
import Spinner from "./spinner";
export default function JobsList() {
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => {
    return {
      jobs: state.home.jobs,
      hasError: state.home.hasError,
      errorMessage: state.home.message,
    };
  });
  useEffect(() => {
    dispatch(homeAsyncActions.getAllJobs());
  }, [dispatch]);
  if (!jobs) {
    return <Spinner text="Loading..." />;
  }
  return (
    <section data-testid="jobslist">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </section>
  );
}
