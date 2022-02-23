import React from 'react';
import home1 from '../../img/home3.jpg';

//Styled
import {motion} from 'framer-motion'
import {About, Hide, Description, Image} from "./styles";
import { titleAnim } from "./animation";
import Wave from './Wave';

const AboutSection = () => {
    return(
        <About >
            <Description>
            <motion.div className="title"
                initial={{x: "-9rem"}}
                animate={{x: "0rem"}}
                transition={{duration: 1.5}}>
                    <Hide>
                        <motion.h2 variants={titleAnim} >
                            We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim} >
                            your <span> dreams</span> come
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim} >true.</motion.h2>
                    </Hide>
                </motion.div >
                <motion.p variants={titleAnim} initial="hidden" animate="show">
                    Contact us for any photography or 
                    videography ideas that you have. We have professionals with amazing skills
                </motion.p>
                <motion.button variants={titleAnim} initial="hidden" animate="show">Contact us</motion.button>
            </Description>
            <Image>
                <motion.img src={home1} alt="guy"
                initial={{x: "80rem"}}
                animate={{x: "0rem"}}
                transition={{duration: 2}}/>
            </Image>
            <Wave/>
        </About>
    )
}


export default AboutSection;