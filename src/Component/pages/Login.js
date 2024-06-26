import React from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "../misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "../../images/login-illustration.svg";
import logo from "../../images/logo6.svg";
import googleIconImageSrc from "../../images/google-icon.png";
import twitterIconImageSrc from "../../images/twitter-icon.png";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";
import Header from "../headers/dark";
import { Button, Nav, NavItem } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

const Container = styled(ContainerBase)`
  ${tw`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8 mt-1`}
`;
const Content = tw.div`
  max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1
`;
const MainContainer = tw.div`
  lg:w-1/2 xl:w-5/12 p-6 sm:p-12
`;
const LogoLink = tw.a`
  flex justify-center items-center
`;
const LogoImage = tw.img`
  h-12
`;

const MainContent = tw.div`
  mt-12 flex flex-col items-center
`;
const Heading = tw.h1`
  text-2xl xl:text-3xl font-extrabold
`;
const FormContainer = tw.div`
  w-full flex-1 mt-8
`;

const SocialButtonsContainer = tw.div`
  flex flex-col items-center
`;
const SocialButton = styled.a`
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hover:bg-gray-200 transition-all duration-300 ease-in-out flex items-center justify-center focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`;

const DividerTextContainer = tw.div`
  my-8 border-b text-center relative 
`;
const DividerText = tw.div`
  leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent
`;

const Form = tw.form`mx-auto max-w-xs pt-8`;
const Input = tw.input`w-full px-8 py-4 pt-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:text-primary-700 hover:bg-white  duration-300 ease-in-out flex items-center justify-center hover:outline focus:bg-white border-none hover:border-2 hover:border-primary-700`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
  &:active .text {
    ${tw`bg-white`}
  }
`;

const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-blue-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${props => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`;

export default ({
  logoLinkUrl = "/starter",
  illustrationImageSrc = illustration,
  headingText = "Sign In To Deligent",
  socialButtons = [
    {
      iconImageSrc: googleIconImageSrc,
      text: "Sign In With Google",
      url: "https://google.com",
    },
    {
      iconImageSrc: twitterIconImageSrc,
      text: "Sign In With Twitter",
      url: "https://twitter.com",
    },
  ],
  submitButtonText = "Sign In",
  SubmitButtonIcon = LoginIcon,
  forgotPasswordUrl = "#",
  signupUrl = "/starter",
}) => {
  const navigate = useNavigate();

  const handleSigninClick = (e) => {
    e.preventDefault();
    navigate("/starter");
  };

  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <Content>
          <MainContainer>
            <LogoLink href={logoLinkUrl}>
              <LogoImage src={logo} />
            </LogoLink>
            <MainContent>
              <Heading>{headingText}</Heading>
              <FormContainer>
                <SocialButtonsContainer>
                  {socialButtons.map((socialButton, index) => (
                    <SocialButton key={index} href={socialButton.url}>
                      <span className="iconContainer">
                        <img src={socialButton.iconImageSrc} className="icon" alt="" />
                      </span>
                      <span className="text">{socialButton.text}</span>
                    </SocialButton>
                  ))}
                </SocialButtonsContainer>
                <DividerTextContainer>
                  <DividerText>Or Sign in with your e-mail</DividerText>
                </DividerTextContainer>
                <Form>
                  <Input required type="email" placeholder="Email" />
                  <Input  required type="password" placeholder="Password" />
                  <SubmitButton type="submit" onClick={handleSigninClick}>
                    <SubmitButtonIcon className="icon" />
                    <span className="text">{submitButtonText}</span>
                  </SubmitButton>
                </Form>
                <p tw="mt-6 text-xs text-gray-600 text-center">
                  <a href="/starter" tw="border-b border-gray-500 border-dotted">
                    Forgot Password?
                  </a>
                </p>
                <p tw="mt-8 text-sm text-gray-600 text-center">
                  Don't have an account?{" "}
                  <Link to="/starter">
                    Sign Up
                  </Link>
                </p>
              </FormContainer>
            </MainContent>
          </MainContainer>
          <IllustrationContainer>
            <IllustrationImage imageSrc={illustrationImageSrc} />
          </IllustrationContainer>
        </Content>
      </Container>
    </AnimationRevealPage>
  );
};
