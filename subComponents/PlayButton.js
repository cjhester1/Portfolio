import React from "react";
import styled from "styled-components";

import { Homie } from "../components/AllSvgs";
import { mediaQueries } from "../components/Themes.js";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min"; //Navlink is used to add style attributes to the active routes..special version of link allowing styling attributes to rendered element when it matches url

const Play = styled(motion.button)`
  position: fixed;
  z-index: 8;
  bottom: 2.5rem;
  position: fixed;
  display: block;
  left: 2rem;
  background-color: transparent;
  background: none;
  border: transparent;
  //transform: translate(-50%, 0);
  // border-radius: 100%;
  //background-color: transparent;
  // box-shadow: 0 0 24px #91bd09;
  // color: ${(props) => props.theme.text};
  // height: calc(40px + 5vmin);
  // width: calc(40px + 5vmin);
  padding: 0px;

  ${mediaQueries(50)`

  left: 1rem;
  bottom: 2.5rem;

`};
`;

const PlayButton = () => {
  return (
    <Play whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <NavLink to="/">
        <Homie
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          fill="#a8aabc"
        />
      </NavLink>
    </Play>
  );
};

export default PlayButton;
