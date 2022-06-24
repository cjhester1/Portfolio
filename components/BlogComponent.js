import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { mediaQueries } from "./Themes";
import "../../src/index.css";
// import { Image } from "@mui/icons-material";

const Container1 = styled(motion(NavLink))`
  width: calc(10rem +15vw);
  text-decoration: none;
  height: 20rem;
  padding: 1rem;
  background-color: #fcf6f4;
  color: ${(props) => props.theme.text};
  // border: 2px solid ${(props) => props.theme.text};
  backdrop-filter: blur(2px);
  border-radius: 30px 30px 30px 30px;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.3);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  z-index: 5;

  &:hover {
    color: ${(props) => props.theme.body};
    // background-color: ${(props) => props.theme.text};
    background-color: background-color: #fcf6f4;;
    transition: all 0.3s ease;
  }

  ${mediaQueries(50)`
    width:calc(60vw);

  `};
  ${mediaQueries(30)`
    
    height:18rem;

  `};

  ${mediaQueries(25)`
    
    height:14rem;
    padding:0.8rem;
    backdrop-filter: none;

  `};
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 100%;
  background-size: cover;
  border: 1px solid #a8aabc;
  //border: 2px solid #eee8e3;
  background-position: center center;
  border-radius: 30px 30px 20px 20px;

  ${mediaQueries(25)`
    
  height:70%;


`};

  ${Container1}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }
`;

const Title = styled.h3`
  color: inherit;
  //color: #011627;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Poppins", sans-serif;
  //font-style: italic;
  font-weight: 700;
  ${mediaQueries(40)`
  font-size:calc(0.8em + 1vw);

`};
  ${mediaQueries(25)`
    
    font-size:calc(0.6em + 1vw);



  `};

  border-bottom: 1px solid ${(props) => props.theme.text};
  ${Container1}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`;

const HashTags = styled.div`
  padding: 0.5rem 0;
  font-family: "Poppins", sans-serif;
  // color: #011627;

  ${mediaQueries(25)`
    
    font-size:calc(0.5em + 1vw);



  `};
`;
const Tag1 = styled.span`
  padding-right: 0.5rem;
`;

const Date = styled.span`
  padding: 0.5rem 0;
  font-family: "Poppins", sans-serif;
  color: #73787c;
  ${mediaQueries(25)`
    
  font-size:calc(0.5em + 1vw);



`};
`;

const Container2 = styled(motion.div)`
  z-index: 3;
`;

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
const BlogComponent = (props) => {
  const { name, tags, date, imgSrc, link } = props.blog;
  return (
    <Container2 variants={Item}>
      <Container1 target={"_blank"} to={{ pathname: link }}>
        <Image img={imgSrc} />
        <Title>{name}</Title>
        <HashTags>
          {tags.map((t, id) => {
            return <Tag1 key={id}> {t}</Tag1>;
          })}
        </HashTags>
        <Date>{date}</Date>
      </Container1>
    </Container2>
  );
};

export default BlogComponent;
