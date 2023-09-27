import React from "react";
import styled from "styled-components";
import { ButtonV2, ButtonV2Green } from "../Button/Button.style.";

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

  p {
    position: relative;
    margin: 5px 0 0 0;
    float: left;
    display: block;
  }
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0 0;
`;
function MenuComponent({ imageSrc, itemName, itemPrice, itemDescription }) {
  return (
    <MenuItem>
      <MenuImg>
        <Image src={imageSrc} alt="Image" />
      </MenuImg>
      <MenuText>
        <h3>
          <span>{itemName}</span> <strong>₹{itemPrice}</strong>
        </h3>
        <Bottom>
          <p>{itemDescription}</p>
          <div>
            <ButtonV2Green>Buy</ButtonV2Green>
          </div>
        </Bottom>
      </MenuText>
    </MenuItem>
  );
}

export default MenuComponent;
