import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SectionHeading, Subheading as SubheadingBase } from "../misc/Headings.js";
import { SectionDescription } from "../misc/Typography.js";
import { Container, ContentWithPaddingXl } from "../misc/Layouts.js";
import { FaShieldAlt, FaTools, FaClock } from 'react-icons/fa'; // Importing icons from react-icons

const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`text-center mx-auto`;
const ThreeColumnContainer = styled.div`
  ${tw`mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto`}
`;
const Column = styled.div`
  ${tw`lg:w-1/3 max-w-xs`}
`;

const Card = styled.a`
  ${tw`flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105 `}
  
  .iconContainer {
    ${tw`text-center rounded-full p-4 bg-gray-100`}
    svg {
      ${tw`w-8 h-8`}
    }
  }

  .title {
    ${tw`mt-4 font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-4 text-sm font-medium text-secondary-300`}
  }

  .link {
    ${tw`mt-auto inline-flex items-center pt-5 text-sm font-bold text-primary-300 leading-none hocus:text-primary-900 transition duration-300`}
    .icon {
      ${tw`ml-2 w-4`}
    }
  }
`;

export default ({
  cards = [
    {
      icon: <FaShieldAlt />,
      title: "Reduce Your Supplier Count",
      description: "We handle your suppliers – from searching and on-boarding to interacting and auditing. Your existing suppliers can also join our network.",
      url: ""
    },
    {
      icon: <FaTools />,
      title: "Multiple Categories on Single Platform",
      description: "We cover a wide range of product and service categories across various geographical areas on a unified platform.",
      url: ""
    },
    {
      icon: <FaClock />,
      title: "Save Time and Increase Productivity",
      description: "We manage services comprehensively so your team can save time and boost productivity effectively.",
      url: ""
    }
  ],
  linkText = "Learn More",
  heading = "How We Address These Challenges",
  subheading = "with Our Managed & Exclusive Source-to-Pay Platform",
  description = "",
  iconContainerCss = null,
  iconCss = null
}) => {
  /*
   * This component accepts a prop - `cards` which is an array of objects denoting the cards. Each object in the `cards` array can have the following keys:
   *  1) icon - the icon component shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  4) url - the URL that the card should go to on click
   */
  return (
    <Container>
      <ContentWithPaddingXl>
        {heading && <Heading>{heading}</Heading>}
        {subheading && <Subheading>{subheading}</Subheading>}
        {description && <Description>{description}</Description>}
        <ThreeColumnContainer>
          {cards.map((card, i) => (
            <Column key={i}>
              <Card href={card.url}>
                <span className="iconContainer" css={iconContainerCss}>
                  {card.icon}
                </span>
                <span className="title">{card.title}</span>
                <p className="description">{card.description}</p>
        
              </Card>
            </Column>
          ))}
        </ThreeColumnContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
