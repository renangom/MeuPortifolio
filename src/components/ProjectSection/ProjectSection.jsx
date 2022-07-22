import React from 'react'
import { ContainerSection, ContainerCard, Image,Tech,Text,Title, ContainerButtons } from './styles'
import pcshow from '../../img/pcshow.jpg'
import Button from '../Button/Button'

export default function ProjectSection() {
  return (
    <ContainerSection>
        <ContainerCard>
            <Image src={pcshow} />
            <Title>Site para a PC SHOW</Title>
            <Text>Este site foi feito para uma empresa de Bauru chamada PC Show, esta empresa trabalha promovendo eventos pela cidade de Bauru e região. Design desenvolvido pela empresa e codado por mim.</Text>
            <Tech>Tecnologias: ReactJS, ReactRouter, StyledComponents, MaterialUI.</Tech>
            <ContainerButtons>
                <Button text="Acesse" color1="DD8E2F" color2="E6DB27" href="https://pcshow.netlify.app/" />
                <Button text="GitHub" color1="DD2FB0" color2="E62727" href="https://github.com/renangom/divuvlgacao" />
            </ContainerButtons>
        </ContainerCard>
        <ContainerCard>
            <Image src={pcshow} />
            <Title>7DaysOfCode</Title>
            <Text>Este site foi desenvolvido por meio de um desafio, o template ja havia sido desenvolvido no Figma e eu apenas tive o trabalho de codar.</Text>
            <Tech>Tecnologias: Html, CSS e JavaScript</Tech>
            <ContainerButtons>
                <Button text="Acesse" color1="DD8E2F" color2="E6DB27" href="https://renangom.github.io/7daysOfCodeChalange/" />
                <Button text="GitHub" color1="DD2FB0" color2="E62727" href="https://github.com/renangom/7daysOfCodeChalange" />
            </ContainerButtons>
        </ContainerCard>
        <ContainerCard>
            <Image src={pcshow} />
            <Title>Site para a PC SHOW</Title>
            <Text>Este site foi feito para uma empresa de Bauru chamada PC Show, esta empresa trabalha promovendo eventos pela cidade de Bauru e região. Design desenvolvido pela empresa e codado por mim.</Text>
            <Tech>Tecnologias: ReactJS, ReactRouter, StyledComponents, MaterialUI.</Tech>
            <ContainerButtons>
                <Button text="Acesse" color1="DD8E2F" color2="E6DB27" href="https://pcshow.netlify.app/" />
                <Button text="GitHub" color1="DD2FB0" color2="E62727" href="https://github.com/renangom/divuvlgacao" />
            </ContainerButtons>
        </ContainerCard>
        
    </ContainerSection>
  )
}
