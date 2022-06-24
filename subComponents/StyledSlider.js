import { Slider } from "@mui/material";
import { styled } from "@mui/system";
import * as React from "react";

const marks = [
  {
    value: 0,
    label: "0:00",
  },

  {
    value: 100,
    label: "3:22",
  },
];

const StyledSLider = styled(
  Slider,
  {}
)({
  //color: "#6B8068",
  //color: "#01bf71",
  color: "white",
  opacity: 0.6,

  // backgroundColor: "silver",
  // margin: "auto",
  // borderRadius: 2,
  // height: 300,
  // width: 300,
  // display: "flex",
  // alignItems: "center",
  // position: "absolute",
  // bottom: "20vh",
  left: "50%",
  transform: "translate(-50%, 0)",
  //top: "2rem",
  marginRight: "25%",
  width: "100%",
  // display: "flex",
  // align-items: center;
  // justify-content: space-evenly;
  // marginBottom: "5vh",
  //marginLeft: "7vw",
  // marginRight: "7vw",
});

const SlideMe = () => {
  return <StyledSLider marks={marks} defaultValue={50} />;
};

export default SlideMe;
