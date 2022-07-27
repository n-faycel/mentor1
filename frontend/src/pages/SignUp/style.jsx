import styled from "styled-components";

export default styled.section`
  .container {
    display: flex;
    width: 65vw;
    height: 60vh;
    margin: 3rem auto;
    background-color: #edc9af;
    border-radius: 9px;
    div {
      width: 60vw;
      display: flex;
      justify-content: center;
      align-items: center;
      font: 15px "Josefin Sans", sans-serif;
    }
  }
  input {
    width: 25vw;
    height: 4vh;
    margin: 1rem 0;
    font: 15px "Josefin Sans", sans-serif;
    border: white;
    border-radius: 10px;
  }
  .button {
    width: 25vw;
    height: 4vh;
    border-radius: 20px;
    border: none;
    background-color: #a67c50;
    color: white;
    font: 15px "Josefin Sans", sans-serif;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
