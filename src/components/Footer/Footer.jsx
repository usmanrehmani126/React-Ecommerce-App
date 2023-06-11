import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import "../Footer/footer.css";
const Footer = () => {
  return (
    <section className="footer">
      <Container>
        <Row>
          <Col  lg="3" md="4" sm="12" className="md:mt-0 mt-5">
            <div className="">
              <h3 className="text-white mb-4">Multimart</h3>
              <p className="footer_text">
              Explore the best quality products and enjoy them.Share our
              experiance with us.
            </p>
            </div>
          </Col>
          {/* <Col lg="3" md="4" sm="12" className="text-center">
            <div className="logo mb-3 text-white  text-center">
              <h1 className="text-white md:fs-3 fs-6">Multimart</h1>
            </div>
            <p className="footer_text">
              Explore the best quality products and enjoy them.Share our
              experiance with us.
            </p>
          </Col> */}
          <Col lg="3" md="4" sm="12" className="md:mt-0 mt-5">
            <div className="footer-quick-links ">
              <h5 className="footer-link-title pb-3 text-white text-center">
                Top Categories
              </h5>
              <ListGroup className="text-center">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="">Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="">Modern Phones</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="">Smart Watches</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="">Arm Chairs</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4" sm="12" className="md:mt-0 mt-5">
            <div className="footer-quick-links ">
              <h5 className="footer-link-title pb-3 text-white text-center">
                UseFul Links
              </h5>
              <ListGroup className="text-center">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4" sm="12" className="md:mt-0 mt-5">
            <div className="footer-quick-links ">
              <h5 className="footer-link-title pb-3 text-white text-center">
                Contact
              </h5>
              <ListGroup className="footer-Contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3  ">
                  <i class="ri-map-pin-2-line"></i>
                  <p>123 Muslium Colony ,Bahawal Nager Pakistan</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3  ">
                  <i class="ri-phone-line"></i>
                  <p>03116858141</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3  ">
                  <i class="ri-mail-line"></i>
                  <p>usmanrehmani126@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <hr className="text-white my-4" />
          <Col lg="12" className="text-center">
            <div className="footer_copyright">
              <div className="copyright-text">
                <p>Copyright © {new Date().getFullYear()} Multimart</p>
              </div>
              <div className="copyright-text">
                <p>All Rights Reserved.Developed By Usman</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
