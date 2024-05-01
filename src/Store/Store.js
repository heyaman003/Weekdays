import { configureStore } from "@reduxjs/toolkit";

import { JobDataService } from "./APIServices/JobData";

export const store = configureStore({
  reducer: {
    // PatientState: PatientSlice,
    [JobDataService.reducerPath]: JobDataService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([JobDataService.middleware]),
});
