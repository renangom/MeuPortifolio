import React from 'react'
import { Container, ContainerScroll, ContainerSobre, ImagemContainer, Nome, SectionContainer, Sobre, Texto, Image,ContainerButton } from './styles'
import img from '../../img/renan.png'
import Button from '../Button/Button'

import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function SectionMain() {
  return (
    <SectionContainer>
        <ContainerSobre>
            <Sobre>
                <Texto>Olá, eu sou o </Texto>
                <Nome> Renan Lopes</Nome>
                <Texto>Dasenvolvedor FullStack-Junior</Texto>
                <ContainerButton>
                    <Button icon={<LinkedInIcon />} text="LinkedIn" color1="10d8e2" color2="9258f7"  />
                    <Button icon={<LinkedInIcon />} text="GitHub" color1="d340d8" color2="6618b4" />
                </ContainerButton>
            </Sobre>
            <ImagemContainer>
                <Container>
                    <Image src={img} />
                </Container>
            </ImagemContainer>
        </ContainerSobre>
        <ContainerScroll>
            Scroll Down
        </ContainerScroll>
    </SectionContainer>
  )
}
