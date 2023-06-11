import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
// import '../styles/page404.css'
const Page404 = () => {
  return (
    <Container className="py-5">
      <Row>
      <Col lg="6">
        <div className="noFound-section">
          <img
            src="https://img.icons8.com/external-flaticons-flat-flat-icons/256/external-not-found-no-code-flaticons-flat-flat-icons.png"
            className="w-75 h-100"
            alt=""
          />
        </div>
      </Col>
      <Col lg="6">
        <div className="py-3">
          <h3 className="pt-5">This Page is Not Available</h3>
          <p>Something Went Wrong</p>
        </div>
        <div>
            <button>
              <Link to='/'>Back To Home Page  </Link>
            </button>
        </div>
      </Col>
      </Row>
    </Container>
  );
};

export default Page404;
