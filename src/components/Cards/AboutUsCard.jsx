import React from "react";
import chef from "../../assets/chef1.jpg";
import { Link } from "react-router-dom";
import useScrollTop from "../../hooks/useScrollTop";

const AboutUsCard = () => {
  const { scrollTop } = useScrollTop();

  return (
    <div>
      <div class="about">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="about-img">
                <img src={chef} alt="Image" />
                <button
                  type="button"
                  class="btn-play"
                  data-toggle="modal"
                  data-src="https://www.youtube.com/embed/tJlzIJaokVY"
                  data-target="#videoModal"
                >
                  <span></span>
                </button>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="about-content">
                <div class="section-header">
                  <p>About Us</p>
                  <h2>Cooking Since 2019</h2>
                </div>
                <div class="about-text">
                  <p>
                    Established on 9th February 2019, Ramu ki Sabji is a
                    pioneering food parcel service that has been delighting
                    taste buds with authentic Indian and Chinese cuisine. With a
                    primary focus on Indian food, particularly Paneer Sabji, the
                    organization has garnered a reputation for its delectable
                    and expertly crafted dishes that showcase the rich culinary
                    heritage of India.
                  </p>
                  <p>
                    Over the years, Ramu ki Sabji has built a loyal customer
                    base, with rave reviews and testimonials praising their
                    scrumptious offerings and attentive service. The
                    organization has also actively participated in community
                    outreach programs, supporting charitable initiatives and
                    contributing to the welfare of society.
                  </p>
                  <Link
                    class="btn custom-btn"
                    to="/booking"
                    onClick={scrollTop}
                  >
                    Book A Table
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="videoModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div class="embed-responsive embed-responsive-16by9">
                <iframe
                  class="embed-responsive-item"
                  src=""
                  id="video"
                  allowscriptaccess="always"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCard;
