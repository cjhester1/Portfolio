import image1 from "../assets/Images/ig2.png";
import image2 from "../assets/Images/linkedin2.png";
import image3 from "../assets/Images/Discord-1.png";
import image4 from "../assets/Images/Twitch.png";

import styled from "styled-components";
import { motion } from "framer-motion";

import { NavLink } from "react-router-dom";
import { mediaQueries } from "../components/Themes.js";

const Icons = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  top: 1.5rem;
  right: 1rem;

  z-index: 4;

  & > *:not(:last-child) {
    margin: 0.5rem 0;

    ${mediaQueries(20)`
      margin: 0.3rem 0;


  `};
  }

  ${mediaQueries(40)`
  right: 1rem;

      svg{
        width:20px;
        height:20px
      }

  `};
`;
const Image1 = styled(motion.img)`
  // height: 40px;
  // width: 40px;
  height: calc(5px + 6vmin);
  width: auto;
`;

const SocialIcons = (props) => {
  // const mq = window.matchMedia("(max-width: 40em)").matches;

  return (
    <Icons>
      <NavLink
        style={{ color: "inherit" }}
        target="_blank"
        to={{ pathname: "https://www.instagram.com/mehoyminuoy/" }}
      >
        <Image1
          src={image1}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          initial={{
            opacity: 0,
            x: 200,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { type: "spring", duration: 1.5, delay: 2 },
          }}
          //  transition={{ type: "spring", duration: 1, delay: 2 }}
        />
      </NavLink>

      <NavLink
        style={{ color: "inherit" }}
        target="_blank"
        to={{
          pathname: "https://www.linkedin.com/in/christopher-hester-943748160/",
        }}
      >
        <Image1
          src={image2}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          initial={{
            opacity: 0,
            x: 200,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { type: "spring", duration: 1.5, delay: 2.1 },
          }}
          //  transition={{ type: "spring", duration: 1, delay: 2 }}
        />
      </NavLink>

      <NavLink
        style={{ color: "inherit" }}
        target="_blank"
        to={{ pathname: "https://discord.com/" }}
      >
        <Image1
          src={image3}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          initial={{
            opacity: 0,
            x: 200,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { type: "spring", duration: 1.5, delay: 2.2 },
          }}
          //  transition={{ type: "spring", duration: 1, delay: 2 }}
        />
      </NavLink>

      {/* <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 5 }}
      > */}
      <NavLink
        style={{ color: "inherit" }}
        target="_blank"
        to={{
          pathname: "https://www.twitch.tv/mehoyminuoy",
        }}
      >
        <Image1
          src={image4}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          initial={{
            opacity: 0,
            x: 200,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { type: "spring", duration: 1.5, delay: 2.3 },
          }}
          //  transition={{ type: "spring", duration: 1, delay: 2 }}
        />
      </NavLink>
      {/* </motion.div> */}
      {/* 
      <Line
        initial={{ height: 0 }}
        animate={{ height: mq ? "5rem" : "8rem" }}
        color={props.theme}
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
      /> */}
    </Icons>
  );
};

export default SocialIcons;
