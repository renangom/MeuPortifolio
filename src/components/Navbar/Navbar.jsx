import React, {useState} from 'react'
import { ContainerLinks, ContainerLogo, ItemsLista, LinkItem, Lista, Logo, MenuMobile, NavContainer } from './styles'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
    const [menuActive, setMenuActive] = useState(false)

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
                    <LinkItem>Início</LinkItem>
                </ItemsLista>
                <ItemsLista>
                    <LinkItem>Sobre</LinkItem>
                </ItemsLista>
                <ItemsLista>
                    <LinkItem>Projetos</LinkItem>
                </ItemsLista>
                <ItemsLista>
                    <LinkItem>Contato</LinkItem>
                </ItemsLista>
            </Lista>
        </ContainerLinks>
        <MenuMobile onClick={handleMenuMobile}>
            {menuActive ? <CloseIcon  /> : <MenuIcon /> }
        </MenuMobile>
    </NavContainer>
  )
}
