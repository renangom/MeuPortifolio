import React, {useRef, useState} from 'react'
import { ContainerLinks, ContainerLogo, ItemsLista, LinkItem, Lista, Logo, MenuMobile, NavContainer } from './styles'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar({inicio, sobre, projetos, contato}) {
    const [menuActive, setMenuActive] = useState(false)

    const scrollToRef = (referencia) => {
        window.scrollTo({
            top: referencia.current.offsetTop,
            behavior: "smooth"
        })
    }
    const handleMenuMobile = () => {
        setMenuActive(!menuActive)
    }
  return (
    <NavContainer>
        <ContainerLogo>
            <Logo> RenanDev </Logo>
        </ContainerLogo>
        <ContainerLinks ativo={menuActive}>
            <Lista>
                <ItemsLista>
                    <LinkItem onClick={() => scrollToRef({inicio})}>Início</LinkItem>
                </ItemsLista>
                <ItemsLista>
                    <LinkItem onClick={() => scrollToRef({sobre})}>Sobre</LinkItem>
                </ItemsLista>
                <ItemsLista>
                    <LinkItem onClick={() => scrollToRef({projetos})}>Projetos</LinkItem>
                </ItemsLista>
                <ItemsLista>
                    <LinkItem onClick={() => scrollToRef({contato})}>Contato</LinkItem>
                </ItemsLista>
            </Lista>
        </ContainerLinks>
        <MenuMobile onClick={handleMenuMobile}>
            {menuActive ? <CloseIcon  /> : <MenuIcon /> }
        </MenuMobile>
    </NavContainer>
  )
}
