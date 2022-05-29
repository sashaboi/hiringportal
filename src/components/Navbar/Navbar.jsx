/* eslint-disable no-sparse-arrays */
import React from "react";
import { Link } from "react-router-dom";
import { AtlassianIcon, AtlassianLogo } from "@atlaskit/logo";

import {
  AtlassianNavigation,
  PrimaryButton,
  ProductHome,
} from "@atlaskit/atlassian-navigation";

const AtlassianProductHome = () => (
  <ProductHome icon={AtlassianIcon} logo={AtlassianLogo} />
);

const Navbar = () => (
  <AtlassianNavigation
    label="site"
    iconAlt="Atlassian Documentation"
    logoAlt="Atlassian Documentation"
    primaryItems={[
      <Link to={"/"}>
        <PrimaryButton>Candidates</PrimaryButton>
      </Link>,
      <Link to={"/editprofile"}>
        <PrimaryButton>Add Candidates</PrimaryButton>
      </Link>,
      ,
    ]}
    renderProductHome={AtlassianProductHome}
  />
);
export { Navbar };
