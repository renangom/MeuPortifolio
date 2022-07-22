import styled from "styled-components";

export const ContainerSection = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 33%;
    padding: 1rem;
`;
export const Image = styled.img`
    width: 100%;
    border-radius: 10px;
`;
export const Title = styled.h2`
    color: #Fff;
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: 0.5rem;
`;
export const Text = styled.p`
    color: #Fff;
    font-size: 1rem;
    font-weight: 400;
    width: 100%;


`;
export const Tech = styled.span`
    color: aquamarine;
    width: 100%;

`;

export const ContainerButtons = styled.div`
    width: 100%;
    display: flex;
`;