import React from "react";
import PropTypes from "prop-types";
import tw from "twin.macro";
import styled from "styled-components/macro";

const ResponsiveEmbedContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  ${tw`rounded bg-black shadow-xl`}
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  ${tw`rounded`}
`;

const ResponsiveVideoEmbed = ({ url }) => (
  <ResponsiveEmbedContainer>
    <Iframe
      src={url}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded Video"
    ></Iframe>
  </ResponsiveEmbedContainer>
);

ResponsiveVideoEmbed.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ResponsiveVideoEmbed;
