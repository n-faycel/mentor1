import styled from "styled-components";

export default styled.div`
  background-color: #1f2937;
  font: 16px "Josefin Sans", sans-serif;
  width: 90vw;
  height: 190vh;
  margin: auto;
  padding: 3rem 0;
  h1 {
    color: #a67c50;
    text-align: center;
    font-size: 36px;
  }
  .contenair {
    color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 45vh;
    padding-top: 2rem;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40vw;
    }
  }
  p {
    width: 35vw;
    line-height: 1.5rem;
  }

  img {
    width: 5rem;
    height: 5rem;
    margin: 0 2rem;
  }
`;
