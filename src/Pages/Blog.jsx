import React, { Component } from "react";
import { Container, Col, Row, Card, ListGroup } from "react-bootstrap";

export default class Blog extends Component {
  render() {
    return (
      <Container style={{ marginTop: "60px" }}>
        <Row>
          <Col md="9">
            <div className="media m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              />
              <div className="media-body">
                <h5>Blog Post</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Error nam magni eaque expedita amet harum! Eligendi deserunt
                  dolorum sequi minima sed veniam, ea repellat ducimus. Rerum,
                  ratione! Nostrum, vero porro.
                </p>
              </div>
            </div>

            <div className="media m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              />
              <div className="media-body">
                <h5>Blog Post</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Error nam magni eaque expedita amet harum! Eligendi deserunt
                  dolorum sequi minima sed veniam, ea repellat ducimus. Rerum,
                  ratione! Nostrum, vero porro.
                </p>
              </div>
            </div>

            <div className="media m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              />
              <div className="media-body">
                <h5>Blog Post</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Error nam magni eaque expedita amet harum! Eligendi deserunt
                  dolorum sequi minima sed veniam, ea repellat ducimus. Rerum,
                  ratione! Nostrum, vero porro.
                </p>
              </div>
            </div>

            <div className="media m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              />
              <div className="media-body">
                <h5>Blog Post</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Error nam magni eaque expedita amet harum! Eligendi deserunt
                  dolorum sequi minima sed veniam, ea repellat ducimus. Rerum,
                  ratione! Nostrum, vero porro.
                </p>
              </div>
            </div>
          </Col>
          <Col md="3">
            <h5 className="text-center mt-5">Categories</h5>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>Html/Css</ListGroup.Item>
                <ListGroup.Item>JavaScript</ListGroup.Item>
                <ListGroup.Item>TypeScript</ListGroup.Item>
                <ListGroup.Item>React</ListGroup.Item>
                <ListGroup.Item>Vue</ListGroup.Item>
              </ListGroup>
            </Card>

            <Card className="mt-3" bg="light">
              <Card.Body>
                <Card.Title>Side widget</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Error nam magni eaque expedita amet harum! Eligendi deserunt
                  dolorum sequi minima sed veniam, ea repellat ducimus. Rerum,
                  ratione! Nostrum, vero porro.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
