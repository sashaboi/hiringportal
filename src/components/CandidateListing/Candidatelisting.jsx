import React from "react";
// import { v4 as uuid } from "uuid";
import DynamicTable from "@atlaskit/dynamic-table";

import "./candidatelisting.css";
// import { CandidateCard } from "../CandidateCard/CandidateCard";
// import { token } from "@atlaskit/tokens";
import { head } from "../../utils/TableDataHandler/TableDataHandler";

import Avatar from "@atlaskit/avatar";
import EmailIcon from "@atlaskit/icon/glyph/email";
import TrashIcon from "@atlaskit/icon/glyph/trash";
import ExportIcon from "@atlaskit/icon/glyph/export";
import DropdownMenu, {
  DropdownItem,
  DropdownItemGroup,
} from "@atlaskit/dropdown-menu";

import { useSelector } from "react-redux";
export const Candidatelisting = () => {
  const state = useSelector((state) => state.candidate);
  const searchfilteredstate = state.candidates.filter((obj) =>
    obj.name.toUpperCase().includes(state.search.toUpperCase())
  );
  const locationfilteredstate =
    state.location.length === 0
      ? searchfilteredstate
      : searchfilteredstate.filter((obj) =>
          state.location.some((statelocation) => statelocation === obj.location)
        );
  const techStackFilteredState =
    state.tech.length === 0
      ? locationfilteredstate
      : locationfilteredstate.filter((obj) =>
          state.tech.some((tech) => tech === obj.tech)
        );
  console.log("state from data", state);
  const rows = techStackFilteredState.map((candidateobj) => ({
    key: candidateobj.id,
    isHighlighted: false,
    cells: [
      {
        key: createKey(candidateobj.image),
        content: (
          <Avatar
            appearance="circle"
            src={candidateobj.image}
            size="large"
            name="John Doe"
            isLoading={state.loading}
          />
        ),
      },
      {
        key: createKey(candidateobj.name),
        content: <p> {candidateobj.name}</p>,
      },
      {
        key: createKey(candidateobj.email),
        content: candidateobj.email,
      },
      {
        key: candidateobj.id,
        content: candidateobj.location,
      },
      {
        key: "Lorem",
        content: candidateobj.tech,
      },
      {
        key: "MoreDropdown",
        content: (
          <DropdownMenu trigger="More">
            <DropdownItemGroup>
              <DropdownItem>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <EmailIcon /> Send notification Email
                </div>
              </DropdownItem>
              <DropdownItem>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <TrashIcon />
                  Remove From List
                </div>
              </DropdownItem>
              <DropdownItem>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <ExportIcon />
                  Export Resume
                </div>
              </DropdownItem>
            </DropdownItemGroup>
          </DropdownMenu>
        ),
      },
    ],
  }));
  function createKey(input) {
    return input ? input.replace(/^(the|a|an)/, "").replace(/\s/g, "") : input;
  }

  return (
    <div className="candidatelisting-parent">
      <DynamicTable
        head={head}
        rows={rows}
        rowsPerPage={10}
        defaultPage={1}
        loadingSpinnerSize="large"
        isRankable
        emptyView={<h2>The table is empty !</h2>}
        isLoading={state.loading}
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
