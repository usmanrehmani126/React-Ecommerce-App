import React from "react";
import "./service.css";
import { motion } from "framer-motion";
import { Col, Container, Row } from "reactstrap";
import servicesData from "../../assets/data/serviceData";
const Services = () => {
  return (
    <section className="services">
      <Container>
        <Row>
          {servicesData.map((item, index) => (
            <Col lg="3" md="4" sm="6" xsm="12" key={index}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="sevrice_item mb-2 md:mb-0"
                style={{ background: `${item.bg}` }}
              >
                <span>
                  <i class={item.icon}></i>
                </span>
                <div>
                  <h3 className="py-1">{item.title}</h3>
                  <p style={{fontSize:"12px"}}>{item.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
