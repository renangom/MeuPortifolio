import styled from "styled-components";

export const SectionContainer = styled.section`
    height: 90vh;
    background: #1b1b1b;
    display: flex;
    flex-direction: column;
`;

export const ContainerSobre = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 4rem;
`;
export const Sobre = styled.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    height: 70vh;
`;
export const Texto = styled.h3`
    color: #fff;
    font-weight: 400;
    font-size: 2rem;
`;
export const Nome = styled.h1`
    color: #00d2df;
    font-weight: 500;
    font-size: 2.5rem;
`;
export const ImagemContainer = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    object-fit: cover;
    border-radius: 50%;
`;
export const ContainerScroll = styled.div`
    width: 100%;
    height: 20vh;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContainerButton = styled.div`
    width: 100%;
    display: flex;
`