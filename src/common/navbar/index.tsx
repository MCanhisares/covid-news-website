import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
export const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Covid News</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/categoria/cienciaESaude">Ciência e Saúde</Nav.Link>
          <Nav.Link href="/categoria/educacao">Educação</Nav.Link>
          <Nav.Link href="/categoria/entretenimento">Entretenimento</Nav.Link>
          <Nav.Link href="/categoria/mercado">Mercado</Nav.Link>
          <Nav.Link href="/categoria/mundo">Mundo</Nav.Link>
          <Nav.Link href="/categoria/politica">Política</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
