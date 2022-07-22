import React from "react";
import styled from "styled-components";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Botao = styled.button`
    padding: 1rem 2rem;
    border-radius: 15px;
    cursor: pointer;
    border: none;
    outline: none;
    width: 100%;
    background-color: black;
    color: #fff;
    margin: 0;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Border = styled.div`
    background: linear-gradient(-45deg, #${props => props.color1}, #${props => props.color2} );
    border-radius: 15px;
    padding: 0.2rem 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    margin-right: 1rem;
    flex-wrap: wrap;
`;

const Button = ({icon, text, color1, color2}) => {
    return(
        <>
            <Border color1={color1} color2={color2}>
                <Botao>{text}</Botao>
            </Border>
        </>
    )   
}

export default Button;