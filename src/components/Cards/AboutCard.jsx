import React from 'react'
import styled from 'styled-components'
import { colors } from '../../theme/theme';
import foodimg from "../../assets/home-cover.jpg";


const Heading1 = styled.h1`
    color : ${colors.Black};
    text-align : center;
    font-weight: 600;
`;
const Subtitle1 = styled.sub`
    color :${colors.Black};
    margin-bottom: 2rem;
    font-size: medium;

`;
const Image = styled.img`
    height: 60vh;
    width: 60vw;
    object-fit: cover;
`;

const Cover = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background: ${colors.Grey};
    justify-content: center;
    align-items: center;
`

const AboutCard = () => {
    return (
        <Cover>
            <Heading1>Best Indian Cuisine Available</Heading1>
            <Subtitle1>Experience The Delicate Flavour of Spices</Subtitle1>
            <Image src={foodimg} alt="food images" />
        </Cover>

    )
}

export default AboutCard