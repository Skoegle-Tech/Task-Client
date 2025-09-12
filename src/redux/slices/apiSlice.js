import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "https://task-ytw6.onrender.com/api";
const API_URL2 = "https://task-api.skoegle.com/api";

// Create two base queries
const baseQuery1 = fetchBaseQuery({ baseUrl: API_URL });
const baseQuery2 = fetchBaseQuery({ baseUrl: API_URL2 });

// Custom base query with fallback
const baseQueryWithFallback = async (args, api, extraOptions) => {
  let result = await baseQuery1(args, api, extraOptions);

  // If first API fails (e.g., server down or network error), try backup
  if (result.error && (result.error.status === "FETCH_ERROR" || result.error.status >= 500)) {
    console.warn("Primary API failed, retrying with backup server...");
    result = await baseQuery2(args, api, extraOptions);
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithFallback,
  tagTypes: [],
  endpoints: (builder) => ({}),
});
