import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Col, Container, Row } from "reactstrap";
import products from "../assets/data/products";
import Title from "../components/Title/Title";
import CommonSection from "../components/UI/CommonSection";
import { cartActions } from "../redux/slice/cartSlice";
import "../styles/product-details.css";
const ProductDetails = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addtocart = () => {
    dispatch(
      cartActions.addItem({
        id,
        productName,
        price,
        image: imgUrl,
      })
    );
    toast.success("Product Added Successfully")
  };
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const {
    imgUrl,
    price,
    productName,
    avgRating,
    review,
    description,
    shortDesc,
  } = product;

  return (
    <Title title={productName}>
      <CommonSection title={productName} />
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <div className="text-center">
                <img alt="..." className="img-fluid" src={imgUrl} />
              </div>
            </Col>
            <Col lg="6">
              <div className="productDetails">
                <h2>{productName}</h2>
                <div className="product_rating d-flex align-items-center gap-3">
                  <div>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-half-s-fill"></i>
                    </span>
                  </div>
                  <p>({avgRating} ratings)</p>
                </div>
                <span className="product_price">${price}</span>
                <p className=" py-2">{shortDesc}</p>
                <button className="buy_btn mt-3" onClick={addtocart}>Add to Cart</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Title>
  );
};

export default ProductDetails;
