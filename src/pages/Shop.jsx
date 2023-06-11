import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Title from "../components/Title/Title";
import CommonSection from "../components/UI/CommonSection";
import "../styles/shop.css";
import products from "../assets/data/products";
import ProductList from "../components/UI/ProductList.jsx";
const Shop = () => {
  const [productsData, setProductData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "sofa") {
      const filteredProductSofa = products.filter(
        (item) => item.category === "sofa"
      );
      setProductData(filteredProductSofa);
    }
    if (filterValue === "mobile") {
      const filteredProductMobile = products.filter(
        (item) => item.category === "mobile"
      );
      setProductData(filteredProductMobile);
    }
    if (filterValue === "wireless") {
      const filteredProductMobile = products.filter(
        (item) => item.category === "wireless"
      );
      setProductData(filteredProductMobile);
    }
    if (filterValue === "chair") {
      const filteredProductMobile = products.filter(
        (item) => item.category === "chair"
      );
      setProductData(filteredProductMobile);
    }
    if (filterValue === "watch") {
      const filteredProductMobile = products.filter(
        (item) => item.category === "watch"
      );
      setProductData(filteredProductMobile);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchProduct = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductData(searchProduct);
  };

  return (
    <div className="mt-5">
      <Title title="Shop">
        <CommonSection title="Products" />
        <section>
          <Container>
            <Row className="text-center">
              <Col lg="3" md="4" className="mb-3">
                <div className="filter_widget">
                  <select onChange={handleFilter}>
                    <option>Filter By Category</option>
                    <option value="sofa">Sofa</option>
                    <option value="mobile">Mobile</option>
                    <option value="chair">Chair</option>
                    <option value="watch">Watch</option>
                    <option value="wireless">Wireless</option>
                  </select>
                </div>
              </Col>
              <Col lg="3" md="4" className="md:mb-0 mb-4">
                <div className="filter_widget">
                  <select>
                    <option>Sort By</option>
                    <option value="asce">Ascending</option>
                    <option value="desc">Descending</option>
                  </select>
                </div>
              </Col> 
              <Col lg="6" md="8" className="">
                <div className="search-box">
                  <input
                    onChange={handleSearch}
                    type="text"
                    placeholder="search products here....."
                  />
                  <span className="">
                    <i class="ri-search-line"></i>
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <Row>
              {productsData.length === 0 ? (
                <h4
                  className="text-center text-danger
                "
                >
                  Opps Nothing Found! 
                </h4>
              ) : (
                <ProductList data={productsData} />
              )}
            </Row>
          </Container>
        </section>
      </Title>
    </div>
  );
};

export default Shop;
