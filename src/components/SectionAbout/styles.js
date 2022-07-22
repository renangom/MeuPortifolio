import styled from "styled-components";

export const ContainerAbout = styled.div`
    background: #1b1b1b;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContainerImage = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const ImagemContainer = styled.div`
    display: flex;
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    background: linear-gradient(-45deg, red,blue);
    padding: 5px;
`;
export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
`;

export const Sobre = styled.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;
`;
export const Titulo = styled.h2`
    color: #Fff;
    font-size: 2.5rem;
    font-weight: 500;
`;
export const Subtitulo = styled.h3`
    color: #fff;
    font-size: 2rem;
    font-weight: 400;
`;
export const Texto = styled.p`
    color: #fff;
    font-size: 1rem;
    font-weight: 300;
    text-align: justify;
`;
export const ContainerButtons = styled.div`
    width: 100%;
    display: flex;
    margin-top: 1rem;
`;