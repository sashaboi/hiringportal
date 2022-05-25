import { createSlice } from "@reduxjs/toolkit";
import { current } from "immer";

const initialState = {
  error: null,
  candidates: [],
  loading: true,
  sortBy: "recent", // "recent", "likes","comments"
  search: "",
  location: [],
  tech: [],
};
const candidateSlice = createSlice({
  name: "candidates",
  initialState,
  reducers: {
    addCandidates: (state, action) => {
      state.candidates = action.payload;
      state.loading = false;
    },
    searchCandidates: (state, action) => {
      state.search = action.payload;

      state.sortBy = "Changed";
      state.loading = false;
    },
    locationFilter: (state, action) => {
      console.log(action.payload);
      if (action.payload.check === false) {
        console.log("entered false condition", action.payload.checkedlocation);
        console.log(current(state.location));
        state.location = state.location.filter(
          (obj) => obj !== String(action.payload.checkedlocation)
        );
      } else {
        state.location.push(action.payload.checkedlocation);
      }
    },
    techFilter: (state, action) => {
      console.log(action.payload);
      if (action.payload.check === false) {
        console.log("entered false condition", action.payload.checkedTech);
        console.log(current(state.tech));
        state.tech = state.tech.filter(
          (obj) => obj !== String(action.payload.checkedTech)
        );
      } else {
        state.tech.push(action.payload.checkedTech);
      }
    },
  },
  extraReducers: {},
});
export const { addCandidates, searchCandidates, locationFilter, techFilter } =
  candidateSlice.actions;

export default candidateSlice.reducer;
