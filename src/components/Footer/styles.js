import styled from "styled-components";

export const ContainerFooter = styled.div`  
    background-color: #1b1b1b;
    padding: 1rem;
`;

export const Copyright = styled.p`
    color: #c4c4c4;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Name = styled.a`
    margin-left: 1rem;
    color: #00d2df;
    transition: all 0.5s ease;

    &:hover{
        color: #9258f7;
    }
`;