import React from "react";
import { Candidatelisting } from "../../components/CandidateListing/Candidatelisting";
import { LeftSidebar } from "../../components/LeftSidebar/LeftSidebar";
import { Navbar } from "../../components/Navbar/Navbar";
import "./homepage.css";
export const Homepage = () => {
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
