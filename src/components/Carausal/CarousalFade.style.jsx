import { styled } from "styled-components";
import { colors } from "../../theme/theme";

const ImageCaraousal = styled.img`
  height: 100vh;
  width: 100%;
  object-fit: cover;
`;
const ImageCover = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  object-fit: cover;
  img {
    height: 100vh;
    width: 100%;
    object-fit: cover;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6); /* Semi-transparent black layer */
  }
`;

const Caraousalheading = styled.h3`
  padding: 0.5rem;
  background: rgba(256, 256, 256, 0.3);
  backdrop-filter: blur(1rem);
  font-weight: 800;
  border-radius: 1rem;
  color: black;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;
const CaraousalItemCover = styled.div`
  display: flex;
  justify-content: ${(props) => (props.justy ? props.justy : "center")};
  flex-direction: column;
  align-items: ${(props) => (props.align ? props.align : "center")};
  gap: ${(props) => (props.gap ? props.gap : "")};
`;
export {
  ImageCaraousal,
  Caraousalheading,
  CaraousalItemCover,
  ButtonWrapper,
  ImageCover,
};
