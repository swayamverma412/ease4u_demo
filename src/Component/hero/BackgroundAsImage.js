import React from "react";
import tw from "twin.macro";
import styled from "styled-components/macro";

import SimpleHeader from "../headers/light";
import ResponsiveVideoEmbed from "../helpers/ResponsiveVideoEmbed";

const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url("https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-white opacity-10`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-primary-500 px-4 -ml-0 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-0 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

const PrimaryAction = tw.button` text-sm sm:ml-0 sm:text-base border-none sm:mt-4 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hover:bg-primary-500 hover:text-gray-100 focus:shadow-outline`;

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

export default () => (
  <Container>
    <OpacityOverlay />
    <HeroContainer>
      <SimpleHeader />
      <TwoColumn>
        <LeftColumn>
          <Heading>
            <span>Outsource all
            </span>
            <br />
            <SlantedBackground>Needs On Platform</SlantedBackground>
          </Heading>
          <Notification> Let us manage your work flawlessly and reclaim your time & Focus </Notification>

          <PrimaryAction>Get a Quote</PrimaryAction>
        </LeftColumn>
        <RightColumn>
          
        </RightColumn>
      </TwoColumn>
    </HeroContainer>
  </Container>
);
