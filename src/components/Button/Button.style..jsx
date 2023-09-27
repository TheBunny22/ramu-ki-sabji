import styled from "styled-components";
import { colors } from "../../theme/theme";

const PrimaryButton = styled.button`
  padding: ${(props) => (props.p ? props.p : "")};
  margin: ${(props) => (props.m ? props.m : "")};
  background: ${(props) =>
    props.variant === "outline" ? "transparent" : colors.Orange};
  border: ${(props) =>
    props.variant === "outline" ? `2px solid ${colors.Orange}` : colors.Orange};
  border-radius: 0.5rem;
  font-weight: 700;
  color: ${colors.White};
`;

const SecondaryButton = styled.button`
  padding: ${(props) => (props.p ? props.p : "")};
  margin: ${(props) => (props.m ? props.m : "")};
  background: ${(props) =>
    props.variant === "outline" ? "transparent" : colors.Green};
  border: ${(props) =>
    props.variant === "outline" ? `2px solid ${colors.Green}` : colors.Green};
  border-radius: 0.5rem;
  font-weight: 700;
  color: ${colors.White};
`;

const ButtonV2 = styled.button`
  width: 100%;
  color: #ffffff;
  background: #fbaf32;
  border: 1px solid #fbaf32;
  border-radius: 10%;
  padding:.3rem 1rem;
`;
const ButtonV2Green = styled.button`
  width: 100%;
  background: #719a0a;
  color: #ffffff;
  border: 1px solid #719a0a;
  border-radius: 10%;
  padding:.3rem 1rem;
  transition: 0.2s;
  font-weight: 700;

  &:hover{
    color : #ffffff;
    background: #fbaf32;
    border: 1px solid #fbaf32;
  }
`;

export { PrimaryButton, SecondaryButton , ButtonV2 , ButtonV2Green};
