import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { mediaQueries } from "../components/Themes";
import "../../src/index.css";

import { Github } from "../components/AllSvgs";
import { motion } from "framer-motion";

const Box = styled(motion.li)`
  width: 16rem;
  height: 40vh;
  //background-color: ${(props) => props.theme.text};
  background-color: #fcf6f4;
  color: ${(props) => props.theme.body};
  padding: 1.5rem 2rem;
  // box-shadow: 0 2px 7px 1px rgba(31, 31, 0.2);
  box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.253) !important;
  margin-right: 8rem;

  // border-radius: 0 50px 0 50px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // border: 1px solid ${(props) => props.theme.body};
  border: 2px solid #eee8e3;
  transition: all 0.2 ease;

  &:hover {
    //background-color: ${(props) => props.theme.body};
    background-color: transparent;
    backdrop-filter: blur(4px);
    // color: ${(props) => props.theme.text};
    //color: #eee8e3;
    color: #a8aabc;
    // border: 1px solid ${(props) => props.theme.text};
    border: 2px solid #a8aabc;
  }

  ${mediaQueries(50)`
        width:16rem;
        margin-right:6rem;
        height:35vh;

  `};
  ${mediaQueries(40)`
        width:14rem;
        margin-right:4rem;
        height:35vh;

  `};
  ${mediaQueries(25)`
        width:12rem;
        margin-right:4rem;
        height:35vh;
padding:1.5rem 1.5rem;

  `};
  ${mediaQueries(20)`
        width:10rem;
        margin-right:4rem;
        height:40vh;

  `};
`;

const Title = styled.h2`
  font-size: calc(1em + 0.5vw);
  align-self: center;
  font-family: "Poppins", sans-serif;
  // font-style: italic;
`;

const Description = styled.h4`
  font-size: calc (0.8em + 0.3vw);
  font-family: "Poppins", sans-serif;
  font-family: "Poppins", sans-serif;

  ${mediaQueries(25)`
  font-size:calc(0.7em + 0.3vw);

  `};
  ${mediaQueries(20)`
  font-size:calc(0.6em + 0.3vw);

  `};
`;
const Tags = styled.div`
  border-top: 2px solid ${(props) => props.theme.body};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 0.5rem;

  ${Box}:hover & {
    // border-top: 2px solid ${(props) => props.theme.text};
    border-top: 2px solid #a8aabc;
  }
`;

const Tag1 = styled.span`
  margin-right: 1rem;
  font-size: calc(0.8em + 0.3vw);
  font-family: "Poppins", sans-serif;
  font-style: italic;

  ${mediaQueries(25)`
  font-size:calc(0.7em);

  `};
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Link = styled(NavLink)`
  background-color: ${(props) => props.theme.body};
  // color: ${(props) => props.theme.text};
  color: #eee8e3;

  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  font-family: "Poppins", sans-serif;
  //font-style: italic;

  //border-radius: 0 0 0 50px;
  border-radius: 50px 50px 50px 50px;
  font-size: calc(1em + 0.5vw);

  ${Box}:hover & {
    // background-color: ${(props) => props.theme.text};
    background-color: #eee8e3;
    color: ${(props) => props.theme.body};
  }
`;

const Git = styled(NavLink)`
  fill: ${(props) => props.theme.body};
  text-decoration: none;

  ${Box}:hover & {
    & > * {
      //  fill: ${(props) => props.theme.accent};
      fill: #a8aabc;
    }
  }
`;

{
  /* framer motion animation on page change */
}

const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const Card = (props) => {
  const { id, name, description, tags, demo, github } = props.data;
  return (
    <Box key={id} variants={Item}>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Tags>
        {" "}
        {tags.map((t, id) => {
          return <Tag1 key={id}>-{t}</Tag1>;
        })}
      </Tags>
      <Footer>
        <Link to={{ pathname: `${demo}` }} target="_blank">
          Visit
        </Link>
        <Git to={{ pathname: `${github}` }} target="_blank">
          <Github width={30} height={30} />
        </Git>
      </Footer>
    </Box>
  );
};

export default Card;
