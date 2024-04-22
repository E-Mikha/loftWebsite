import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";

export default class Contact extends Component {
  render() {
    return (
      <Container>
        <h1> Contact us </h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text>We'll never share your email with anyone else</Form.Text>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}
