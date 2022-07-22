import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SectionMain from '../../components/SectionMain/SectionMain'
import {Container} from './styles'


export default function Home({inicio, sobre, projetos, contato}) {
  return (
    <Container>
        <Navbar inicio={inicio} sobre={sobre} projetos={projetos} contato={contato} />
        <SectionMain />
    </Container>
  )
}
