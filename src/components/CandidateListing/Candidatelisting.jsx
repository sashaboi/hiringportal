import React from "react";
// import { v4 as uuid } from "uuid";
import DynamicTable from "@atlaskit/dynamic-table";

import employeeData from "../../assets/data/employeeData";
import "./candidatelisting.css";
// import { CandidateCard } from "../CandidateCard/CandidateCard";
// import { token } from "@atlaskit/tokens";
import { head, rows } from "../../utils/TableDataHandler/TableDataHandler";
console.log(employeeData);
export const Candidatelisting = () => {
  return (
    <div className="candidatelisting-parent">
      <DynamicTable
        head={head}
        rows={rows}
        rowsPerPage={10}
        defaultPage={1}
        loadingSpinnerSize="large"
        isRankable
        emptyView={<h2>The table is empty and this is the empty view</h2>}
      />

      {/* <div
        style={{
          backgroundColor: token("elevation.surface.overlay", "#fff"),
          boxShadow: token(
            "elevation.shadow.overlay",
            "0px 4px 8px rgba(9, 30, 66, 0.25), 0px 0px 1px rgba(9, 30, 66, 0.31)"
          ),
          borderRadius: 4,
          maxWidth: "100%",
          marginRight: "10px",
        }}
        className="table-titles"
      >
        <h3>Picture</h3>
        <h3>Name</h3>
        <h3>Email</h3>
        <h3>Company</h3>
        <h3>City</h3>
        <h3>Action</h3>
      </div>
      {employeeData.map((obj) => (
        <CandidateCard key={uuid()} candidate={obj} />
      ))} */}
    </div>
  );
};
