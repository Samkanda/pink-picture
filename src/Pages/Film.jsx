import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

//Images
import athelete from "../img/athlete-small.png"
import theracer from "../img/theracer-small.png"
import goodtimes from "../img/goodtimes-small.png"

//Animations
import {motion} from 'framer-motion';
import { pageAnimation } from '../Components/Home/animation';

const Film = () => {
  return (
    <Work variants={pageAnimation} initial='hidden' animate='show' exit="exit">
            <Movie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link to="/pink-picture/Film/the-athlete">
                    <img src={athelete} alt="aa"></img>
                </Link>
            </Movie>
            <Movie >
                <h2>The racer</h2>
                <div className="line"></div>
                <Link to="/pink-picture/Film/the-racer">
                    <img src={theracer} alt="aa"></img>
                </Link>
            </Movie>
            <Movie>
                <h2>The goodtimes</h2>
                <div className="line"></div>
                <Link to="/pink-picture/Film/good-times">
                    <img src={goodtimes} alt="aa"></img>
                </Link>
            </Movie>
        </Work>
    )
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
    }

    @media (max-width: 500px){
        padding: 0;
    }
    `;

const Movie = styled.div`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: pink;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

export default Film