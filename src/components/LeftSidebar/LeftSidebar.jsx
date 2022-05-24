import React from "react";
import PageHeader from "@atlaskit/page-header";
import { Checkbox } from "@atlaskit/checkbox";
import Textfield from "@atlaskit/textfield";
import "./leftsidebar.css";
import { HeadingItem } from "@atlaskit/menu";
import { token } from "@atlaskit/tokens";

export const LeftSidebar = () => {
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
        />
      </div>

      <Checkbox
        value="default checkbox"
        label="Show Starred"
        onChange={() => {}}
        name="checkbox-default"
        testId="cb-default"
        size="large"
      />
      <HeadingItem>Location</HeadingItem>
    </div>
  );
};
