import React from "react";
import { Link } from "react-router-dom";
import useScrollTop from "../../hooks/useScrollTop";

// contain the Three main catagories of food
const FeaturesCard = () => {
  const { scrollTop } = useScrollTop();
  return (
    <div className="food mt-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <div className="food-item">
              <i className="flaticon-snack"></i>
              <h2>Chinese Delights</h2>
              <p>
                Discover the best of Chinese cuisine with our savory Manchurian
                and tempting Hakka Noodles. Dive into a world of bold flavors
                and aromatic spices that will leave you craving for more.
              </p>

              <Link to="/menu" onClick={scrollTop}>View Menu</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="food-item">
              <i className="flaticon-burger"></i>
              <h2>Paneer Perfection</h2>
              <p>
                Paneer lovers rejoice! Our Paneer Sabji is a creamy and
                flavorful masterpiece that elevates your meal. Experience pure
                delight with every bite. Our chef's secret blend of spices makes
                it truly exceptional.
              </p>
              <Link to="/menu" onClick={scrollTop}>View Menu</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="food-item">
              <i className="flaticon-cocktail"></i>
              <h2>Punjabi Feast</h2>
              <p>
                Enjoy a hearty Punjabi lunch with our delicious combo. Five soft
                chapatis, a rich Paneer Sabji, mixed veggies, Dal-Fry, and
                fragrant Jeera rice – a satisfying meal that hits all the right
                notes.
              </p>
              <Link to="/menu" onClick={scrollTop}>View Menu</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
