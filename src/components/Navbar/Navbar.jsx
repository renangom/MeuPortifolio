import React, {useRef, useState} from 'react'
import { ContainerLinks, ContainerLogo, ItemsLista, LinkItem, Lista, Logo, MenuMobile, NavContainer } from './styles'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {Link} from 'react-scroll'

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
                    <Link to='main' spy={true} smooth={true} offset={-100} duration={500}>Início</Link>
                </ItemsLista>
                <ItemsLista>
                    <Link to='about' spy={true} smooth={true} offset={-100} duration={500}>Sobre</Link>
                </ItemsLista>
                <ItemsLista>
                    <Link to='projects' spy={true} smooth={true} offset={-100} duration={500}>Projetos</Link>
                </ItemsLista>
                <ItemsLista>
                    <Link to='contato' spy={true} smooth={true} offset={-100} duration={500} >Contato</Link>
                </ItemsLista>
            </Lista>
        </ContainerLinks>
        <MenuMobile onClick={handleMenuMobile}>
            {menuActive ? <CloseIcon  /> : <MenuIcon /> }
        </MenuMobile>
    </NavContainer>
  )
}
