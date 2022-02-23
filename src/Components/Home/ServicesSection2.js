import React from 'react';
import three from '../../img/33.jpg'
import city from '../../img/5.jpg'
import castle from '../../img/6.jpg'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const ServicesSection = () => {
    const controls = useAnimation();
    const [element, view] = useInView({threshold: 0.3});
    return(
        <Services ref={element}>
                <TileImage>
                    <img src={three} alt="dd"/>
                </TileImage>
                <TileImage3>
                    <img src={city} alt="dd"/>
                </TileImage3>
                <TileImage2>
                    <img src={castle} alt="dd"/>
                </TileImage2>
            <DivText>
                <h1>Please <br/> to Meet <br/> you</h1>
                <p>
                    Welcome! My name is Linda, abd I have been a photographer and 
                    videographer from the GTA/ Ontario for over a decade now. Wow Time Flies!
                </p>
            </DivText>
      </Services>
    )
}

const Services = styled.div`
    height: 55rem;
    background: linear-gradient(90deg, #F2EBE4 50%, #C4A484 50%);
    display: grid;
    grid-gap: 10px;
    row-gap: 25px;
    grid-template-columns: [col0] 3% [col1] 30% [colgap] 2% [col2] 22% [colgap] 2% [col3] 30%  [col4] 5%;
    grid-template-rows: [row0] 20px [row1-start] 300px [row1-end] 300px [third-line]  auto [last-line];
    @media (max-width: 500px){
        grid-template-columns: [col0] 3% [col1] 40% [colgap] 3% [col2] 40% [colgap] 3% [col4] 7%;
        grid-template-rows: [row0] 20px [row1-start] 100px [row1-end] 100px [third-line]  auto [last-line];
        background: linear-gradient(180deg, #F2EBE4 50%, #C4A484 50%);
        height: 45rem;
    }
`;

export const TileImage = styled(motion.div)`
    grid-column: col2;
    grid-row: 2/ span 2;
    padding-top: 5rem;
    padding-bottom: 3rem;
    img{
        max-height: 100%;
        min-height: 100%;
        min-width: 100%;
        max-width: 100%;
        object-fit: cover;
    }
    @media (max-width: 500px){
        padding: 0;
    }
`;


export const TileImage2 = styled(motion.div)`
    grid-column: col1; 
    grid-row: 3;
    img{
        max-height: 100%;
        min-height: 100%;
        min-width: 100%;
        max-width: 100%;
        object-fit: cover;
    }
`;

export const TileImage3 = styled(motion.div)`
    justify-content: center;
    grid-column: col1;
    grid-row: 2;
    img{
        max-height: 100%;
        min-height: 100%;
        min-width: 100%;
        max-width: 100%;
        object-fit: cover;
    }
`;

const DivText = styled(motion.div)`
    grid-column: col3;
    grid-row: 2/2 span;    
    padding-top: 5rem;
    h1{
        font-family: 'STIX Two Text', serif;
        font-size: max(6vw, 50px);    
    }

    p{
        color: black;
        font-size: max(1.5vw, 15px);    
    }
    @media (max-width: 500px){ 
        grid-row: 4;    
        grid-column: 1/ span 4;
        padding-top: 1rem;
        margin: 0;
        text-align: center;
        br{
            display: none;
        }
        h1{
        }
        p{
            margin-left: 1rem;
            text-align: center;
        }
}
`;

export default ServicesSection;