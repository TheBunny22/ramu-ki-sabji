import React from "react";
import { Link } from "react-router-dom";

// contain the Three main catagories of food
const FeaturesCard = () => {
  const scrollTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  return (
    <div class="food mt-0">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-4">
            <div class="food-item">
              <i class="flaticon-snack"></i>
              <h2>Chinese Delights</h2>
              <p>
                Discover the best of Chinese cuisine with our savory Manchurian
                and tempting Hakka Noodles. Dive into a world of bold flavors
                and aromatic spices that will leave you craving for more.
              </p>
              <a onClick={scrollTop} >
                <Link to="/menu">View Menu</Link>
              </a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="food-item">
              <i class="flaticon-burger"></i>
              <h2>Paneer Perfection</h2>
              <p>
                Paneer lovers rejoice! Our Paneer Sabji is a creamy and
                flavorful masterpiece that elevates your meal. Experience pure
                delight with every bite. Our chef's secret blend of spices makes
                it truly exceptional.
              </p>
              <a onClick={scrollTop}>
                <Link to="/menu">View Menu</Link>
              </a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="food-item">
              <i class="flaticon-cocktail"></i>
              <h2>Punjabi Feast</h2>
              <p>
                Enjoy a hearty Punjabi lunch with our delicious combo. Five soft
                chapatis, a rich Paneer Sabji, mixed veggies, Dal-Fry, and
                fragrant Jeera rice – a satisfying meal that hits all the right
                notes.
              </p>
              <a onClick={scrollTop}>
                <Link to="/menu">View Menu</Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
