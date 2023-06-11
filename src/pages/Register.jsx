import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import Title from "../components/Title/Title";
import CommonSection from "../components/UI/CommonSection";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { auth } from "../firebase.config";
import { storage } from "../firebase.config";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        (error) => {
          toast.error(error.massage);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(user, {
              displayName: username,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: username,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );
      setLoading(false);
      toast.success("Account created successfully");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong");
    }
  };
  return (
    <Title title="Register">
      <CommonSection title="SignUp Page" />
      <section>
        <Container>
          <Row className="tetx-center">
            {loading ? (
              <Col lg="12" className="text-center">
                <h4 className="fw-bold">Loading....</h4>
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center">
                <h3 className="fw-bold fs-4 mb-4 ">Sign Up</h3>
                <Form className="auth_form " onSubmit={signup}>
                  <FormGroup className="form_group">
                    <input
                      onChange={(e) => setUserName(e.target.value)}
                      value={username}
                      className="w-100"
                      type="text"
                      placeholder="User Name"
                    />
                  </FormGroup>
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
                  <FormGroup className="form_group">
                    <input
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </FormGroup>
                  <button className="auth_btn w-100">Register</button>
                  <p className="mt-3">
                    Already have an account? <br />
                    <Link to="/login" className="fw-bold text-light">
                      Login
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

export default Register;
