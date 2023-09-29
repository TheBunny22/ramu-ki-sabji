import React from "react";

const ContactBlock = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="section-header text-center">
          <p>Contact Us</p>
          <h2>Contact For Any Query</h2>
        </div>
        <div className="row align-items-center contact-information">
          <div className="col-md-6 col-lg-3">
            <div className="contact-info">
              <div className="contact-icon">
                <i className="fa fa-map-marker-alt"></i>
              </div>
              <div className="contact-text">
                <h3>Address</h3>
                <p>
                  14 Adarsh Complex, Sahkarijin
                  Road, Himmatnagar - 383001
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="contact-info">
              <div className="contact-icon">
                <i className="fa fa-phone-alt"></i>
              </div>
              <div className="contact-text">
                <h3>Call Us</h3>
                <p>+91 94272 68870</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="contact-info">
              <div className="contact-icon">
                <i className="fa fa-envelope"></i>
              </div>
              <div className="contact-text">
                <h3>Email Us</h3>
                <p>info@ramukisabji.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="contact-info">
              <div className="contact-icon">
                <i className="fa fa-share"></i>
              </div>
              <div className="contact-text">
                <h3>Follow Us</h3>
                <div className="contact-social">
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
          </div>
        </div>
        <div className="row contact-form">
          <div className="col-md-6">
            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?&amp;hl=en&amp;q=ramu ki sabji&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              width="600" // Set your desired width
              height="450" // Set your desired height
            ></iframe>
          </div>
          <div className="col-md-6">
            <div id="success"></div>
            <form name="sentMessage" id="contactForm" noValidate="novalidate">
              <div className="control-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required="required"
                  data-validation-required-message="Please enter your name"
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                  required="required"
                  data-validation-required-message="Please enter your email"
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Subject"
                  required="required"
                  data-validation-required-message="Please enter a subject"
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Message"
                  required="required"
                  data-validation-required-message="Please enter your message"
                ></textarea>
                <p className="help-block text-danger"></p>
              </div>
              <div>
                <button
                  className="btn custom-btn"
                  type="submit"
                  id="sendMessageButton"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBlock;
