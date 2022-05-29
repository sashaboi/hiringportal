import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  resetData: [],
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
    addSingleCandidate: (state, action) => {
      state.candidates.unshift(action.payload);
    },
    addCandidates: (state, action) => {
      state.candidates = action.payload;
      state.resetData = action.payload;
      state.loading = false;
    },
    restorecandidate: (state, action) => {
      console.log(action.payload.index);
      state.candidates.splice(
        action.payload.index,
        0,
        action.payload.candidate
      );
    },
    removeSingleCandidate: (state, action) => {
      state.candidates = state.candidates.filter(
        (obj) => obj.id !== action.payload.id
      );
    },
    resetData: (state) => {
      state.candidates = state.resetData;
      state.location = [];
      state.tech = [];
      state.search = "";
      state.loading = false;
    },
    searchCandidates: (state, action) => {
      state.search = action.payload;

      state.sortBy = "Changed";
      state.loading = false;
    },
    locationFilter: (state, action) => {
      if (action.payload.check === false) {
        state.location = state.location.filter(
          (obj) => obj !== String(action.payload.checkedlocation)
        );
      } else {
        state.location.push(action.payload.checkedlocation);
      }
    },
    techFilter: (state, action) => {
      if (action.payload.check === false) {
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
export const {
  addCandidates,
  resetData,
  searchCandidates,
  locationFilter,
  techFilter,
  removeSingleCandidate,
  restorecandidate,
  addSingleCandidate,
} = candidateSlice.actions;

export default candidateSlice.reducer;
