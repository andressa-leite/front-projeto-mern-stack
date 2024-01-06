import styled from "styled-components";

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  border-radius: 0.3rem;
  box-sizing: border-box;
  background-color: white;
`;

export const CardBody = styled.article`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  

  img {
    width: 40%;
    padding-left: 0.5rem;
    object-fit: cover;
    object-position: center; 
    border-radius: 0 0.3rem 0.3rem 0;
    
  }

  
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    width: 100%;
  }
`;

export const CardHeader = styled.article`
display: flex;
flex-direction: column;
width: 100%;
font-size: ${(props) => (props.top ? "1.2rem" : "0.8rem")};

h2{
    margin-bottom: 1rem;
    font-size: ${(props) => (props.top ? "1.7rem" : "1rem")};
    width: 100%;
}
`

export const CardFooter = styled.article`
  display: flex;
  gap: 0.5rem;
  padding-top: 1rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    
  }
`;
