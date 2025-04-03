import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div > h1 {
    text-align: center;
  }

  & > div > small {
    display: block;
    text-align: center;
  }
`;
