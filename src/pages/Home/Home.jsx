import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SectionMain from '../../components/SectionMain/SectionMain'
import {Container} from './styles'


export default function Home() {
  return (
    <Container>
        <Navbar />
        <SectionMain />
    </Container>
  )
}
