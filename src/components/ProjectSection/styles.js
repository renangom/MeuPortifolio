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
    align-items: center;
    justify-content: center;
    width: 35%;
    margin: 20px;
    
    @media screen and (max-width: 850px){
        width: 50%;
    }
`;
export const Image = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: all 0.4s ease;
    &:hover{
        transform: scale(1.05);
    }
`;
export const Title = styled.h2`
    color: #c4c4c4;
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: 0.5rem;
    text-align: center;
`;
export const Text = styled.p`
    color: #c4c4c4;
    font-size: 1rem;
    font-weight: 400;
    width: 100%;
    text-align: center;


`;
export const Tech = styled.span`
    color: #00d2df;
    width: 100%;
    text-align: center;

`;

export const ContainerButtons = styled.div`
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerContent = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;