import styled from "styled-components";

export const NavContainer = styled.nav`
    background: #151515;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 10vh;
    position: sticky;
    top: 0;
`;
export const ContainerLogo = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Logo = styled.a`
    color: #00d2df;
    font-size: 2rem;
    font-weight: 500;
    transition: all 0.5s ease;

    &:hover {
        transform: scale(1.05);
    }
`;

export const ContainerLinks = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #151515;
    transition: transform 0.5s ease-in-out;
    @media screen and (max-width: 968px){
        position: absolute;
        top:10vh;
        left: -50vw;
        width: 50vw;
        transform: translateX(${props => props.ativo ? 50 : 0}vw);
        height: 90vh;
        
    }
`;
export const Lista = styled.ul`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 968px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
export const ItemsLista = styled.li`
    margin: 0 2rem;


    > a {
        color: #fff;
    }
    @media screen and (max-width: 968px){
        margin-bottom: 3rem;
        font-size: 1.5rem;
    }
`;
export const LinkItem = styled.a`
    color: #fff;
`;

export const MenuMobile = styled.div`
    display: none;
    padding: 0.8rem;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    margin-right: 1rem;
    cursor: pointer;
    @media screen and (max-width: 968px){
        display: flex;
        
    }
`;
 
