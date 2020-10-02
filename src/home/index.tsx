import React from 'react'
import { Container } from 'react-bootstrap'
import { NavBar } from '../common/navbar'
import { NewsContainer } from '../news/containers/NewsContainer'

export const Home: React.FC = ({}) => {
  return (
    <Container>
      <NavBar />
      <NewsContainer />
    </Container>
  )
}
