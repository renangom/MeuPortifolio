import React from 'react'
import { ContainerSection, ContainerCard, Image,Tech,Text,Title, ContainerButtons, ContainerContent } from './styles'
import pcshow from '../../img/pcshow.jpg'
import ecommerce from '../../img/ecommerce.png'
import ecommerceapi from '../../img/ecommerceapi.png'
import admin from '../../img/admin.png'
import Button from '../Button/Button'

export default function ProjectSection() {
  return (
    <ContainerSection>
        <ContainerCard>
            <Image src={pcshow} />
            <ContainerContent>
                <Title>Site para a PC SHOW</Title>
                <Text>Este site foi feito para uma empresa de Bauru chamada PC Show.</Text>
                <Tech>Tecnologias: ReactJS, ReactRouter, StyledComponents, MaterialUI.</Tech>
                <ContainerButtons>
                    <Button text="Acesse" color1="10d8e2" color2="9258f7" href="https://pcshows.com.br/" />
                    <Button text="GitHub" color1="d340d8" color2="6618b4" href="https://github.com/renangom/divuvlgacao" />
                </ContainerButtons>
            </ContainerContent>
        </ContainerCard>
        <ContainerCard>
            <Image src={ecommerce} />
            <ContainerContent>
                <Title>Site Ecommerce</Title>
                <Text>Este é um site venda de roupas. Ainda em desenvolvimento</Text>
                <Tech>Tecnologias: ReactJS, ReactRouter, StyledComponents, MaterialUI e Redux</Tech>
                <ContainerButtons>
                    <Button text="Acesse" color1="10d8e2" color2="9258f7" href="https://renan-ecommerce.netlify.app/" />
                    <Button text="GitHub" color1="d340d8" color2="6618b4" href="https://github.com/renangom/layoutEcommerce" />
                </ContainerButtons>
            </ContainerContent>
        </ContainerCard>
        <ContainerCard>
            <Image src={ecommerceapi} />
            <ContainerContent>
                <Title>API do ecommerce</Title>
                <Text>API para as requisições do ecommerce, feito em NodeJS e MongoDB</Text>
                <Tech>Tecnologias: NodeJS, Express, MongoDB, JSONWEBTOKEN, etc...</Tech>
                <ContainerButtons>
                    <Button text="GitHub" color1="d340d8" color2="6618b4" href="https://github.com/renangom/divuvlgacao" />
                </ContainerButtons>
            </ContainerContent>
        </ContainerCard>
        <ContainerCard>
            <Image src={admin} />
            <ContainerContent>
                <Title>Painel de Administração</Title>
                <Text>Este é um painel para o administrador do ecommerce, onde genriará seu site</Text>
                <Tech>Tecnologias: ReactJS, ReactRouter, MaterialUI, Recharts, etc...</Tech>
                <ContainerButtons>
                    <Button text="Acesse" color1="10d8e2" color2="9258f7" href="https://adminpainel.netlify.app/" />
                    <Button text="GitHub" color1="d340d8" color2="6618b4" href="https://github.com/renangom/adminEcommerce" />
                </ContainerButtons>
            </ContainerContent>
        </ContainerCard>
        <ContainerCard>
            <Image src={admin} />
            <ContainerContent>
                <Title>Painel de Administração</Title>
                <Text>Este é um painel para o administrador do ecommerce, onde genriará seu site</Text>
                <Tech>Tecnologias: ReactJS, ReactRouter, MaterialUI, Recharts, etc...</Tech>
                <ContainerButtons>
                    <Button text="Acesse" color1="10d8e2" color2="9258f7" href="https://adminpainel.netlify.app/" />
                    <Button text="GitHub" color1="d340d8" color2="6618b4" href="https://github.com/renangom/adminEcommerce" />
                </ContainerButtons>
            </ContainerContent>
        </ContainerCard>
    </ContainerSection>
  )
}
