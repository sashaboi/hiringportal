import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { EditProfile, Homepage, Lost, MainDash } from "./pages";
import { addCandidates } from "./ReduxAssets/CandidateSlice/candidateSlice";
import { useDispatch } from "react-redux";
import { data } from "./utils/TableDataHandler/candidatedata";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(addCandidates(data));
    }, 1000);
  });
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<MainDash />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="*" element={<Lost />} />
      </Routes>
    </div>
  );
}

export default App;
