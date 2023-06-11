import React, { useEffect } from "react";
import { Col } from "reactstrap";
import "../../styles/product-card.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slice/cartSlice";
import { ToastContainer, toast } from 'react-toastify';
const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );
   toast.success("Added to Cart Successfully")
  };
  return (
    <Col lg="3" md="6" sm="12">
      <div className="product_item">
        <div className="product_img">
          <Link to={`/shop/${item.id}`}>
            <motion.img
              whilehover={{ scale: 0.9 }}
              src={item.imgUrl}
              alt=""
            />
          </Link>
        </div>
        <div className="p-2 product_info">
          <h3 className="Product_item">{item.productName}</h3>
          <span className="text-center d-block bg-light fw-bold">
            {item.category}
          </span>
        </div>
        <div className="product_card-bottom d-flex align-items-center justify-content-between">
          <span className="fw-bold text-primary">${item.price}</span>
          <motion.span
            onClick={addToCart}
            whileTap={{ scale: 1.1 }}
            className="fs-4"
            style={{ cursor: "pointer" }}
          >
            {" "}
            <i class="ri-add-circle-fill"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};
export default ProductCard;
