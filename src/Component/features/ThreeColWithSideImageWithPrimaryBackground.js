import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SectionHeading, Subheading as SubheadingBase } from "../misc/Headings.js";
import { SectionDescription } from "../misc/Typography.js";
import { FaShieldAlt, FaTools, FaAdjust, FaClock } from 'react-icons/fa'; // Importing icons from react-icons/fa

const Container = tw.div`relative bg-primary-900 -mx-8 px-8 text-gray-100`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4 text-gray-100`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center text-gray-300`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/4 max-w-xs`}
`;

const Card = styled.div`
  ${tw`flex flex-col items-center text-center sm:items-center text-center sm:text-center h-full mx-4 px-2 py-8`}
  .iconContainer {
    ${tw`bg-gray-100 text-center rounded-full p-5 flex-shrink-0`}
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
  heading = "Sustainable Efficiency and Maximizing Value",
  subheading = "To Lead Industry",
  description = ""
}) => {
  /*
   * This component accepts a prop - `cards` which is an array of objects denoting the cards. Each object in the `cards` array can have the following keys:
   *  1) icon - the icon component shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      icon: <FaShieldAlt />,
      title: "Extensive Supplier Network",
      description: "Non-core spend represents approximately 20% of total value, yet accounts for about 75% of the total number of suppliers, posing challenges in supplier management"
    },
    {
      icon: <FaTools />,
      title: "Low direct, high indirect costs",
      description: "Direct costs are deceptively small. However, the total cost of vendor management and interactions is significantly high"
    },
    {
      icon: <FaAdjust />,
      title: "Limited visibility and control",
      description: "Data collection and analysis are complex due to multiple categories, frequent purchases, and involvement of multiple buyers"
    },
    {
      icon: <FaClock />,
      title: "Regarded as less strategic",
      description: "Last-minute purchases frequently circumvent the process and may skip competitive bidding"
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
