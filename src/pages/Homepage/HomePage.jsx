import React from "react";
import { Candidatelisting } from "../../components/CandidateListing/Candidatelisting";
import { LeftSidebar } from "../../components/LeftSidebar/LeftSidebar";
import { Navbar } from "../../components/Navbar/Navbar";
import "./homepage.css";
import { data } from "../../utils/TableDataHandler/candidatedata";

export const Homepage = () => {
  console.log(data);
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
