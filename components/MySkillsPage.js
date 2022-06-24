import React from "react";
import Loading from "../subComponents/Loading";
import { ThemeProvider } from "styled-components";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import "../../src/index.css";

import { darkTheme } from "./Themes";
import styled from "styled-components";
import { Design, Develope } from "./AllSvgs";
import { mediaQueries } from "./Themes";

const SocialIcons = lazy(() => import("./../subComponents/SocialIcons"));
const ParticleComponent = lazy(() =>
  import("../subComponents/ParticleComponent")
);
const BigTitle = lazy(() => import("../subComponents/BigTitle"));

//separate pages that will be routed throughout the site
const PlayButton = lazy(() => import("../subComponents/PlayButton"));
const MainBox = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  ${mediaQueries(50)`

  flex-direction:column;
  padding:8rem 0;
  height:auto;

  &>*:nth-child(4){
    margin-bottom:5rem;
  }
  `};

  ${mediaQueries(30)`
           
  &>*:nth-child(4){
    margin-bottom:4rem;
  }
           
  `};
`;

const SubBox = styled.div`
  // border: 2px solid ${(props) => props.theme.text};
  border: 2px solid #a8aabc;
  //color: ${(props) => props.theme.text};
  color: #a8aabc;
  //background-color: ${(props) => props.theme.body};
  padding: 2rem;
  backdrop-filter: blur(2px);
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  ${mediaQueries(60)`
  height: 55vh;
`};

  ${mediaQueries(50)`
    width: 50vw;
    height: max-content;

`};

  //font-family: "Bai Jamjuree", monospace;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    // background-color: ${(props) => props.theme.text};
    background-color: #eee8e3;
  }
`;

const Description = styled.div`
  //color: ${(props) => props.theme.text};
  color: #a8aabc;
  font-size: calc(0.5em + 0.6vw);
  padding: 0.5rem 0;
  font-weight: 700;
  ${SubBox}:hover & {
    color: ${(props) => props.theme.body};
  }
  ${mediaQueries(50)`
  font-size: calc(0.8em + 1vw);

`};

  ${mediaQueries(30)`
            font-size:calc(0.7em + 1vw);

    

`};

  ${mediaQueries(25)`
            font-size:calc(0.5em + 1vw);

    

`};

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const Title = styled.h2`
  display: flex;
  //fill: #a8aabc;
  fill: #ff9f1c;
  justify-content: center;
  font-weight: 700;
  align-items: center;
  font-size: calc(1em +1vw);

  ${mediaQueries(60)`
          font-size:calc(0.8em + 1vw);
  `};

  ${mediaQueries(50)`
          font-size:calc(1em + 2vw);
          margin-bottom:1rem;
  `};

  ${mediaQueries(30)`
                      font-size:calc(1em + 1vw);
  `};
  ${mediaQueries(25)`
                      font-size:calc(0.8em + 1vw);
                      svg{
                        width:30px;
                        height:30px;
                      }
  `};

  ${SubBox}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;
const MySkillsPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Suspense fallback={<Loading />}>
        {" "}
        <MainBox
          key="skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          {" "}
          {/* <LogoComponent/>
        social icons   2:15:32 of video*/}
          <PlayButton />
          <SocialIcons />
          <ParticleComponent theme="dark" />
          <SubBox>
            {" "}
            <Title>
              {" "}
              <Design width={40} height={40} /> Consultant
            </Title>
            <Description>
              {" "}
              I present value through various technical solutions (websites,
              apps & more) to help people reach their business goals.
            </Description>
            <Description>
              <strong> Skills</strong>
              <ul>
                <li>ITIL 4 Certification</li>
                <li>Problem Solving</li>
                <li>Value Tiering & Extracting</li>
                <li>Identifying Core Competencies</li>
              </ul>
            </Description>
            <Description>
              <strong> Tools</strong>
              <ul>
                <li>MS PowerPoint</li>
                <li>Zoom</li>
              </ul>
            </Description>
          </SubBox>
          <SubBox>
            {" "}
            <Title>
              <Develope width={40} height={40} /> Developer
            </Title>
            <Description>
              I develop wesbites & applications across various technologies, for
              any industry.
            </Description>
            <Description>
              <strong> Skills </strong>
              <p>
                <li>Java</li>
                <li>HTML5/CSS3</li>
                <li>Javascript</li>
                <li>React/React-Native</li>
                <li>Swift</li>
              </p>
            </Description>
            <Description>
              <strong> Tools</strong>
              <p>Visual Studio Code, Github, Xcode, IntelliJ, Eclipse & more</p>
            </Description>
          </SubBox>
          <BigTitle text="SKILLS" top="60%" right="30%" />
        </MainBox>
      </Suspense>
    </ThemeProvider>
  );
};

export default MySkillsPage;
