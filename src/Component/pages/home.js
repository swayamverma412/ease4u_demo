import React from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Hero from '../hero/BackgroundAsImage.js'
import About from '../features/ThreeColCenteredStatsPrimaryBackground'
import Services from "../features/DashedBorderSixFeatures";
import CTA from  "../features/cta.js"
import Solve from "../features/ThreeColSimple"
import Challenge from "../features/ThreeColWithSideImageWithPrimaryBackground"
import Benefit from "../features/benefits.js"
import Footer from "../footers/FiveColumnWithInputForm"
import Works from "../features/VerticalWithAlternateImageAndText"


const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Hero/>
      <About/>
      <Services/>
      <Challenge/>
      <Solve/>
      <Benefit/>
      <CTA/>
      <Footer/>
      
    </AnimationRevealPage>
  );
};
