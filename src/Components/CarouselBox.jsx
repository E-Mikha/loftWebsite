import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import khaoKheo from "../assets/khaoKheo.jpg";
import bangkok from "../assets/bangkok.jpg";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={khaoKheo} alt="Khao Kheo Zoo" />
          <Carousel.Caption>
            <h3>Зоопарк Кхао Кхео</h3>
            <p>Большой открытый, контактный зоопарк</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bangkok} alt="Bangkok Evening" />
          <Carousel.Caption>
            <h3>Вечерний Бангкок</h3>
            <p>Самый насыщеный тур по Бангкоку</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
