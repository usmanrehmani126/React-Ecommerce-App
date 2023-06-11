import React from "react";
import CommonSection from "../components/UI/CommonSection";
import Title from "../components/Title/Title";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import "../styles/checkout.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Checkout = () => {
  const { totalQuantity, totalAmount } = useSelector((state) => state.cart);
  return (
    <Title title="checkout page">
      <CommonSection title="Checkout Page" />
      <section>
        <Container>
          <Row>
            <h5 className="fw-bold mb-4 text-center">Billing Information</h5>
            <Col lg="8">
              <Form className="billing_from">
                <FormGroup className="form_group">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-100"
                  />
                </FormGroup>
                <FormGroup className="form_group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-100"
                  />
                </FormGroup>
                <FormGroup className="form_group">
                  <input
                    type="number"
                    placeholder="Phone number"
                    className="w-100"
                  />
                </FormGroup>
                <FormGroup className="form_group">
                  <input
                    type="text"
                    placeholder="Street Address"
                    className="w-100"
                  />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="City" className="w-100" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="w-100"
                  />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="counrty" className="w-100" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout_cart">
                <h6>
                  Total Qty: <span>{totalQuantity} items</span>
                </h6>
                <h6>
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6>
                  Shipping: <span>$0</span>
                </h6>
                <hr />
                <span className="free_text">Free Home Delivery</span>
                <hr />
                <h4 className="d-flex align-items-center justify-content-between">
                  Total Cost: <span>${totalAmount}</span>
                </h4>
              </div>
              <button className="buy_btn w-100 mt-2">
                <NavLink to="/home">Buy Now</NavLink>
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </Title>
  );
};

export default Checkout;
