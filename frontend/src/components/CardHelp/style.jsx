import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: space-between;
  height: 40vh;
  width: 85vw;
  margin: 5rem auto;
  border-radius: 10px;
  background-color: #edc9af;

  ul {
    flex-direction: column;
    width: 40vw;
    font-family: "Josefin Sans", sans-serif;
    padding: 5rem 0 0 3rem;
    h2 {
      font-weight: bold;
      font-size: 30px;
      line-height: 5vh;
    }
    li {
      line-height: 3.5vh;
      font-size: 20px;
    }
  }
  img {
    width: 40vw;
    border-radius: 10px 10px 10px 0;
  }
`;
