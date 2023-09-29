import React from "react";
import { Link } from "react-router-dom";
import useScrollTop from "../../hooks/useScrollTop";
import Banner from "../../assets/Banner.jpg";
import Banner2 from "../../assets/Banner2.jpg";
import Banner3 from "../../assets/Banner3.jpg";
import Banner4 from "../../assets/home-cover.jpg";

const FeaturesDiscrip = () => {
  const { scrollTop } = useScrollTop();
  return (
    <div className="feature">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="section-header">
              <p>Why Choose Us</p>
              <h2>Our Key Features</h2>
            </div>
            <div className="feature-text">
              <div className="feature-img">
                <div className="row">
                  <div className="col-6">
                    <img src={Banner} alt="Image" style={{ scale: "1.5" }} />
                  </div>
                  <div className="col-6">
                    <img src={Banner2} alt="Image" />
                  </div>
                  <div className="col-6">
                    <img src={Banner3} alt="Image" style={{ scale: "1.5" }} />
                  </div>
                  <div className="col-6">
                    <img src={Banner4} alt="Image" />
                  </div>
                </div>
              </div>
              <p>
                At Ramu ki Sabji, we take pride in being your go-to destination
                for farm-fresh, high-quality vegetables. With a commitment to
                variety, affordability, and sustainability, we strive to make
                healthy living both accessible and enjoyable for you and your
                family.
              </p>
              <p>
              Thank you for choosing Ramu ki Sabji, your trusted partner for wholesome and delicious vegetable delights.
              </p>
              <Link to="/booking" onClick={scrollTop} className="btn custom-btn">
                Book A Table
              </Link>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="row">
              <div className="col-sm-6">
                <div className="feature-item">
                  <i className="flaticon-cooking"></i>
                  <h3>World’s best Chef</h3>
                  <p>
                    Experience culinary excellence with our world-renowned chef.
                    Immerse yourself in a gastronomic journey where every dish
                    is a masterpiece crafted with passion and precision.
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="feature-item">
                  <i className="flaticon-vegetable"></i>
                  <h3>Natural ingredients</h3>
                  <p>
                    We use only the finest natural ingredients sourced from the
                    earth. Our commitment to quality ensures that every bite is
                    filled with wholesome goodness and authentic flavors.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="feature-item">
                  <i className="flaticon-medal"></i>
                  <h3>Best quality products</h3>
                  <p>
                    Quality is our top priority. We select the best products for
                    your enjoyment, guaranteeing that every meal is a delightful
                    experience characterized by freshness and exceptional taste.
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="feature-item">
                  <i className="flaticon-meat"></i>
                  <h3>Fresh vegetables</h3>
                  <p>
                    Our dedication to freshness shines through in every dish. We
                    handpick the crispiest, juiciest vegetables, delivering a
                    burst of natural flavors that elevate your dining
                    experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="feature-item">
                  <i className="flaticon-courier"></i>
                  <h3>Fastest door delivery</h3>
                  <p>
                    Enjoy the convenience of swift doorstep delivery. With our
                    efficient service, your favorite dishes are just a click
                    away, arriving at your home piping hot and ready to savor.
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="feature-item">
                  <i className="flaticon-fruits-and-vegetables"></i>
                  <h3>Green Veggies & Low fat oil</h3>
                  <p>
                    Health and taste harmonize in our cuisine. We prioritize
                    your well-being by using green, leafy vegetables and low-fat
                    oils, ensuring your meal is both nutritious and delicious.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesDiscrip;
