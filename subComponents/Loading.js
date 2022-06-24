import styled from "styled-components";

const Box = styled.div`
  width: 100vw;
  height: 100vh;
  // background: ${(props) => props.theme.body};
  background: white;
  //color: ${(props) => props.theme.body};
  color: black;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
`;

const Loading = () => {
  return (
    <Box>
      <h1>Loading...</h1>
    </Box>
  );
};

export default Loading;
