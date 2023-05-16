import React from "react";
import "./Delivery.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

const Delivery = () => {
  return (
    <div>
      <div className="delivery">
        
      </div>
      <div className="d-flex justify-content-center align-items-center">
      <Container className="content">
        <Row>
          <Col sm={12} md={6}>
            <h3 className="explore-city">
              Explore your favourite city’s food.
            </h3>
            <p className="explore-city-text">
              Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh
              tristique. Non ligula tristique ut ut libero sit convallis
              maecenas. At egestas auctor porta mattis.
            </p>
            <button className="explore text-white">
              <span className="explore-text me-2">Explore</span> <FaArrowRight className="explore-text-icon"/>
            </button>
          </Col>
          <Col sm={12} md={6}>
            <div className="delivery-boy"></div>
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  );
};

export default Delivery;
