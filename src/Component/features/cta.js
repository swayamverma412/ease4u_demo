import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "../misc/Headings.js";
import { Container as ContainerBase, ContentWithPaddingXl } from "../misc/Layouts.js";
import { SectionDescription } from "../misc/Typography.js";

// Adjust Container styles to remove top margin
const Container = tw(ContainerBase)`mt-0 lg:my-0 bg-white text-gray-100 -mx-8 px-8`;

const HeadingContainer = tw.div`text-center`; // Center align the content within HeadingContainer
const Heading = tw(SectionHeading)`sm:text-3xl md:text-4xl lg:text-5xl text-primary-500`;
const Subheading = tw(SubheadingBase)`text-gray-100 text-center text-gray-500`;
const PrimaryAction = tw.button`
  text-sm sm:text-base border-none mt-4 px-8 py-4 
  bg-primary-500 text-white font-bold rounded shadow transition duration-300 
  hover:bg-white hover:text-primary-500 focus:shadow-outline
  mx-auto block
  hover:outline focus:bg-white border-none hover:border-2 hover:border-primary-700   // Center align horizontally using mx-auto and block display
`;

export default ({
  subheading = "Just quality, convenience, and savings",
  heading = "No hassle, no waste, no stress",
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          <Heading>{heading}</Heading>
          {subheading && <Subheading>{subheading}</Subheading>}
          <PrimaryAction>Contact us</PrimaryAction>
        </HeadingContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
