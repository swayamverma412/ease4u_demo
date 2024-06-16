import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import logo from "../../images/logo1.svg";
import { Link } from "react-router-dom";

const Header = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto
  py-8
`;

const NavLinks = tw.div`flex items-center`;
const NavLink = tw(Link)`
  text-lg mx-6 font-semibold tracking-wide transition duration-300
  text-white border-b-2 border-transparent hover:border-primary-500 hover:text-primary-500
`;
const PrimaryLink = tw(NavLink)`
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hover:bg-primary-700 hover:text-gray-200
`;
const LogoLink = styled(Link)`
  ${tw`flex items-center font-black text-2xl! text-white`}
  img {
    ${tw`w-10 mr-3`}
  }
`;

const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none text-white hover:text-primary-500 transition duration-300
`;
const MobileNavLinksContainer = tw.nav`lg:hidden flex flex-col items-center bg-white p-8 rounded-lg shadow-lg`;

const DesktopNavLinks = tw.nav`
  hidden lg:flex items-center
`;

const SimpleHeader = ({ roundedHeaderButton = false, logoLink, links, className = "header-light" }) => {
  const [isMobileNavVisible, setIsMobileNavVisible] = React.useState(false);

  const toggleMobileNav = () => setIsMobileNavVisible(!isMobileNavVisible);

  // Default logo link and links if not provided
  logoLink = logoLink || (
    <LogoLink to="/">
      <img src={logo} alt="logo" />
      Ease4u
    </LogoLink>
  );

  links = links || (
    <NavLinks>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact">About Us</NavLink>
      <PrimaryLink to="/login" css={roundedHeaderButton && tw`rounded-full`}>Contact</PrimaryLink>
    </NavLinks>
  );

  return (
    <Header className={className}>
      {logoLink}
      <DesktopNavLinks>{links}</DesktopNavLinks>
      <NavToggle onClick={toggleMobileNav}>
        {isMobileNavVisible ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-6 h-6" />}
      </NavToggle>
      {isMobileNavVisible && (
        <MobileNavLinksContainer>
          {links}
        </MobileNavLinksContainer>
      )}
    </Header>
  );
};

export default SimpleHeader;
