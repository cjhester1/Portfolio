import React from "react";
import "../../src/index.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import img from "../assets/Images/concept4B.jpg";

import SlideMe from "../subComponents/StyledSlider";
import Loading from "../subComponents/Loading";
import { mediaQueries } from "./Themes";
import { FastFwd, Loop, Rewind, Shuffle } from "./AllSvgs";
import Video from "../assets/videos/animated_3.mp4";
import { FiHeart } from "react-icons/fi";
import { keyframes } from "styled-components";
import { useState, lazy, Suspense } from "react";
import Intro from "./Intro";

const SocialIcons = lazy(() => import("./../subComponents/SocialIcons"));

//separate pages that will be routed throughout the site
const heartbeart = keyframes`

0% {
  transform: scale(1);
}
50% {
  transform: scale(1.05);
}
100% {
  transform: scale(1);
}
`;

const MainContainer = styled(motion.div)`
  //styled div is ENTIRE container for main page
  background: ${(props) => props.theme.body};
  //background: white;
  //background-image: url(${img});
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }

  h2 {
    ${mediaQueries(40)`
      font-size:1.2em;

  `};

    ${mediaQueries(30)`
      font-size:1em;

  `};
  }
`;

const Center = styled(motion.button)`
  position: fixed;
  //margin-left: 10vw;
  top: ${(props) => (props.click ? "95%" : "95%")};
  left: ${(props) => (props.click ? "50%" : "5.5rem")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;

  //color: ${(props) => props.theme.text};
  background-color: transparent;
  opacity: 0.9;

  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  // & > :first-child {
  //   animation: ${heartbeart} infinite 1.5s linear;
  // }

  &>: last-child {
    // display: ${(props) => (props.click ? "none" : "inline-block")};
    //  padding-top: 1rem;
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: ${(props) => (props.click ? "100%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 0;
  //background-image: linear-gradient(to top, #ff9f1c, #011627 80%);
  background: #a8aabc;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

export const VideoBg = styled(motion.video)`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: none;
  z-index: 0;
`;

const Play1 = styled.button`
  border: none;
  background-color: transparent;

  align-self: center;

  ${mediaQueries(50)`
        
        
  // margin-left: calc(2px + 5vmin);
  // margin-right: calc(2px + 5vmin);

`};

  ${mediaQueries(40)`
// margin-left: calc(2px + 5vmin);
// margin-right: calc(2px + 5vmin);


`};

  ${mediaQueries(25)`
// margin-left: calc(2px + 3vmin);
// margin-right: calc(2px + 3vmin);

`};
  &:hover {
    outline: none;
  }

  &:focus {
    outline: none;
  }
  .picc:hover {
    width: 100px;
  }
`;

const Heart2 = styled(NavLink)`
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.text};
  height: calc(20px + 5vmin);
  width: calc(20px + 5vmin);
  align-self: flex-end;
  margin-top: 1vh;
  margin-bottom: 1vh;

  & > :first-child {
    color: white;
    opacity: 0.4;
    cursor: pointer;
    // width: 10vw;
    // height: 100vh;

    .Heart {
      // color: white;
      opacity: 0.4;
      animation: heartbeat 1s infinite;
      cursor: pointer;
      width: 30px;
      height: 30px;
      background: none;

      border-radius: 50%;
    }
    .Heart:hover {
      animation: heartbeat 1s infinite;
      fill: #01bf71;
      opacity: 0.7;
      transition: opacity 500ms;
      color: #01bf71;
    }
  }
`;
const Songtitle = styled.h1`
  font-size: calc(20px + 3vmin);
  margin-bottom: 1vh;
  font-family: "Poppins", sans-serif;
  color: white;
  opacity: 0.7;
`;
const Artistname = styled.h1`
  font-size: calc(10px + 2vmin);
  margin-top: 0;
  //margin-bottom: 0;
  color: white;
  opacity: 0.7;
  font-family: "Poppins", sans-serif;

  & > :first-child {
    width: fit-content;
  }
`;
const AirpodAccent = styled(motion.h5)`
  color: #00ff95;
  opacity: 0.8;
  font-size: calc(3px + 2vmin);
  display: contents;
  font-family: "Poppins", sans-serif;
`;
const Airpods = styled(motion.div)`
  position: absolute;
  //top: 92%;
  // left: 1rem;
  display: contents;
`;

const BottomBar = styled.div`
  bottom: 15%;

  position: absolute;
  display: flex;
  left: 50%;
  justify-content: space-evenly;
  transform: translate(-50%, 0);
  width: 100%;
  // transform: translate(-50%, 0);

  ${mediaQueries(50)`
        
        
  bottom: 17.5%;

`};

  ${mediaQueries(40)`
        
        
  bottom: 17%;

`};

  ${mediaQueries(30)`
  bottom: 25.5%;


`};

  ${mediaQueries(25)`
  bottom: 22.5%;
`};
`;
const SliderDiv = styled.div`
  position: absolute;

  display: flex;
  bottom: 24%;

  width: 100%;
  ${mediaQueries(50)`
        
        
  bottom: 22.5%;

`};
  ${mediaQueries(40)`
        
        
  bottom: 24%;

`};

  ${mediaQueries(30)`
  bottom: 27%;


`};

  ${mediaQueries(25)`
  bottom: 30%;
`};

  // margin-top: 2vh;
  margin-bottom: 2.75vh;
`;
const INFO = styled.div`
  position: absolute;
  bottom: 35%;
  margin-left: 15vw;
  margin-bottom: 1.5vh;
  width: 70%;
  display: flex;
  flex-direction: column;

  ${mediaQueries(50)`
  bottom: 32.5%;

`};
  ${mediaQueries(40)`
        
        
  bottom: 35.5%;

`};

  ${mediaQueries(30)`
  bottom: 42%;

    

`};

  ${mediaQueries(25)`
  bottom: 42%;

    

`};
`;

const Center2 = styled(NavLink)`
  position: absolute;

  bottom: 2rem;

  font-weight: 700;

  right: 1rem;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  color: #eee8e3;
  background-color: transparent;
  opacity: 0.9;

  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${mediaQueries(30)`
  bottom: 1.5rem;



`};

  ${mediaQueries(25)`
  bottom: 1.5rem;



`};
`;
const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
`;
const BLOG = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;
const WORK = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
`;
const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;
const Main = () => {
  const [click, setClick] = useState(false);
  const [path, setpath] = useState("");
  const handleClick = () => setClick(!click);

  // const moveY = {
  //   y: "-100%",
  // };

  // const moveX = {
  //   x: `${path === "work" ? "100%" : "-100%"}`,
  // };

  // const mq = window.matchMedia("(max-width: 50em)").matches;
  return (
    <Suspense fallback={<Loading />}>
      <MainContainer>
        <VideoBg playsInline autoPlay loop muted src={Video} type="video/mp4" />
        <DarkDiv click={click} />
        {click ? <Intro click={click} /> : null}
        <SocialIcons />
        <Center click={click}>
          <motion.div
            initial={{
              opacity: 0,
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
          >
            <Airpods onClick={() => handleClick()}>
              <AirpodAccent
                initial={{
                  opacity: 0,
                  x: -200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1.5 },
                }}
              >
                § CJ'S PORTFOLIO
              </AirpodAccent>
            </Airpods>
          </motion.div>
        </Center>
        <motion.div
          initial={{
            opacity: 0,

            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          animate={{
            opacity: 1,

            transition: { type: "spring", duration: 1.5, delay: 1.5 },
          }}
        >
          <Center2 to="/warning" click={click}>
            {" "}
            Notice!
          </Center2>
        </motion.div>
        <INFO>
          <motion.div
            initial={{
              opacity: 0,
              x: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
          >
            <Songtitle>Portfolio</Songtitle>
          </motion.div>
          <Heart2
            target="_blank"
            to={{ pathname: "mailto:cjhester23@gmail.com" }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{
                opacity: 0,
                x: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
            >
              <FiHeart className="Heart" />
            </motion.div>
          </Heart2>
          <Artistname>
            {" "}
            <motion.div
              // whileHover={{ scale: 1.1 }}
              // whileTap={{ scale: 0.9 }}
              initial={{
                opacity: 0,
                x: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
            >
              CJ Hester
            </motion.div>
          </Artistname>
        </INFO>

        {/* <motion.div
          initial={{
            opacity: 0,
            y: 200,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
        > */}
        <motion.div
          initial={{
            opacity: 0,
            //y: -200,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          animate={{
            opacity: 1,
            // y: 0,
            transition: { type: "spring", duration: 1.5, delay: 1.5 },
          }}
        >
          <SliderDiv>
            <SlideMe />
          </SliderDiv>
        </motion.div>

        {/* </motion.div> */}

        <BottomBar>
          <Play1>
            <ABOUT to="/about" click={click}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{
                  opacity: 0,
                  y: 200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
              >
                {/* <Shuffle /> */}
                <Artistname>About</Artistname>
              </motion.div>
            </ABOUT>
          </Play1>
          <Play1>
            <WORK to="/work" click={click}>
              {" "}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{
                  opacity: 0,
                  y: 200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
              >
                {/* <Rewind /> */}
                <Artistname>Work</Artistname>
              </motion.div>
            </WORK>
          </Play1>
          <Play1>
            <BLOG
              click={+click}
              onClick={() => setpath("partners")}
              to="/partners"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, outline: "none" }}
                initial={{
                  opacity: 0,
                  y: 200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
              >
                <Artistname>Partners</Artistname>
              </motion.div>
            </BLOG>
          </Play1>
          <Play1>
            <SKILLS to="/skills">
              <motion.div
                click={+click}
                onClick={() => setpath("skills")}
                to="/skills"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{
                  opacity: 0,
                  y: 200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
              >
                <Artistname>Skills</Artistname>
              </motion.div>
            </SKILLS>
          </Play1>
        </BottomBar>
      </MainContainer>
    </Suspense>
  );
};

export default Main;
