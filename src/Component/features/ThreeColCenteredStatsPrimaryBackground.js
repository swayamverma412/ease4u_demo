import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "../misc/Headings.js";
import { Container as ContainerBase, ContentWithPaddingXl } from "../misc/Layouts";
import { SectionDescription } from "../misc/Typography";

// Adjust Container styles to remove top margin
const Container = tw(ContainerBase)`mt-0 lg:my-0 bg-primary-500 text-gray-100 -mx-8 px-8 `;

const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)`sm:text-3xl md:text-4xl lg:text-5xl`;
const Subheading = tw(SubheadingBase)`text-gray-100 text-center`;
const Description = tw(SectionDescription)`text-gray-400 text-center mx-auto max-w-screen-md`;

export default ({
  subheading = "We work like Extended Arm of your procurement team managing Source-to-Pay",
  heading = "About Us",
  description = "We offer a streamlined solution for companies to source non-core services and products. We manage suppliers from on-boarding to service delivery, allowing companies access to competitive pricing without the hassle and cost of managing multiple vendors.",
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          <Heading>{heading}</Heading>
          {subheading && <Subheading>{subheading}</Subheading>}
          {description && <Description>{description}</Description>}
        </HeadingContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
