import React, { useEffect } from "react";
import { Candidatelisting } from "../../components/CandidateListing/Candidatelisting";
import { LeftSidebar } from "../../components/LeftSidebar/LeftSidebar";
import { Navbar } from "../../components/Navbar/Navbar";
import "./homepage.css";
import { data } from "../../utils/TableDataHandler/candidatedata";
import { useDispatch } from "react-redux";
import { addCandidates } from "../../ReduxAssets/CandidateSlice/candidateSlice";
export const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("reload useeffect");
    dispatch(addCandidates(data));
  }, [dispatch]);

  return (
    <div className="homepage-parent">
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="homepage-container">
        <LeftSidebar />
        <Candidatelisting />
      </div>
    </div>
  );
};
