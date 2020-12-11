import React from 'react'
import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'
import { NavBar } from '../common/navbar'
import { NewsContainer } from '../news/containers/NewsContainer'

export const Home: React.FC = ({}) => {
  return (
    <Container>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <NewsContainer />
        </Route>
        <Route path="/categoria/:category">
          <NewsContainer />
        </Route>
      </Switch>
    </Container>
  )
}
