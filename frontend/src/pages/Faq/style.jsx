import styled from "styled-components";

export default styled.section`
  width: 80vw;
  margin: 4rem auto;

  h1 {
    text-align: center;
    color: #a67c50;
    font: 36px "Josefin Sans", sans-serif;
    margin: 1.5rem;
  }
  p {
    text-align: center;
    font: 16px "Josefin Sans", sans-serif;
  }
  .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 3rem 0;
  }
  .block {
    width: 30vw;
    margin: 2rem;
  }
  .title {
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 2.7rem;
    border-radius: 7px;
    background-color: #edc9af;
    font: 20px "Josefin Sans", sans-serif;
  }
  .text {
    margin: 1rem 0;
    line-height: 2rem;
    font-family: "Josefin Sans", sans-serif;
    font-size: 16px;
  }
`;
