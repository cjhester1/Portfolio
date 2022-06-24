//separate pages that will be routed throughout the site
import React, { useEffect, lazy, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import PlayButton from "../subComponents/PlayButton";
import { darkTheme } from "./Themes";

import styled from "styled-components";

import Card from "../subComponents/Card";
import { useRef } from "react";
import { mediaQueries } from "./Themes";
import Loading from "../subComponents/Loading";

import { Work } from "../data/WorkData";

import { motion } from "framer-motion";
import { YouTube } from "./AllSvgs";

const ParticleComponent = lazy(() =>
  import("../subComponents/ParticleComponent")
);
const BigTitle = lazy(() => import("../subComponents/BigTitle"));
//const PlayButton = lazy(() => import("../subComponents/PlayButton"));

const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));

//separate pages that will be routed throughout the site

//make own particles 2:32:42

const MainBox = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  height: 400vh;
  position: relative;
  display: flex;
`;
const Main = styled(motion.ul)`
  position: fixed;
  top: 14rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  z-index: 3;
  display: flex;
  margin-top: 0;
  padding-left: 0;
  margin-bottom: 0;
  ${mediaQueries(50)`

        left:calc(8rem + 15vw);

  `};

  ${mediaQueries(40)`
        top: 30%;

        left:calc(6rem + 15vw);

  `};

  ${mediaQueries(40)`

        left:calc(2rem + 15vw);

  `};
  ${mediaQueries(25)`

        left:calc(1rem + 15vw);

  `};
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;

  ${mediaQueries(40)`
  // width:60px;
  //     height:60px;
    // svg{
    //   width:60px;
    //   height:60px;
    // }

`};

  ${mediaQueries(25)`
// width:50px;
//  height:50px;
// svg{
//  width:50px;
//  height:50px;
// }

`};
`;

//framer motion configuration
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
const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);
  // const ref = useRef(null);
  useEffect(() => {
    let element1 = ref.current;

    const rotate = () => {
      element1.style.transform = `translateX(${-window.pageYOffset}px)`;

      yinyang.current.style.transform =
        `rotate(` + -window.pageYOffset + "deg)";
    };
    window.addEventListener("scroll", rotate);

    return () => window.removeEventListener("scroll", rotate);
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Suspense fallback={<Loading />}>
        <MainBox
          key="work"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          {/* <LogoComponent/>
        social icons   2:15:32 of video*/}
          <PlayButton />
          <SocialIcons />
          <ParticleComponent theme="dark" />
          <Main ref={ref} variants={container} initial="hidden" animate="show">
            {" "}
            {Work.map((d) => (
              <Card key={d.id} data={d} />
            ))}
          </Main>
          <Rotate ref={yinyang}>
            <YouTube width={80} height={80} fill="black" />
            {/* <Github width={80} height={80} />{" "} */}
            {/* <ImageMee src={Image1} width={80} height={80} /> */}
          </Rotate>
          <BigTitle text="WORK" top="1.5%" left="80%" />
        </MainBox>
      </Suspense>
    </ThemeProvider>
  );
};

export default WorkPage;
