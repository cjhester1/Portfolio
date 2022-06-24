//Creating themes to be used in site

export const lightTheme = {
  body: "#FCF6F4",
  accent: "#BFA5A6",
  text: "#000000",
  fontFamily: "'Karla', sans-serif",
  bodyRgba: "252, 246, 244",
  textRgba: "0,0,0",
  accentRgba: "191, 165, 166",
};

export const darkTheme = {
  //body: " #4B5378", // me gusta
  // body: "#162243",\
  // body: "#4345",
  // body: "#000",
  body: "#011627",
  //body: "#4E5572", // me gusta a lil
  //body: "#2E456C",
  // body: "#54649B",
  //body: "#2C3C61",
  accent: "#BFA5A6",
  text: "#a8aabc;",
  fontFamily: "'Source Sans Pro', sans-serif",
  textRgba: "252, 246, 244",
  bodyRgba: "0,0,0",
  accentRgba: "191, 165, 166",
};

export const breakpoints = {
  sm: 20, //em
  md: 30,
  lg: 45,
  xl: 60,
  xxl: 75,
};

export const mediaQueries = (key) => {
  return (style) => `@media (max-width: ${key}em) { ${style} }`;
};
