import styled from "styled-components";

export const ContainerResults = styled.section`
    width: 100%;
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    
    img {
        width: 30%;
    }
`

export const searchNews = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    width: 100%;
    margin: 1rem auto;
    gap: 1rem;
    margin-top: 1rem;
`;

export const TextResults = styled.div`
    padding: 4rem;
    background-color: #fff;
    width: 100%;
    border-radius: 0.3rem;
    box-shadow: rgba(50,50,105,0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.5) 0px 1px 1px 0px;

    span {
        font-size: 1rem;
    }
`