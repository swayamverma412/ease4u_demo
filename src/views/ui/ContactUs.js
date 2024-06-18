import React from "react";
import AnimationRevealPage from "../../Component/helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import ContactUsForm from "../../Component/forms/TwoColContactUsWithIllustration.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <AnimationRevealPage>
      <ContactUsForm />
    </AnimationRevealPage>
  );
};
