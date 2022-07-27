import styled from "styled-components";

export default styled.section`
  display: flex;
  height: 77vh;
  width: 88vw;
  margin: 2rem auto 0;
  background-color: #edc9af;

  .container {
    display: flex;
    flex-direction: column;
    padding: 7rem 0 0 2.5rem;
    font-family: "Josefin Sans", sans-serif;
  }
  h1 {
    font-size: 60px;
    width: 40vw;
    line-height: 7vh;
    font-weight: bold;
  }
  p {
    font-size: 20px;
    margin-top: 1.7rem;
    width: 38vw;
  }
  img {
    height: 100%;
    width: 100%;
    clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
  }
  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: white;
    background-color: #a67c50;
    width: 38vw;
    height: 7vh;
    margin: 2rem 0;
    clip-path: polygon(0 0, 100% 0, 97% 100%, 0% 100%);
    border-radius: 5px;
    font-size: 18px;
  }
`;
