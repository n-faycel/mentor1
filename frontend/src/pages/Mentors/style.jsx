import styled from "styled-components";

export default styled.section`
  margin-top: 5rem;
  h1 {
    text-align: center;
    font: 36px "Josefin Sans", sans-serif;
  }
  p {
    text-align: center;
    font: 20px "Josefin Sans", sans-serif;
    margin-top: 2rem;
  }
  .contenair {
    padding: 4rem 0;
    width: 70vw;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
  }
  .profil {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem auto;
  }

  img {
    border-radius: 50%;
    border: 3px #a67c50 solid;
    width: 13rem;
    height: 13rem;
  }
  ul {
    width: 13rem;
    text-align: center;
    margin: 0.7rem 0;
    font: 18px "Josefin Sans", sans-serif;
    li {
      line-height: 1.8rem;
    }
  }
`;
