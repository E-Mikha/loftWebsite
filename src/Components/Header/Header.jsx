import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import logo from "../Header/logo.png";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Главная</Nav.Link>
                <Nav.Link href="/Exscursions">Экскурсии</Nav.Link>
                <Nav.Link href="/Taxi">Такси</Nav.Link>
                <Nav.Link href="/Free transfer">Бесплатные трансферы</Nav.Link>
                <Nav.Link href="/Private tours">Индивидуальные туры</Nav.Link>
              </Nav>
              <Form>
                <FormControl
                  type="text"
                  placeholder="Найти"
                  className="mr-sm-2"
                />
                <Button variant="outline-info">Поиск</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
