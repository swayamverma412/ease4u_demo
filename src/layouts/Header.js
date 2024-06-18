import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
import Logo from "./Logo";
import { ReactComponent as LogoWhite } from "../assets/images/logos/materialprowhite.svg";
import user1 from "../assets/images/users/user4.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };

  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };

  return (
    <Navbar color="white" dark expand="md" className="fix-header">
      <div className="d-flex align-items-center">
        <div className="d-lg-block d-none me-5 pe-3">
          <Logo />
        </div>
        <NavbarBrand href="/">
          <LogoWhite className="d-lg-none" />
        </NavbarBrand>
        <Button
          color="primary"
          className="d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>
      </div>

      {/* Centered Customer Information Center */}
      <div className="text-center flex-grow-1 text-bold">
        <span className="fs-5">Customer Information Center</span>
      </div>

      {/* Right-aligned dropdown and logout button */}
      <Collapse navbar isOpen={isOpen}>
        <Nav className="me-auto" navbar>
          {/* Add your NavItems here if needed */}
        </Nav>
        <Dropdown isOpen={dropdownOpen} toggle={toggle} className="ms-auto">
          <DropdownToggle color="transparent">
            <img
              src={user1}
              alt="profile"
              className="rounded-circle"
              width="30"
            />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Info</DropdownItem>
            <DropdownItem>My Account</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Collapse>
    </Navbar>
  );
};

export default Header;
