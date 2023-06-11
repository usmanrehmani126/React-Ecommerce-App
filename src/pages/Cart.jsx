import React from "react";
import "../styles/cart.css";
import Title from "../components/Title/Title";
import CommonSection from "../components/UI/CommonSection";
import { Col, Container, Row } from "reactstrap";
import tdimg from "../assets/images/table.jpg";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../redux/slice/cartSlice";
import { Link } from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Title title="Cart">
      <CommonSection title="Shopping Cart" />
      <Container>
        <Row>
          <Col lg="9">
            {cartItems.length === 0 ? (
              <h2 className="text-center text-primary mb-5">
                Nothing in the Cart
              </h2>
            ) : (
              <table className="table borderd">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((items, index) => (
                    <Tr items={items} />
                  ))}
                </tbody>
              </table>
            )}
          </Col>
          <Col lg="3" className="bg-light">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h6 className="">Subtotal</h6>
              <span className="fw-bold fs-5">${totalAmount}</span>
            </div>
            <p className="mt-3 fs-6">taxes and shipping will calculate in checkout</p>
            <div className="py-4">
              <button className="buy_button mb-3 w-100">
                <Link to="/cart">Continue Shopping</Link>
              </button>
              <button className="buy_button w-100">
                <Link to="/checkout">Checkout </Link>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </Title>
  );
};
const Tr = ({ items }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(items.id));
  };
  return (
    <tr>
      <td>
        <img src={items.imgUrl} className="" alt="" />
      </td>
      <td>{items.productName}</td>
      <td>{items.price}$</td>
      <td>{items.quantity}</td>
      <td>
        <motion.i
          onClick={deleteProduct}
          whileTap={{ scale: 1.1 }}
          class="ri-delete-bin-5-line"
        ></motion.i>
      </td>
    </tr>
  );
};
export default Cart;
