import React from "react";
import { Link } from "react-router-dom";
import useScrollTop from "../../hooks/useScrollTop";

const Footer = () => {
  const { scrollTop } = useScrollTop();
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="row">
              <div className="col-md-6">
                <div className="footer-contact">
                  <h2>Our Address</h2>
                  <p>
                    <i className="fa fa-map-marker-alt"></i>14 Adarsh
                    Complex,oppo. of Krishna Sweat Mart ,Sahkarijin Road,
                    Himmatnagar - 383001{" "}
                  </p>
                  <p>
                    <i className="fa fa-phone-alt"></i>+91 94272 68870
                  </p>
                  <p>
                    <i className="fa fa-envelope"></i>info@ramukisabji.com
                  </p>

                  <div className="footer-social">
                    <a href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="footer-link">
                  <h2>Quick Links</h2>
                  <Link to="/" onClick={scrollTop} >Home</Link>
                  <Link to="/about" onClick={scrollTop} >About Us</Link>
                  <Link to="/menu" onClick={scrollTop} >Menu</Link>
                  <Link to="/booking" onClick={scrollTop} >Booking</Link>
                  {/* <a href="">Terms of use</a>
                  <a href="">Privacy policy</a>
                  <a href="">Cookies</a>
                  <a href="">Help</a>
                  <a href="">FQAs</a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="footer-newsletter">
              <h2>Newsletter</h2>
              <p>
                Join our growing community of food enthusiasts and elevate your
                home cooking experience. Subscribe today, and as a token of our
                appreciation, you'll receive a special welcome gift with your
                first food parcel delivery.
              </p>
              <div className="form">
                <input className="form-control" placeholder="Email goes here" />
                <button className="btn custom-btn">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p>
            Copyright &copy; <a href="/">Ramu Ki Sabji</a> , All Right Reserved.
          </p>
          <br />
          <p>
            Designed By <a href="">Harihar Upadhyay</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
