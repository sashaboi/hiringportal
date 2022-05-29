import { configureStore } from "@reduxjs/toolkit";
import candidateReducer from "../CandidateSlice/candidateSlice";
export const store = configureStore({
  reducer: { candidate: candidateReducer },
});
