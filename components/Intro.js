import React from "react";
import styled from "styled-components";
import "../../src/index.css";
import Me from "../assets/Images/final.png";
import { motion } from "framer-motion";
import { mediaQueries } from "./Themes";

const Box = styled(motion.div)`
  left: 50%;
  // top: 32.5%;
  top: 23.5%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 50vw;
  height: 30vh;
  display: flex;

  background: linear-gradient(to right, #eee8e3 50%, #eee8e3 50%) bottom,
    linear-gradient(to right, #eee8e3 50%, #eee8e3 50%)
      // ${(props) => props.theme.body}
    top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 1px solid #eee8e3;
  border-right: 1px solid #eee8e3;

  z-index: 1;
`;
const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 60%;
    height: auto;

    ${mediaQueries(30)`
   width: 100%
    
  `};

    ${mediaQueries(40)`
  width: 100%
 `};

    ${mediaQueries(50)`
 width: 100%
`};

    //     ${mediaQueries(70)`
// width: 100%
// `};
  }
`;

const Text = styled.div`
  font-size: calc(1rem + 1.2vw);
  color: ${(props) => props.theme.text};
  //padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  &>*: last-child {
    color: ${(props) => `rgba(${props.theme.textRgba},0.5)`};
    font-size: calc(0.5rem + 1.2vw);
    font-weight: 300px;
  }
`;
const IntroHeader = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 10px;
  color: #eee8e3;
  font-family: "Poppins", sans-serif;
`;

const IntroHeader2 = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 10px;
`;

const IntroHeader3 = styled.h5`
  margin-top: 10px;
  margin-bottom: 0;
  color: #eee8e3;
  font-family: "Poppins", sans-serif;

  margin-left: 10px;
`;

const ImageMe = styled.img`
  height: calc(5px + 7vmin);

  width: calc(17px + 11vmin);
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "30vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Text>
            {" "}
            <IntroHeader>It's Quiet. </IntroHeader>
            <IntroHeader2></IntroHeader2>
            <IntroHeader3>
              Click on the top-left icon, enjoy some music!
            </IntroHeader3>
          </Text>
        </motion.div>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <ImageMe className="pic" src={Me} alt="Profile Image" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
