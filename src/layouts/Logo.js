import styled from 'styled-components'; // Ensure you have imported styled-components if not already imported
import { Link } from 'react-router-dom';
import logo from '../images/logo6.svg';

// Define the styled component
const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: 800;
  font-size: 2rem;
  color: black;
  img {
    width: 100px; /* Adjust the width as needed */
    height: auto; /* Maintain aspect ratio */
    margin-right: 0.75rem; /* Adjust the margin as needed */
  }
`;

const Logo = () => {
  return (
    <LogoLink to="/">
      <img src={logo} alt="Logo" /> {/* Replace with your actual image path */}
    </LogoLink>
  );
};

export default Logo;
