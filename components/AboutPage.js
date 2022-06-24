//separate pages that will be routed throughout the site
import React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./Themes";
import { lazy, Suspense } from "react";
import "../../src/index.css";
import styled from "styled-components";
import img1 from "../assets/Images/rdp.png";

import PlayButton from "../subComponents/PlayButton";

import { motion } from "framer-motion";
import { keyframes } from "styled-components";
import Loading from "../subComponents/Loading";
import { mediaQueries } from "./Themes";
import { Link } from "react-router-dom";
import SocialIcons from "../subComponents/SocialIcons";

//separate pages that will be routed throughout the site
const ParticleComponent = lazy(() =>
  import("../subComponents/ParticleComponent")
);
//make own particles 2:32:42
const BigTitle3 = lazy(() => import("../subComponents/BigTitle3"));

const float = keyframes`
0% {transform :translateY(-10px)}
50% {transform : translateY(15px) translate(15px)}
100% {transform: translateY(-10px)}

`;
const Strong1 = styled.strong`
  color: #ff9f1c;
  opacity: 0.8;
  font-weight: bold;
  font-size: calc(0.75rem + 1vw);
`;
const MainBox = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  // background-color:#eee8e3 ;
  width: 100vw;
  height: 100vh;
  position: relative;
  // display: flex;
  // justify-content: space-evenly;
  // align-items: center;
  overflow: hidden;
`;
const Pwrap = styled.p`
  font-family: "Poppins", sans-serif;
`;

const Spaceman = styled(motion.div)`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;

  img {
    width: 100%;
    height: auto;
  }
`;

const Main = styled(motion.div)`
  // border: 2px solid ${(props) => props.theme.accent};
  border: 1px solid #a8aabc;
  // color: ${(props) => props.theme.text};
  color: #a8aabc;

  padding: 2rem;
  width: 50vw;
  height: 55vh;
  opacity: 0.2;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.8rem + 1vw);

  backdrop-filter: blur(4px);
  //font-weight: bold;
  position: absolute;
  left: calc(5rem + 10vw);
  top: 16rem;
  //bottom: 2.5%;
  //font-family: "Ubuntu Mono", monospace;
  font-style: italic;
  //border-radius: 0 50px 0 50px;

  &:hover {
    //background-color: #eee8e3;
    // color: ${(props) => props.theme.body};
    //border: 1px solid ${(props) => props.theme.accent};
    border: 1px solid #a8aabc;
  }

  ${mediaQueries(40)`
          width: 60vw;
          height: 50vh;
          top:50%;
          backdrop-filter: blur(4px);
          left:50%;
          transform:translate(-50%,-50%);
           font-size: calc(0.6rem + .75vw);


  `};
  ${mediaQueries(30)`
          width: 50vw;
          height: auto;
          backdrop-filter: none;
          margin-top:2rem;

  `};

  ${mediaQueries(20)`
          padding: 1rem;
          font-size: calc(0.5rem + 1vw);
  `};
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Suspense fallback={<Loading />}>
        <MainBox
          key="skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          {/* <LogoComponent/>
        social icons   2:15:32 of video*/}
          <PlayButton />
          <SocialIcons />
          <ParticleComponent theme="dark" />
          <Spaceman
            initial={{ right: "-100%", top: "80%" }}
            animate={{
              right: "5%",
              top: "40%",
              transition: { duration: 2, delay: 0.5 },
            }}
          >
            <img src={img1} alt="spaceman" />
          </Spaceman>
          <Link
            target={"_blank"}
            to={{
              pathname:
                "https://docs.google.com/document/d/1Mm-9nTetEXkiApGC3h7VduTdaslPWYXCK8WKB5MMNgs/edit?usp=sharing",
            }}
          >
            <Main
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
              // whileHover={{ scale: 1.1 }}
              // whileTap={{ scale: 0.9 }}
            >
              <Pwrap>
                {" "}
                <Strong1>I'</Strong1>m <Strong1>a</Strong1>{" "}
                <Strong1>Techn</Strong1>ologist <Strong1>loc</Strong1>ated{" "}
                <Strong1>i</Strong1>n <Strong1>th</Strong1>e{" "}
                <Strong1>Sa</Strong1>n <Strong1>Fran</Strong1>
                cisco <Strong1>Ba</Strong1>y <Strong1>Ar</Strong1>ea
                <Strong1>.</Strong1> <Strong1>M</Strong1>y
                <Strong1> pass</Strong1>ion <Strong1>i</Strong1>s{" "}
                <Strong1>help</Strong1>ing <Strong1>peo</Strong1>ple{" "}
                <Strong1>elev</Strong1>ate <Strong1>the</Strong1>ir{" "}
                <Strong1>bus</Strong1>iness <Strong1>wi</Strong1>th{" "}
                <Strong1>effe</Strong1>ctive
                <Strong1> tech</Strong1>nical <Strong1>solu</Strong1>tions
                <Strong1>.</Strong1>
                <br /> <br />
                <Strong1></Strong1>
                <Strong1>I'</Strong1>m <Strong1>exci</Strong1>ted{" "}
                <Strong1>t</Strong1>o <Strong1>cont</Strong1>inue{" "}
                <Strong1>m</Strong1>y <Strong1>learn</Strong1>ing{" "}
                <Strong1>jour</Strong1>ney<Strong1>,</Strong1>{" "}
                <Strong1>work</Strong1>ing <Strong1>wi</Strong1>th{" "}
                <Strong1>vari</Strong1>ous <Strong1>techn</Strong1>ologies{" "}
                <Strong1>acr</Strong1>oss <Strong1>mul</Strong1>tiple
                <Strong1> plat</Strong1>forms <Strong1>an</Strong1>d{" "}
                <Strong1>ultim</Strong1>ately <Strong1>prov</Strong1>iding{" "}
                <Strong1>val</Strong1>ue <Strong1>thr</Strong1>ough{" "}
                <Strong1>m</Strong1>y <Strong1>solu</Strong1>tions
                <Strong1>.</Strong1>
                <br /> <br />
                <Strong1>Cli</Strong1>ck <Strong1>any</Strong1>where{" "}
                <Strong1>with</Strong1>in <Strong1>th</Strong1>is{" "}
                <Strong1>bo</Strong1>x <Strong1>t</Strong1>o{" "}
                <Strong1>check</Strong1>out <Strong1>m</Strong1>y
                <Strong1> res</Strong1>ume <Strong1>!</Strong1>
              </Pwrap>
            </Main>
          </Link>
          <BigTitle3 text="RESUME" top="1.5%" left="3%" />
        </MainBox>
      </Suspense>
    </ThemeProvider>
  );
};

export default AboutPage;
