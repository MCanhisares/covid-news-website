import React from 'react'
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
export const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">Covid News</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Política</Nav.Link>
          <Nav.Link href="#">Esportes</Nav.Link>
          <Nav.Link href="#">Saúde</Nav.Link>
          <Nav.Link href="#">Cultura</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Busca" className="mr-sm-2" />
          <Button variant="outline-success">Buscar</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}
