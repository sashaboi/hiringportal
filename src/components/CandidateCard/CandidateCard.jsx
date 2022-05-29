import React from "react";
import Avatar from "@atlaskit/avatar";
import "./candidate.css";
import { token } from "@atlaskit/tokens";
import StarLargeIcon from "@atlaskit/icon/glyph/star-large";
export const CandidateCard = ({ candidate }) => {
  return (
    <div
      style={{
        color: token("color.text"),
        backgroundColor: token("elevation.surface.overlay", "#fff"),
        boxShadow: token(
          "elevation.shadow.overlay",
          "0px 4px 8px rgba(9, 30, 66, 0.25), 0px 0px 1px rgba(9, 30, 66, 0.31)"
        ),
        borderRadius: 4,

        margin: "16px auto",
      }}
      className="candidate-card-parent"
    >
      <div className="profile-pic">
        <Avatar />
      </div>
      <div className="candidate-name">{candidate.name}</div>
      <div className="candidate-name">{candidate.email}</div>
      <div className="candidate-name">{candidate.company.name}</div>
      <div className="candidate-name">{candidate.address.city}</div>
      <div className="candidate-star">
        <StarLargeIcon />
      </div>
    </div>
  );
};
