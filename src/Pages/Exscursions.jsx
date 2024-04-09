import React, { Component } from "react";
import Tab, { Container } from "react-bootstrap/lib/Tab";

export default class Exscursions extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="ledt-tabs-example" defaultActiveKeys="first">
          <Row>
            <Col>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKeys="first">Бангкок туры</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKeys="second">Однодневные туры</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKeys="third">Двухдневные туры</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKeys="fourth">Островные туры</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKeys="fifth">Морские прогулки</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKeys="first">
                  <img src="" alt="" />
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque amet alias aliquid expedita, qui fugiat, quibusdam et
                    sequi non labore praesentium magni, provident asperiores?
                    Modi tenetur consequatur sint eos aliquam?
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
