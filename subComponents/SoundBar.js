import React from "react";
import styled from "styled-components";
import music from "../assets/audio/WEDNESDAY.mp3";
import { useRef } from "react";
import { useState } from "react";
import { keyframes } from "styled-components";
import { motion } from "framer-motion";

const Box = styled(motion.div)`
  display: flex;
  cursor: pointer;
  position: fixed;
  left: 1rem;
  top: 2.5rem;
  z-index: 10;

  &>*: nth-child(1) {
    animation-delay: 0.2s;
  }
  &>*: nth-child(2) {
    animation-delay: 0.3s;
  }
  &>*: nth-child(3) {
    animation-delay: 0.4s;
  }
  &>*: nth-child(4) {
    animation-delay: 0.5s;
  }
  &>*: nth-child(5) {
    animation-delay: 0.8s;
  }
`;

const play1 = keyframes`
    0%{
      transform: scaleY(1);
    }
    50%{
      transform: scaleY(2);
    }
    100%{
      transform: scaleY(1);
    }
    `;

const Line = styled.span`
  background: #eee8e3;
  // border: 1px solid ${(props) => props.theme.body};
  border: 1px solid #011627;
  height: 1rem;
  width: 2px;
  margin: 0 0.1rem;

  animation: ${play1} 1s ease infinite;
  animation-play-state: ${(props) => (props.click ? "running" : "paused")};
`;
const SoundBar = () => {
  const ref = useRef(null);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);

    if (!click) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  return (
    <Box
      onClick={() => handleClick()}
      initial={{
        opacity: 0,
        x: -200,
        transition: { type: "spring", duration: 1.5, delay: 1 },
      }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { type: "spring", duration: 1.5, delay: 2 },
      }}
    >
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <audio src={music} ref={ref} loop />
    </Box>
  );
};

export default SoundBar;
