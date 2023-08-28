import { styled } from "styled-components";
import { colors } from "../../theme/theme";

const ImageCaraousal = styled.img`
    height: 50vh;
    object-fit: cover;
`;

const Caraousalheading = styled.h3`
    padding: .5rem;
    background: rgba(256,256,256,0.3);
    backdrop-filter:blur(1rem);
    font-weight: 800;
    border-radius: 1rem;
    color  : black;
`;

const ButtonWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 1rem;
`
;
const CaraousalItemCover = styled.div`
    display: flex;
    justify-content: ${props => props.justy ? props.justy : "center"};
    flex-direction: column;
    align-items: ${props => props.align ? props.align : "center"};
    gap: ${props => props.gap ? props.gap : "" };
`;
export {ImageCaraousal,Caraousalheading , CaraousalItemCover, ButtonWrapper}