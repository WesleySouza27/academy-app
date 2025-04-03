import styled from "styled-components";

export const Form = styled.form`
  margin: 12px 0;
  width: 280px;

  div {
    margin: 12px 0;
  }

  input {
    display: block;
    padding: 12px 6px;
    width: 100%;
    border-radius: 6px;
    border: 2px solid rebeccapurple;
  }

  button {
    width: 100%;
    padding: 12px 18px;
    background-color: transparent;
    border: 2px solid rebeccapurple;
    border-radius: 6px;
    color: rebeccapurple;
    transition: ease-in 0.5s;
  }

  button:hover {
    background-color: rebeccapurple;
    color: white;
  }
`;
