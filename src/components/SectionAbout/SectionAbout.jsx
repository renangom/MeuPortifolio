import React from 'react'
import {ContainerAbout, ContainerButtons, ContainerImage, Image, ImagemContainer, Sobre, Subtitulo, Texto, Titulo} from './styles'
import logo from '../../img/logo.jpg'
import Button from '../Button/Button'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';


export default function SectionAbout() {
  return (
    <ContainerAbout>
        <ContainerImage>
            <ImagemContainer>
                <Image src={logo} />
            </ImagemContainer>
        </ContainerImage>
        <Sobre>
            <Titulo>UM POUCO SOBRE MIM</Titulo>
            <Subtitulo>Igaraçu do Tietê, São Paulo</Subtitulo>
            <Texto>Olá! Me chamo Renan, sou Físico de formação pela Unesp-Bauru e atualmente estou em transição de carreira com dedicação nos estudos para futuramente ser um desenvolvedor fullstack. Em abril de 2022 tomei a decisão de estudar por conta própria fazendo projetos dos canais gringos, dentro deste período ganhei conhecimento e consegui meu primeiro freelance.</Texto>
            <ContainerButtons>
                <Button text="Curriculo" color1="10d8e2" color2="9258f7"> <CloudDownloadIcon  /> </Button>
            </ContainerButtons>
        </Sobre>
    </ContainerAbout>
  )
}
