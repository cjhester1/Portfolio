import React from "react";
import styled from "styled-components";
import "../../src/index.css";
import { mediaQueries } from "../components/Themes.js";

const Text = styled.h1`
  position: absolute;
  top: ${(props) => props.top};
  top: ${(props) => props.top};
  top: ${(props) => props.top};
  //color: ${(props) => `rgba(${props.theme.textRgba}, 0.7)`};
  color: #ff9f1c;
  font-size: calc(5rem + 5vw);
  font-family: "Poppins", sans-serif;

  z-index: 0;

  ${mediaQueries(40)`
          
  font-size: calc(5rem + 5vw);

  `};
`;

const BigTitle3 = (props) => {
  return (
    <Text top={props.top} left={props.left} right={props.right}>
      {props.text}
    </Text>
  );
};

export default BigTitle3;
