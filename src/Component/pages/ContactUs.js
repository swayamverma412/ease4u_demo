import React from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "../headers/dark";
import Footer from "../footers/FiveColumnWithInputForm.js";
import ContactUsForm from "../forms/TwoColContactUsWithIllustrationFullForm.js";


export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <ContactUsForm />
      <Footer />
    </AnimationRevealPage>
  );
};
