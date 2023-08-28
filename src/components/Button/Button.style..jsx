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

export { PrimaryButton, SecondaryButton };
