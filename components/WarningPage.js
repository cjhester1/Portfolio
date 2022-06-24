import React from "react";
import styled from "styled-components";
import { lazy } from "react";
import "../../src/index.css";
import { mediaQueries } from "./Themes";
const PlayButton = lazy(() => import("../subComponents/PlayButton"));

const Box1 = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.body};
  //background: white;
  z-index: 0;
`;

const Box = styled.div`
  display: column;
  bottom: 40%;
  position: absolute;
  margin-left: 20px;

  margin-right: 20px;
  ${mediaQueries(30)`
  bottom: 20%;



`};
  ${mediaQueries(25)`
bottom: 20%;



`};
`;

const IntroHeader = styled.h2`
  color: #eee8e3;
  font-family: "Poppins", sans-serif;
  z-index: 1;

  //display: flex;
`;

const WarningPage = () => {
  return (
    <Box1>
      <Box>
        <IntroHeader>
          Iphone Users: The React Library hasn't patched a bug in which videos
          affect the rendering of a site while an iPhone is in low power mode.
        </IntroHeader>
        <IntroHeader>
          Please avoid placing your iPhone in low power mode while nagivating
          the website. I apologize for the inconvenience.
        </IntroHeader>
        <PlayButton />
      </Box>
    </Box1>
  );
};

export default WarningPage;
