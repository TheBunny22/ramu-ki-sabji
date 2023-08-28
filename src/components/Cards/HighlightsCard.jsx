import React from 'react'
import styled from 'styled-components'
import { colors } from '../../theme/theme';


const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;
    background: ${colors.Light_orange};
`;

const IconCvr = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    color : white;
    height: 50%;
    background: ${colors.Light_orange};
    border-radius: 50%;
    padding: 1rem;
`;

const CardCover = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background: White;
    box-shadow:0 0 20px 0px ${colors.Black} ;
    border-radius: 0.5rem;
`;

const Heading2 = styled.h3`
    color : ${colors.Black};
    font-weight: bolder;
    max-width: 80%;
    text-align: center;
    word-wrap:break-word;
`;

const Subtitle = styled.div`
    color : ${colors.Black};
    font-weight: 700;
    font-size : medium;
`;
const Svg = styled.svg`
    fill: ${colors.White};
`;
const HighLight = styled.span`
    color: ${colors.Orange};
    font-size: xx-large;
    font-weight: bolder;
`;
// three cards with one Illustration 
// and the couter of the total orders and total deliveries and total number of cusatomers 
const HighlightsCard = () => {

    const SalesDemo = [
        {
            title: "Happy Cutomers",
            count: 999,
        },
        {
            title: "Total Deliveries",
            count: 1299,
        },
        {
            title: "Zomato Deliveries",
            count: 1999,
        },
    ]

    return (
        <Wrapper>
            <CardCover>
                <IconCvr>
                    <Svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 -960 960 960" width="60"><path d="M80-200v-80h800v80H80Zm40-120v-40q0-128 78.5-226T400-710v-10q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720v10q124 26 202 124t78 226v40H120Zm82-80h556q-14-104-93-172t-185-68q-106 0-184.5 68T202-400Zm278 0Z" /></Svg>
                </IconCvr>
                <Subtitle> <HighLight>{SalesDemo[0].count}</HighLight> plus</Subtitle>
                <Heading2>
                    {SalesDemo[0].title}
                </Heading2>
            </CardCover>
            <CardCover>
                <IconCvr>
                    <Svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 -960 960 960" width="60"><path d="M400-80v-80h520v80H400Zm40-120q0-81 51-141.5T620-416v-25q0-17 11.5-28.5T660-481q17 0 28.5 11.5T700-441v25q77 14 128.5 74.5T880-200H440Zm105-81h228q-19-27-48.5-43.5T660-341q-36 0-66 16.5T545-281Zm114 0ZM40-440v-440h240v58l280-78 320 100v40q0 50-35 85t-85 35h-80v24q0 25-14.5 45.5T628-541L358-440H40Zm80-80h80v-280h-80v280Zm160 0h64l232-85q11-4 17.5-13.5T600-640h-71l-117 38-24-76 125-42h247q9 0 22.5-6.5T796-742l-238-74-278 76v220Z" /></Svg>
                </IconCvr>
                <Subtitle><HighLight>{SalesDemo[1].count}</HighLight> plus</Subtitle>
                <Heading2>
                    {SalesDemo[1].title}
                </Heading2>
            </CardCover>
            <CardCover>
                <IconCvr>
                    <Svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 -960 960 960" width="60"><path d="M312-240h338l19-280H292l20 280Zm-26-360h389l3-50-112-110H394L282-650l4 50Zm-76 68L80-662l56-56 64 64-2-24 162-162h240l162 162-2 24 64-64 56 56-130 130H210Zm28 372-28-372h540l-28 372H238Zm242-440Zm1 80Z" /></Svg>
                </IconCvr>
                <Subtitle><HighLight>{SalesDemo[2].count}</HighLight> plus</Subtitle>
                <Heading2>
                    {SalesDemo[2].title}
                </Heading2>
            </CardCover>
        </Wrapper>
    )
}

export default HighlightsCard;