import { Carousel } from "react-bootstrap";
import Slide from "../../assets/Banner.jpg";
import Slide2 from "../../assets/Banner2.jpg";
import Slide3 from "../../assets/Banner3.jpg";
import {
  ButtonWrapper,
  CaraousalItemCover,
  Caraousalheading,
  ImageCaraousal,
} from "./CarousalFade.style";
import { PrimaryButton, SecondaryButton } from "../Button/Button.style.";
function CarouselFade() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <ImageCaraousal
          className="d-block w-100"
          src={Slide}
          alt="First slide"
        />
        <Carousel.Caption>
          <CaraousalItemCover fd="columns">
            <Caraousalheading>Spice up your life with paneer</Caraousalheading>
            <ButtonWrapper>
              <PrimaryButton p="0.5rem 1rem">Order</PrimaryButton>
              <SecondaryButton p="0.5rem 1rem" >Menu</SecondaryButton>
            </ButtonWrapper>
          </CaraousalItemCover>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ImageCaraousal
          className="d-block w-100"
          src={Slide2}
          alt="second slide"
        />

        <Carousel.Caption>
          <CaraousalItemCover>
            <Caraousalheading>We’re always in the mood for food</Caraousalheading>
            <ButtonWrapper>
              <PrimaryButton p="0.5rem 1rem">Order</PrimaryButton>
              <SecondaryButton p="0.5rem 1rem" >Menu</SecondaryButton>
            </ButtonWrapper>
          </CaraousalItemCover>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ImageCaraousal
          className="d-block w-100"
          src={Slide3}
          alt="third slide"
        />
        <Carousel.Caption>
          <CaraousalItemCover>
            <Caraousalheading>Food that’s full of surprises</Caraousalheading>
            <ButtonWrapper>
              <PrimaryButton p="0.5rem 1rem">Order</PrimaryButton>
              <SecondaryButton p="0.5rem 1rem" >Menu</SecondaryButton>
            </ButtonWrapper>
          </CaraousalItemCover>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;
