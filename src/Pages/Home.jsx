import React, { Component } from "react";
import CarouselBox from "../Components/CarouselBox";
import { Container, CardGroup, Card, Button } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className="text-center m-4">Наша команда</h2>
          <CardGroup>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1762560/pexels-photo-1762560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <Card.Body>
                <Card.Title>Floating Market</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tempora quo, sed eligendi optio nemo delectus?
                </Card.Text>
                <Button variant="primary">О нас</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/13099696/pexels-photo-13099696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <Card.Body>
                <Card.Title>Floating Market</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tempora quo, sed eligendi optio nemo delectus?
                </Card.Text>
                <Button variant="primary">О нас</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/14785044/pexels-photo-14785044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <Card.Body>
                <Card.Title>Floating Market</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tempora quo, sed eligendi optio nemo delectus?
                </Card.Text>
                <Button variant="primary">О нас</Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
      </>
    );
  }
}
