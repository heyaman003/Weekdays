import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

export const JobDataService = createApi({
  reducerPath: "jobs",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.React_App_Base_url }),
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: () => {
        return {
          url: `getSampleJdJSON`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
  }),
});

export const { useGetJobsQuery } = JobDataService;
