import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import Logo from "../assets/logo1.png";
import "./login.css";
import { NavLogo } from "../components/Navbar/Navbar.style";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "react-bootstrap";

export const CustomLink = styled(Link)`
  color: ${(props) =>
    props.variant === "light" ? "hsl(218, 81%, 75%)" : "#1266f1"};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: ${(props) =>
      props.variant === "light" ? "hsl(218, 81%, 95%)" : "hsl(218, 81%, 75%)"};
  }
`;

function Registration() {
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
            Join <br />
            <span style={{ color: "hsl(218, 81%, 75%)" }}>
              Ramu Ki Sabji
            </span>{" "}
            Today!
          </h1>

          <p className="px-3" style={{ color: "hsl(218, 81%, 85%)" }}>
            Sign up now to become a part of our vibrant culinary community.
            Experience the freshest ingredients and authentic flavors that
            define Ramu Ki Sabji."
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

          <MDBCard className="my-5 bg-glass">
            <MDBCardBody className="p-5">
              <MDBRow>
                <div className="text-center">
                  <Link to="/">
                    <NavLogo src={Logo} />
                  </Link>
                  <h1>Registration</h1>
                </div>
                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    placeholder="First name"
                    id="form1"
                    type="text"
                  />
                </MDBCol>

                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    placeholder="Last name"
                    id="form2"
                    type="text"
                  />
                </MDBCol>
              </MDBRow>
              <MDBInput
                wrapperClass="mb-4"
                placeholder="Email"
                id="form3"
                type="email"
              />
              <MDBRow>
                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    placeholder="Password"
                    id="form1"
                    type="password"
                  />
                </MDBCol>

                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    placeholder="Confirm Password"
                    id="form2"
                    type="password"
                  />
                </MDBCol>
              </MDBRow>
              <MDBInput
                wrapperClass="mb-4"
                placeholder="Mobile"
                id="mobile"
                type="Text"
              />

              <div className="d-flex justify-content-center mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  label="Agree to all T&C + Subscribe to our newsletter"
                  id="flexCheckDefault"
                />
              </div>

              <Button style={{ width: "100%", marginBottom: "10px" }}>
                sign up
              </Button>

              <div className="text-center">
                <CustomLink to="/login">Already Have Account</CustomLink>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Registration;
