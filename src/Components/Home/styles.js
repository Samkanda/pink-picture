import {motion} from 'framer-motion';
import styled from "styled-components";
//Styles Components
export const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10vw;
    color: black;
    h2{
        font-size: max(4vw, 30px);
    }
`;
export const About1 = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
    background-color:pink;
`;

export const Description = styled.div`
    flex: 1;
    padding-right:5rem;
    h2{
        font-weight: lighter;
    }
`;

export const Image = styled.div`
    flex: 1;
    overflow:hidden;
    
    img{
        width:100%;
        height:80vh;
        object-fit:cover;
    }
    @media (max-width: 500px) {
        display: none;
        }
`;

export const TileImage = styled(motion.div)`
    flex: 1;
    overflow:hidden;
    padding-top: 15rem;
    img{
        width:47vh;
        height:60vh;
        object-fit:cover;
    }
    h3 {
        position: relative;
        bottom: 3rem;
        text-align: center;
        font-size: 50px;
        color: white;
    }
`;

export const Hide = styled.div`
    overflow: hidden;
`;


