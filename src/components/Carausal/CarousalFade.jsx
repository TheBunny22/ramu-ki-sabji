import { Carousel } from "react-bootstrap";
import Slide from "../../assets/Banner.jpg";
import Slide2 from "../../assets/Banner2.jpg";
import Slide3 from "../../assets/Banner3.jpg";
import { ImageCover } from "./CarousalFade.style";
function CarouselFade() {
  return (
    <Carousel fade indicators={false}>
      <Carousel.Item>
        <ImageCover>
          <img src={Slide} />
        </ImageCover>
        <Carousel.Caption>
          <div className="carousel">
            <div className="carousel-text">
              <h1>
                Best <span>Quality</span> Ingredients
              </h1>
              <p>
                Experience a World of Flavour and Delight with Our Exceptional
                Selection of the Finest, Freshest, and Highest-Quality
                Ingredients for Every Culinary Creation.
              </p>
              <div className="carousel-btn">
                <a className="btn custom-btn" href="">
                  View Menu
                </a>
                <a className="btn custom-btn" href="">
                  Book Table
                </a>
              </div>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ImageCover>
          <img src={Slide2} />
        </ImageCover>
        <Carousel.Caption>
          <div className="carousel">
            <div className="carousel-text">
              <h1>
                World’s <span>Best</span> Chef
              </h1>
              <p>
                Embark on a Gastronomic Journey Beyond Compare, Crafted by the
                Expertise of Our Culinary Maestros, as We Redefine Excellence in
                Every Dish.
              </p>
              <div className="carousel-btn">
                <a className="btn custom-btn" href="">
                  View Menu
                </a>
                <a className="btn custom-btn" href="">
                  Book Table
                </a>
              </div>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ImageCover>
          <img src={Slide3} />
        </ImageCover>
        <Carousel.Caption>
          <div className="carousel">
            <div className="carousel-text">
              <h1>
                Fastest Order <span>Delivery</span>
              </h1>
              <p>
                Experience the Ultimate Convenience and Speed in Satisfying Your
                Appetite with Our Lightning-Fast Order Delivery Service –
                Bringing Your Favourite Flavours to Your Doorstep in No Time.
              </p>
              <div className="carousel-btn">
                <a className="btn custom-btn" href="">
                  View Menu
                </a>
                <a className="btn custom-btn" href="">
                  Book Table
                </a>
              </div>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;
