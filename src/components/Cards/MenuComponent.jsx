import { useState } from "react";
import styled from "styled-components";
import { ButtonV2, ButtonV2Green } from "../Button/Button.style.";
import MenuItemDis from "./MenuItemDis";
import StarRating from "../StarRating";
import NumberInput from "../Button/NumberInput";
import NumberInputs from "../Button/NumberInput";
import { media } from "../../theme/theme";
// import { Button, ButtonGroup } from "react-bootstrap";
const MenuItem = styled.div`
  position: relative;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 0px 14px 7px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 1rem;
  transition: 0.2s;

  &:hover {
    box-shadow: 0px 0px 14px 7px rgba(0, 0, 0, 0.3);
  }
`;

const MenuImg = styled.div`
  width: 80px;
  margin-right: 20px;
  border-radius: 100px;
`;

const Image = styled.img`
  width: 100%;
`;

const MenuText = styled.div`
  width: calc(100% - 100px);

  h3 {
    position: relative;
    display: block;
    font-size: 22px;
    font-weight: 700;

    &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 0;
      top: 13px;
      left: 0;
      border-top: 2px dotted #cccccc;
      z-index: -1;
    }
  }

  h3 span {
    display: inline-block;
    float: left;
    padding-right: 5px;
    background: #ffffff;
  }

  h3 strong {
    display: inline-block;
    float: right;
    padding-left: 5px;
    color: #fbaf32;
    background: #ffffff;
  }
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0 0;
`;

const Button = styled.button`
  border: 0.2rem solid #719a0a;
  padding: 0.2rem 0.5rem;
  background-color: ${(props) => (props.bg ? "#719a0a" : "transparent")};
  color: ${(props) => (props.bg ? "#ffffff" : "#252525")};

  cursor: pointer;
  text-align: center;
  font-size: 16px;
  font-weight: bolder;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: green;
    color: white;
  }
`;

const DisBox = styled.div`
  display: flex;
  /* justify-content: space-between; */
  gap: 0.5rem;
  padding: 0.2rem;
  width: 100%;
  align-items: left;
  ${media.mobile`
  flex-direction:column;
  `}
  p {
    position: relative;
    margin: 5px 0 0 0;
    float: left;
    display: block;
    ${media.mobile`
    margin : 0;
  `}
  }
`;

const Wrapper = styled.div`
  display: flex;
  /* border: 1px solid red; */
  justify-content: right;
  width: 100%;
  gap: 1rem;
  ${media.mobile`
  width : calc(100%-100px);
    justify-content: space-between;
  `}
`;

function MenuComponent({
  imageSrc,
  itemName,
  itemPrice,
  itemDescription,
  rating,
  inStock,
}) {
  const [show, setShow] = useState(false);

  const showModel = () => setShow(true);

  return (
    <>
      <MenuItemDis showModal={show} />
      <MenuItem onClick={showModel}>
        <MenuImg>
          <Image src={imageSrc} alt="Image" />
        </MenuImg>
        <MenuText>
          <h3>
            <span>{itemName}</span> <strong>₹{itemPrice}</strong>
          </h3>
          <Bottom>
            <DisBox>
              <p>{itemDescription}</p>
              <Wrapper>
                <StarRating rating={rating} />
                <NumberInputs
                  onChange={(a) => console.log(a)}
                  value={0}
                  inStock={inStock}
                />
              </Wrapper>
            </DisBox>
          </Bottom>
        </MenuText>
      </MenuItem>
    </>
  );
}

export default MenuComponent;
