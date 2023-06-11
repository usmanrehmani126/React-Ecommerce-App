import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import Title from "../components/Title/Title";
import CommonSection from "../components/UI/CommonSection";
import { signInWithEmailAndPassword } from "firebase/auth";
import "../styles/Login.css";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      setLoading(false);
      toast.success("User LoggedIn successfully");
      navigate("/checkout");
    } catch (error) {
      setLoading(false);
      toast.error("something went wrong");
    }
  };
  return (
    <Title title="Login">
      <CommonSection title="Login Page" />
      <section>
        <Container>
          <Row className="tetx-center">
            {loading ? (
              <Col lg="12" className="text-center">
                <h5 className="fw-bold">Loading.....</h5>
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center">
                <h3 className="fw-bold fs-4 mb-4 ">Login</h3>
                <Form className="auth_form " onSubmit={signIn}>
                  <FormGroup className="form_group">
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      className="w-100"
                      type="email"
                      placeholder="Enter email"
                    />
                  </FormGroup>
                  <FormGroup className="form_group">
                    <input
                      type="password"
                      placeholder="Enter password"
                      className="w-100"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </FormGroup>
                  <button className="auth_btn w-100">Login</button>
                  <p className="mt-3">
                    Dont't have an account? <br />
                    <Link to="/register" className="fw-bold text-light">
                      Create an Account
                    </Link>
                  </p>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Title>
  );
};

export default Login;
