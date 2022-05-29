import React, { useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import PageHeader from "@atlaskit/page-header";
import "./editprofile.css";
import Button from "@atlaskit/button";
import { useSelector, useDispatch } from "react-redux";
import { addSingleCandidate } from "../../ReduxAssets/CandidateSlice/candidateSlice";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
export const EditProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.candidate);

  const allLocations = state.candidates.reduce((acc, val) => {
    return acc.includes(val.location) ? [...acc] : [...acc, val.location];
  }, []);
  const allTechStacks = state.candidates.reduce((acc, val) => {
    return acc.includes(val.tech) ? [...acc] : [...acc, val.tech];
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setlocation] = useState("");
  const [techStack, settechStack] = useState("");
  const addCandidate = () => {
    if (
      name.length ||
      email.length ||
      location.length ||
      techStack.length !== 0
    ) {
      dispatch(
        addSingleCandidate({
          id: uuid(),
          name: name,
          email: email,
          location: location,
          tech: techStack,
          image:
            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1148.jpg",
        })
      ).then(navigate("/"));
    }
  };
  return (
    <div className="homepage-parent">
      <div className="navbar-container">
        <Navbar />
      </div>

      <div className="candidate-form">
        <PageHeader>Candidate Form</PageHeader>
        <div className="form-container">
          <div className="input-element">
            <div className="input-label">Name</div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="atlasian-input"
              placeholder="Enter Name here"
            />
          </div>
          <div className="input-element">
            <div className="input-label">Email</div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="atlasian-input"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="input-element">
            <div className="input-label">Location</div>
            <select
              onChange={(e) => {
                setlocation(e.target.value);
              }}
              className="atlasian-input"
              id="locations"
              value={location}
            >
              {allLocations.map((obj) => (
                <option key={obj} value={obj}>
                  {obj}
                </option>
              ))}
            </select>
          </div>
          <div className="input-element">
            <div className="input-label">TechStack</div>
            <select
              onChange={(e) => {
                settechStack(e.target.value);
              }}
              className="atlasian-input"
              id="techStack"
              value={techStack}
            >
              {allTechStacks.map((obj) => (
                <option key={obj} value={obj}>
                  {obj}
                </option>
              ))}
            </select>
          </div>
          <Button
            onClick={() => {
              addCandidate();
            }}
            appearance="primary"
          >
            Add Candidate
          </Button>
          <Button
            onClick={() => {
              setName("Onkar");
              setEmail("onkar@revyz.io");
              setlocation(allLocations[0]);
              settechStack(allTechStacks[0]);
            }}
            appearance="primary"
            spacing="compact"
          >
            Add default data
          </Button>
        </div>
      </div>
    </div>
  );
};
