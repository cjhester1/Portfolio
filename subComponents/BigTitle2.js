import React from "react";
import styled from "styled-components";
import "../../src/index.css";
import { mediaQueries } from "../components/Themes.js";
const Text = styled.h1`
  position: fixed;
  top: ${(props) => props.top};
  top: ${(props) => props.top};
  top: ${(props) => props.top};

  color: #a8aabc;

  font-size: calc(5rem + 5vw);
  font-family: "Poppins", sans-serif;

  z-index: 0;
  ${mediaQueries(30)`
          
  font-size: calc(3.5rem + 4.25vw);

  `};
`;

const BigTitle2 = (props) => {
  return (
    <Text top={props.top} left={props.left} right={props.right}>
      {props.text}
    </Text>
  );
};

export default BigTitle2;
