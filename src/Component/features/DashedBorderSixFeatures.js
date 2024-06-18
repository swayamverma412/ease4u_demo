import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FaTruck, FaGift, FaFileSignature, FaCalendarAlt, FaUsers } from 'react-icons/fa'; // Importing icons from react-icons

import { SectionHeading, Subheading } from "../misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg mt-4`}
  .iconContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-6 flex-shrink-0 relative`}
    svg {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

export default () => {
  const cards = [
    {
      icon: <FaTruck />,
      title: "Logistics Management",
      description: "Anything you want to move through courier, Air cargo or PTL"
    },
    {
      icon: <FaGift />,
      title: "Corporate Gifting",
      description: "Customized Gifts for delighting on every occasion"
    },
    {
      icon: <FaFileSignature />,
      title: "Stamp Paper Procurement",
      description: "Procuring Stamp Paper"
    },
    {
      icon: <FaCalendarAlt />,
      title: "Event Management",
      description: "End-to-End management of small and big events"
    },
    {
      icon: <FaUsers />,
      title: "Conferences and Trainings",
      description: "End-to-End management of meets"
    }
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="iconContainer">
                {card.icon}
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
    </Container>
  );
};
