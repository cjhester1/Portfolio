import React, { useEffect, useState, lazy, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./Themes";
import styled from "styled-components";
import img from "../assets/Images/clouds.jpeg";

import { mediaQueries } from "./Themes";
import { Blogs } from "../data/BlogData";
import { motion } from "framer-motion";
import BlogComponent from "./BlogComponent";
import Loading from "../subComponents/Loading";
import SocialIcons from "../subComponents/SocialIcons";

//separate pages that will be routed throughout the site
//time of video 1:30 - 2:00 hour mark
const BigTitle2 = lazy(() => import("../subComponents/BigTitle2"));
//const AnchorComponent = lazy(() => import("../subComponents/Anchor"));
const StyledPlayButton = lazy(() =>
  import("../subComponents/StyledPlayButton")
);
const ParticleComponent = lazy(() =>
  import("../subComponents/ParticleComponent")
);
const MainContainer = styled(motion.div)`
  // background-image: url(${img});
  // background-color: ${(props) => props.theme.body};
  //background-color: #eee8e3;
  background-color: #fcf6f4;

  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.05)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
  margin-left: 12.5rem;
  margin-right: 12.5rem;
  //z-index: 6;

  ${mediaQueries(30)`
  padding-top: 7rem;
  margin-left: 0;
  margin-right: 0;
  

`};
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
  ${mediaQueries(50)`
  grid-template-columns: 100%;

  z-index: 6;

`};
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const BlogPage = () => {
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumbers(parseInt(num));
  }, []);
  return (
    <ThemeProvider theme={darkTheme}>
      <Suspense fallback={<Loading />}>
        <MainContainer
          variants={container}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <Container>
            <StyledPlayButton />
            <SocialIcons />
            <ParticleComponent theme="light" />
            {/* <AnchorComponent numbers={numbers} /> */}
            <Center>
              <Grid variants={container} initial="hidden" animate="show">
                {Blogs.map((blog) => {
                  return <BlogComponent key={blog.id} blog={blog} />;
                })}
              </Grid>
            </Center>
            <BigTitle2 text="PARTNERS" top="5rem" left="1rem" />
          </Container>
        </MainContainer>
      </Suspense>
    </ThemeProvider>
  );
};

export default BlogPage;
