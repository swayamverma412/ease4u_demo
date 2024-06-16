import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SectionHeading, Subheading as SubheadingBase } from "../misc/Headings.js";
import { SectionDescription } from "../misc/Typography.js";
import { Container, ContentWithPaddingXl } from "../misc/Layouts.js";
import { ReactComponent as ArrowRightIcon } from "../../images/arrow-right-icon.svg";
import SupportIconImage from "../../images/support-icon.svg";
import ShieldIconImage from "../../images/shield-icon.svg";
import CustomizeIconImage from "../../images/customize-icon.svg";

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
  .imageContainer {
    ${tw`text-center rounded-full p-4 bg-gray-100`}
    img {
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
      imageSrc: ShieldIconImage,
      title: "Reduce Your Supplier Count",
      description: "We manage the suppliers on your behalf – searching, on-boarding, interacting and auditing. Even your existing suppliers can be added to our pool",
      url: ""
    },
    {
      imageSrc: SupportIconImage,
      title: "Multiple Categories on Single Platform",
      description: "We cover large number of product and service categories as well as wide  geographical area",
      url: ""
    },
    {
      imageSrc: CustomizeIconImage,
      title: "Save time and increase productivity",
      description: "We manage services end-to-end so that your team can save time and increase their productivity",
      url: ""
    }
  ],
  linkText = "Learn More",
  heading = "How we help solve them",
  subheading = "with our Managed & Exclusive Source-to-Pay Platform",
  description = "",
  imageContainerCss = null,
  imageCss = null
}) => {
  /*
   * This component accepts a prop - `cards` which is an array of objects denoting the cards. Each object in the `cards` array can have the following keys:
   *  1) imageSrc - the image shown at the top of the card
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
                <span className="imageContainer" css={imageContainerCss}>
                  <img src={card.imageSrc} alt="" css={imageCss} />
                </span>
                <span className="title">{card.title}</span>
                <p className="description">{card.description}</p>
                {linkText && (
                  <span className="link">
                    <span>{linkText}</span>
                    <ArrowRightIcon className="icon" />
                  </span>
                )}
              </Card>
            </Column>
          ))}
        </ThreeColumnContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
