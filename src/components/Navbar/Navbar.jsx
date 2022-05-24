import React from "react";

import { AtlassianIcon, AtlassianLogo } from "@atlaskit/logo";

import {
  AtlassianNavigation,
  PrimaryButton,
  PrimaryDropdownButton,
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
      <PrimaryButton>Your work</PrimaryButton>,
      <PrimaryDropdownButton>Issues</PrimaryDropdownButton>,
      <PrimaryDropdownButton>Projects</PrimaryDropdownButton>,
      <PrimaryButton>Repositories</PrimaryButton>,
    ]}
    renderProductHome={AtlassianProductHome}
  />
);
export { Navbar };
