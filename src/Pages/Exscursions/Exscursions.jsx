import React, { Component } from "react";
import { Container, Tab, Nav, Row, Col } from "react-bootstrap";
import bkk from "../../Pages/Exscursions/img/bkk.jpg";
import cambo from "../../Pages/Exscursions/img/cambo.jpg";
import island from "../../Pages/Exscursions/img/island.jpg";
import kk from "../../Pages/Exscursions/img/kk.jpg";
import rk from "../../Pages/Exscursions/img/rk.jpg";

export default class Exscursions extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="ledt-tabs-example" defaultActiveKeys="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link style={{ marginTop: "100px" }} eventKey="first">
                    Бангкок туры
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Однодневные туры</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Двухдневные туры</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Островные туры</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Морские прогулки</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <img
                    style={{ width: "500px", marginTop: "100px" }}
                    src={bkk}
                    alt="Bangkok"
                  />
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque amet alias aliquid expedita, qui fugiat, quibusdam et
                    sequi non labore praesentium magni, provident asperiores?
                    Modi tenetur consequatur sint eos aliquam?
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <img
                    style={{ width: "500px", marginTop: "100px" }}
                    src={cambo}
                    alt="Cambodia"
                  />
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque amet alias aliquid expedita, qui fugiat, quibusdam et
                    sequi non labore praesentium magni, provident asperiores?
                    Modi tenetur consequatur sint eos aliquam?
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <img
                    style={{ width: "500px", marginTop: "100px" }}
                    src={kk}
                    alt="Khao Kheo"
                  />
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque amet alias aliquid expedita, qui fugiat, quibusdam et
                    sequi non labore praesentium magni, provident asperiores?
                    Modi tenetur consequatur sint eos aliquam?
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="fourth">
                  <img
                    style={{ width: "500px", marginTop: "100px" }}
                    src={rk}
                    alt="River Kwai"
                  />
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque amet alias aliquid expedita, qui fugiat, quibusdam et
                    sequi non labore praesentium magni, provident asperiores?
                    Modi tenetur consequatur sint eos aliquam?
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="fifth">
                  <img
                    style={{ width: "500px", marginTop: "100px" }}
                    src={island}
                    alt="Emerald Island"
                  />
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
