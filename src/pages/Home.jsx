import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Title from "../components/Title/Title";
import heroImg from "../assets/images/hero-img.png";
import "../styles/home.css";
import { Link, NavLink } from "react-router-dom";
import Services from "../components/services/Services";
import ProductList from "../components/UI/ProductList.jsx";
import products from "../assets/data/products";
import counterImage from "../assets/images/counter-timer-img.png";
import Clock from "../components/UI/Clock";
const Home = () => {
  const [data, setData] = useState(products);
  const [bestSales, setBestSales] = useState(products);
  const [bestSellers, setBestSellers] = useState(products);
  const [bestMobiles, setBestMobiles] = useState(products);
  useEffect(() => {
    const filteredProductOne = products.filter(
      (item) => item.category === "chair"
    );
    setData(filteredProductOne);

    const FilteredProductTwo = products.filter(
      (item) => item.category === "sofa"
    );
    setBestSales(FilteredProductTwo);
    const FilteredProductThree = products.filter(
      (item) => item.category === "mobile"
    );
    setBestMobiles(FilteredProductThree);
    const FilteredProductFour = products.filter(
      (item) => item.category === "wireless"
    );
    setBestSellers(FilteredProductFour);
  }, []);
  return (
    <Title title="Home">
      <section className="hero_section mt-5">
        <Container>
          <Row className="">
            <Col lg='6 md="6'>
              <div className="hero_content">
                <p className="hero_subtitle">
                  Trending Products {new Date().getFullYear()}
                </p>
                <h2>
                  Make Your Interior More Realistic , Materialistic and Modern.
                </h2>
                <p>
                  Explore the best quality products and enjoy them.Share our
                  experiance with us.
                </p>
                <button whileHover={{ scale: 1.1 }} className="buy_btn">
                  <Link to="/shop">SHOP NOW</Link>
                </button>
              </div>
            </Col>
            <Col lg='6 md="6'>
              <img src={heroImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending_section">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title ">Trending Products</h2>
            </Col>
            <ProductList data={data} />
          </Row>
        </Container>
      </section>
      <section className="best_sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Best Products</h2>
            </Col>
            <ProductList data={bestSales} />
          </Row>
        </Container>
      </section>
      <section className="timer-count">
        <Container>
          <Row>
            <Col lg="6" md="6" className="text-center">
              <div className="clock_top-content">
                <h4 className="fs-6 text-white mb-4 ">Limited Offer</h4>
                <h3 className="fs-4 text-white mb-2 ">Quality ArmChair</h3>
              </div>
              <motion.button whileHover={{ scale: 1.1 }} className="clock_btn my-3 ">
                Visit Store
              </motion.button>
            </Col>
            <Col lg="6" md="6" className="text-end">
              <img src={counterImage} className="img-fluid " alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new_arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">New Arrivals</h2>
            </Col>
            <ProductList data={bestMobiles} />
            {/* <ProductList data={bestSellers} /> */}
          </Row>
        </Container>
      </section>

      <section className="popular_products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Popular in Category</h2>
            </Col>
            <ProductList data={bestSellers} />
          </Row>
        </Container>
      </section>
    </Title>
  );
};

export default Home;
