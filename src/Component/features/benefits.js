import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SectionHeading, Subheading as SubheadingBase } from "../misc/Headings.js";
import { SectionDescription } from "../misc/Typography.js";
import { FaShieldAlt, FaTools, FaAdjust, FaChartLine, FaBalanceScale } from 'react-icons/fa'; // Importing icons from react-icons/fa

const Container = tw.div`relative bg-primary-900 -mx-8 px-8 text-gray-100`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;

const Subheading = tw(SubheadingBase)`mb-4 text-gray-100`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center text-gray-300`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-xs`}
`;

const Card = styled.div`
  ${tw`flex flex-col text-center sm:items-center sm:text-center h-full mx-4 px-2 py-8`}
  .iconContainer {
    ${tw`bg-gray-100 rounded-full p-5 flex-shrink-0`}
    svg {
      ${tw`w-6 h-6 text-gray-800`} // Adjust icon size and color as needed
    }
  }

  .textContainer {
    ${tw`mt-6`}
  }

  .title {
    ${tw`tracking-wider font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-2 font-normal text-gray-400 leading-snug`}
  }
`;

export default ({
  cards = null,
  heading = "Benefits for You",
  subheading = "",
  description = ""
}) => {
  const defaultCards = [
    {
      icon: <FaShieldAlt />,
      title: "Cut direct costs by 10-15% through competition",
      description: "Access a wide range of ideal suppliers and ensure multiple quotes every time"
    },
    {
      icon: <FaTools />,
      title: "Cut overhead and hidden costs by 70%",
      description: "Eliminate vendor management costs and reduce spend per RFQ/PO."
    },
    {
      icon: <FaAdjust />,
      title: "Deliver excellence in service",
      description: "Ensure on-time delivery and quality service through our managed services"
    },
    {
      icon: <FaChartLine />,
      title: "Optimize purchasing with data",
      description: "Utilize spend analytics and reports to improve decision-making"
    },
    {
      icon: <FaBalanceScale />,
      title: "Ensure process and tax compliance",
      description: "Receive professional, ethical, and transparent service"
    }
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="iconContainer">
                {card.icon}
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
    </Container>
  );
};
