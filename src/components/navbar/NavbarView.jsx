import React, { Fragment } from "react";
import styled from "styled-components";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from "reactstrap";

import pagesDefinitionsList from "./pagesDefinitionsList";

const StyledNavLink = styled(NavLink)`
  font-weight: bold;
  &:hover {
    color: black !important;
  }
`;

const renderNavItem = (pageDefinitions, index) => (
  <NavItem key={`navitem_${index}`}>
    <StyledNavLink key={`navlink_${index}`} href={pageDefinitions.path}>
      {pageDefinitions.title}
    </StyledNavLink>
  </NavItem>
);

const renderLinks = () =>
  pagesDefinitionsList.map((pageDefinitions, index) =>
    renderNavItem(pageDefinitions, index)
  );

const StyledNav = styled(Nav)`
  margin-left: 0px !important;
`;

const renderNav = () => (
  <StyledNav className="ml-auto" navbar>
    {renderLinks()}
  </StyledNav>
);

const StyledNavbarBrand = styled(NavbarBrand)`
  width: 10%;
`;

const renderNavbarContent = ({ onToggle, isOpen }) => (
  <Fragment>
    <StyledNavbarBrand href="/">DATA GR</StyledNavbarBrand>
    <NavbarToggler onClick={onToggle} />
    <Collapse isOpen={isOpen} navbar>
      {renderNav()}
    </Collapse>
  </Fragment>
);

const renderNavbar = (props) => (
  <Navbar color="withe" light expand="md">
    {renderNavbarContent(props)}
  </Navbar>
);

const NavbarView = (props) => renderNavbar(props);

export default NavbarView;
