import styled from "styled-components";

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 100%;

  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  border-radius: 0.3rem;
  padding: 2rem;
  box-sizing: border-box;
  background-color: white;
`;

export const CardBody = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  img {
    width: 40%;
    height: 7rem;
    padding-left: 0.5rem;
  }

  h2 {
    margin-bottom: 1rem;
    font-size: ${(props) => (props.top ? "2rem" : "1rem")};
  }

  p {
    font-size: ${(props) => (props.top ? "1.2rem" : "0.8rem")};
  }

  div {
    display: flex;
    align-items: center;
  }
`;

export const CardFooter = styled.article`
  display: flex;
  gap: 0.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
`;
