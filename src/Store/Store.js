import { configureStore } from "@reduxjs/toolkit";

import { JobDataService } from "./APIServices/JobData";
import JobsDataSlice from "./Slices/JobsDataSlice";

export const store = configureStore({
  reducer: {
    JobsDataState: JobsDataSlice,
    [JobDataService.reducerPath]: JobDataService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([JobDataService.middleware]),
});
