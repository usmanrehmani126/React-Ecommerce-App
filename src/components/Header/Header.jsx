import React, { useRef, useState } from "react";
import { Container, Row } from "reactstrap";
import "./header.css";
import logo from "../../assets/images/eco-logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import userImage from "../../assets/images/user-icon.png";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import useAuth from "../../custom-hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const Header = () => {
  const menuRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuToggle = () => {
    menuRef.current.classList.toggle("active_menu");
  };
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out ");
        navigate("/home");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const navigateToCart = () => {
    navigate("/cart");
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="header bg-white">
      <Container>
        <Row>
          <div className="nav_wrapper mt-2  ">
            <div className="logo">
              <img src={logo} alt="logo" />
              <h1>
                <NavLink to="/home">Multimart</NavLink>
              </h1>
            </div>

            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                <span className="fs-4 fw-bold close_menu position-absolute top-0 start-0">
                  <i class="ri-close-fill"></i>
                </span>
                <li className="nav_item">
                  <NavLink
                    to="/home"
                    className={(navClass) =>
                      navClass.isActive ? "active_menu" : ""
                    }
                  >
                    HOME
                  </NavLink>
                </li>
                <li className="nav_item">
                  <NavLink
                    to="/shop"
                    className={(navClass) =>
                      navClass.isActive ? "active_menu" : ""
                    }
                  >
                    SHOP
                  </NavLink>
                </li>
                <li className="nav_item">
                  <NavLink
                    to="/cart"
                    className={(navClass) =>
                      navClass.isActive ? "active_menu" : ""
                    }
                  >
                    CART
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="nav_icons">
              <span className="fav_icon">
                <i class="ri-heart-line"></i>
                <span className="badge">0</span>
              </span>
              <span className="cart_icon" onClick={navigateToCart}>
                <i class="ri-shopping-cart-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>

              <div className="profile">
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={currentUser ? currentUser.photoURL : userImage}
                  alt=""
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                />

                <div className="profile_actions">
                  {currentUser ? (
                    //

                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={handleClose}>
                        <span onClick={logout}>Logout</span>
                      </MenuItem>
                    </Menu>
                  ) : (
                    <div>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <Link to="/register">
                          <MenuItem onClick={handleClose}>SignIn</MenuItem>
                        </Link>
                        <Link to="/login">
                          <MenuItem onClick={handleClose}>Login</MenuItem>
                        </Link>
                      </Menu>
                    </div>
                  )}
                </div>
              </div>
              <div className="mobile_menu">
                <span onClick={menuToggle}>
                  <i class="ri-menu-2-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
