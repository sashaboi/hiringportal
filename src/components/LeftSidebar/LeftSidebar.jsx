import React, { useState, useRef } from "react";
import PageHeader from "@atlaskit/page-header";
import { Checkbox } from "@atlaskit/checkbox";
import Textfield from "@atlaskit/textfield";
import "./leftsidebar.css";
import { HeadingItem } from "@atlaskit/menu";
import { token } from "@atlaskit/tokens";
import { useDispatch } from "react-redux";
import { P300 } from "@atlaskit/theme/colors";
import { useFlags } from "@atlaskit/flag";
import Info from "@atlaskit/icon/glyph/info";

import {
  searchCandidates,
  locationFilter,
  techFilter,
  resetData,
} from "../../ReduxAssets/CandidateSlice/candidateSlice";
import { useSelector } from "react-redux";
import Button from "@atlaskit/button";
import DropdownMenu, { DropdownItemGroup } from "@atlaskit/dropdown-menu";
export const LeftSidebar = () => {
  const flagCount = useRef(1);

  const { showFlag } = useFlags();
  const [searchTimer, setSearchTimer] = useState();
  const state = useSelector((state) => state.candidate);
  const dispatch = useDispatch();
  const searchCandidate = (search) => {
    searchTimer && clearTimeout(searchTimer);
    setSearchTimer(
      setTimeout(() => {
        dispatch(searchCandidates(search));
      }, 400)
    );
  };

  const allLocations = state.candidates.reduce((acc, val) => {
    return acc.includes(val.location) ? [...acc] : [...acc, val.location];
  }, []);
  const allTechStacks = state.candidates.reduce((acc, val) => {
    return acc.includes(val.tech) ? [...acc] : [...acc, val.tech];
  }, []);

  const addAutoDismissFlag = () => {
    showFlag({
      actions: [
        {
          content: "Nice one!",
          onClick: () => {},
        },
      ],
      description: "I will automatically dismiss after 8 seconds.",
      icon: (
        <Info label="Info" primaryColor={token("color.icon.discovery", P300)} />
      ),
      title: `${flagCount.current++}: Whoa a new flag!`,
      isAutoDismiss: true,
    });
  };
  return (
    <div
      style={{
        backgroundColor: token("elevation.surface.overlay", "#fff"),
        boxShadow: token(
          "elevation.shadow.overlay",
          "0px 4px 8px rgba(9, 30, 66, 0.25), 0px 0px 1px rgba(9, 30, 66, 0.31)"
        ),
        borderRadius: 4,
        maxWidth: 320,
        marginRight: "10px",
        paddingLeft: "20px",
      }}
      className="sidebar-parent"
    >
      <PageHeader>Candidates</PageHeader>
      <HeadingItem>Search</HeadingItem>
      <div className="filter-text">
        <Textfield
          name="basic"
          aria-label="default text field"
          placeholder="Search for candidate"
          onChange={(e) => {
            searchCandidate(e.target.value);
          }}
        />
      </div>

      <HeadingItem>Filter by Location</HeadingItem>
      <DropdownMenu trigger="Show Locations">
        {allLocations.map((location) => (
          <DropdownItemGroup key={location}>
            <Checkbox
              value="default checkbox"
              label={location}
              onChange={(e) => {
                dispatch(
                  locationFilter({
                    checkedlocation: location,
                    check: e.target.checked,
                  })
                );
              }}
              name="checkbox-default"
              testId="cb-default"
              size="large"
              isChecked={state.location.some(
                (statelocation) => statelocation === location
              )}
            />
          </DropdownItemGroup>
        ))}
      </DropdownMenu>
      <HeadingItem>Filter by TechStack</HeadingItem>
      <DropdownMenu trigger="Show TechStack">
        {allTechStacks.map((tech) => (
          <DropdownItemGroup key={tech}>
            <Checkbox
              value="default checkbox"
              label={tech}
              onChange={(e) => {
                dispatch(
                  techFilter({
                    checkedTech: tech,
                    check: e.target.checked,
                  })
                );
              }}
              name="checkbox-default"
              testId="cb-default"
              size="large"
              isChecked={state.tech.some((statetech) => statetech === tech)}
            />
          </DropdownItemGroup>
        ))}
      </DropdownMenu>
      <Button
        onClick={() => {
          dispatch(resetData());
        }}
        appearance="primary"
      >
        Reset
      </Button>
      <Button
        appearance="primary"
        onClick={() => {
          addAutoDismissFlag();
        }}
      >
        Test Flag
      </Button>
    </div>
  );
};
