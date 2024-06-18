import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import logo from "../../images/logo6.svg";
import { Link } from "react-router-dom";
import { Row } from "reactstrap";

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
  ${tw`flex items-center font-black text-2xl! text-primary-500`}
  img {
    width: 120px; /* Adjust the width for mobile view */
    height: auto; /* Maintain aspect ratio */
    ${tw`mr-3`}
  }
`;

const DesktopNavLinks = tw.nav`
  hidden lg:flex items-center
`;

const NavToggle = styled.button`
  ${tw`lg:hidden absolute mt-4 mr-4 bg-white p-2 rounded-full`}
  right: 0;
  cursor: pointer;
`;

const MobileNavLinksContainer = tw.nav`
  lg:hidden
  flex
  flex-col       // Display items in a column
  items-center   // Center items horizontally
  bg-white
  p-8
  rounded-lg
  shadow-lg
  relative  // Ensure relative positioning for absolute child
`;

const CloseButton = styled.button`
  ${tw`relative left-0  lg:m-0 bg-white   border-none`}
  cursor: pointer;
`;


const SimpleHeader = ({ roundedHeaderButton = false, logoLink, links, className = "header-light" }) => {
  const [isMobileNavVisible, setIsMobileNavVisible] = React.useState(false);

  const toggleMobileNav = () => setIsMobileNavVisible(!isMobileNavVisible);

  // Default logo link and links if not provided
  logoLink = logoLink || (
    <LogoLink to="/">
      <img src={logo} alt="logo" />
    </LogoLink>
  );

  links = links || (
    <NavLinks>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
      <PrimaryLink to="/login" css={roundedHeaderButton && tw`rounded-full`}>Login</PrimaryLink>
    </NavLinks>
  );

  return (
    <Header className={className}>
      {logoLink}
      <DesktopNavLinks>{links}</DesktopNavLinks>
      
      <NavToggle onClick={toggleMobileNav}>
       <MenuIcon tw="w-6 h-6 text-white border-none" /> 
      </NavToggle>
      
      {isMobileNavVisible && (
        <Row className="flex justify-center items-center pt-8">
                  

          <MobileNavLinksContainer>
          <CloseButton onClick={toggleMobileNav}>
              <CloseIcon tw="w-3 h-3 text-primary-500" />
            </CloseButton>
            <a href="/home" tw="mb-4 ">Home</a>  {/* mb-4 adds margin bottom */}
            <a href="/Contact" tw="mb-4 ml-2">Contact</a>
            <a href="/login" css={roundedHeaderButton && tw`rounded-full`}>Login</a>
            
          </MobileNavLinksContainer>
        </Row>
      )}
    </Header>
  );
};

export default SimpleHeader;
