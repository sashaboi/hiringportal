import React, { useState } from "react";
// import { v4 as uuid } from "uuid";
import DynamicTable from "@atlaskit/dynamic-table";

import "./candidatelisting.css";

import { head } from "../../utils/TableDataHandler/TableDataHandler";
import {
  removeSingleCandidate,
  restorecandidate,
} from "../../ReduxAssets/CandidateSlice/candidateSlice";
import Avatar from "@atlaskit/avatar";
import EmailIcon from "@atlaskit/icon/glyph/email";
import TrashIcon from "@atlaskit/icon/glyph/trash";
import ExportIcon from "@atlaskit/icon/glyph/export";
import DropdownMenu, {
  DropdownItem,
  DropdownItemGroup,
} from "@atlaskit/dropdown-menu";
import { useFlags } from "@atlaskit/flag";
import { useSelector, useDispatch } from "react-redux";
import Info from "@atlaskit/icon/glyph/info";
import { token } from "@atlaskit/tokens";
import { P300 } from "@atlaskit/theme/colors";
export const Candidatelisting = () => {
  const dispatch = useDispatch();

  const { showFlag } = useFlags();
  const [indexOfDeletedElement, setIndexOfDeletedElement] = useState(0);
  console.log(indexOfDeletedElement);
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
                  <ExportIcon />
                  Export Resume
                </div>
              </DropdownItem>
              <DropdownItem
                onClick={() => {
                  removeFromList(candidateobj);
                }}
              >
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
            </DropdownItemGroup>
          </DropdownMenu>
        ),
      },
    ],
  }));
  function createKey(input) {
    return input ? input.replace(/^(the|a|an)/, "").replace(/\s/g, "") : input;
  }
  const addAutoDismissFlag = (object) => {
    showFlag({
      appearance: "success",
      actions: [
        {
          content: "Undo Remove",
          onClick: () => {
            dispatch(
              restorecandidate({
                candidate: object,
                index: indexOfDeletedElement,
              })
            );
          },
        },
      ],
      description: `Removed ${object.name} from the list`,
      icon: (
        <Info label="Info" primaryColor={token("color.icon.discovery", P300)} />
      ),
      title: ` Candidate Removed`,
      isAutoDismiss: true,
    });
  };

  const removeFromList = (obj) => {
    setIndexOfDeletedElement(
      state.candidates.findIndex((candidate) => candidate.id === obj.id)
    );

    addAutoDismissFlag(obj);

    dispatch(removeSingleCandidate(obj));
  };

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
    </div>
  );
};
