import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

import LogoImg from "../../images/logo6.svg";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";

const Container = tw.div`relative bg-gray-200 text-gray-700 -mb-8 -mx-8 px-8 py-5 lg:py-5`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImage = tw.img`
  w-24 h-auto
  mr-3
`;
const LogoText = tw.h5`ml-2 text-xl font-black tracking-wider text-gray-800`;

const CopyrightNotice = tw.p`text-center text-sm sm:text-base mt-4 md:mt-0 font-medium text-gray-500`;

const SocialLinksContainer = tw.div`flex mt-4 md:mt-0`;
const SocialLink = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-gray-900 text-gray-100 hover:bg-gray-700 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

export default () => {
  return (
    <Container>
      <Content>
        <ThreeColRow>
          <LogoContainer>
            <LogoImage src={LogoImg} alt="Deligent Logo" />
          </LogoContainer>
          <CopyrightNotice>&copy; 2024 Deligent. All Rights Reserved.</CopyrightNotice>
          <SocialLinksContainer>
            <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
        </ThreeColRow>
      </Content>
    </Container>
  );
};
