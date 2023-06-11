import React from "react";
import { Container } from "reactstrap";
import "../../styles/common-section.css";
const CommonSection = ({ title }) => {
  return (
    <section className="common-section my-5">
      <Container className="text-center">
        <h2>{title}</h2>
      </Container>
    </section>
  );
};

export default CommonSection;
