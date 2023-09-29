import React, { useRef, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import styled from "styled-components";
import Logo from "../assets/logo1.png";
import "./login.css";
import { media } from "../theme/theme";
import { Link } from "react-router-dom";
import { NavLogo } from "../components/Navbar/Navbar.style";
import { CustomLink } from "./Registration";
import { Button } from "react-bootstrap";


const ResBox = styled.div`
  ${media.desktop`
    width:35vw;
    `}
`;

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [check, setCheck] = useState(false);
  function handleSubmit() {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log("Email:", email);
    console.log("Password:", password);
    console.log("terms agree", check);
  }

  return (
    <MDBContainer
      fluid
      className="p-4 background-radial-gradient overflow-hidden"
    >
      <MDBRow>
        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <CustomLink to="/" className="px-3" variant="light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-arrow-left-short"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
              />
            </svg>{" "}
            Back to Home
          </CustomLink>
          <h1
            className="my-5 display-3 fw-bold ls-tight px-3"
            style={{ color: "hsl(218, 81%, 95%)" }}
          >
            Welcome Back to <br />
            <span style={{ color: "hsl(218, 81%, 75%)" }}>Ramu Ki Sabji</span>
          </h1>

          <p className="px-3" style={{ color: "hsl(218, 81%, 85%)" }}>
            Log in to your account and savor the flavors of our delicious
            dishes.
          </p>
        </MDBCol>

        <MDBCol md="6" className="position-relative">
          <div
            id="radius-shape-1"
            className="position-absolute rounded-circle shadow-5-strong"
          ></div>
          <div
            id="radius-shape-2"
            className="position-absolute shadow-5-strong"
          ></div>
          <ResBox>
            <MDBCard className="my-5 bg-glass">
              <MDBCardBody className="p-5">
                <div className="text-center">
                  <Link to="/">
                    <NavLogo src={Logo} alt="Logo" />
                  </Link>
                  <h1>Login</h1>
                </div>
                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="Email"
                  id="email"
                  name="email"
                  ref={emailRef}
                  type="email"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="Password"
                  id="password"
                  ref={passwordRef}
                  type="password"
                />

                <div className="d-flex justify-content-center mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value={check}
                    onChange={(e) => setCheck(e.target.checked)}
                    id="flexCheckDefault"
                    label="Remember me"
                  />
                </div>

                <Button style={{width:"100%" , marginBottom:"10px"}} onClick={handleSubmit}>
                  sign In
                </Button>
                <div className="text-center">
                  <CustomLink to="/register">Create New Account</CustomLink>
                </div>
              </MDBCardBody>
            </MDBCard>
          </ResBox>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
