import React from 'react'
//Page Components
import AboutSection from '../Components/Home/AboutSection';
import ServicesSection2 from '../Components/Home/ServicesSection2';

// import { ContactForm } from '../components/ContactForm';
import { Gallary } from '../Components/Home/Gallary';

//Animations
import {motion} from 'framer-motion';

const Home = () => {
  return (
    <motion.div exit={{ scaleY: 0}} transition={{duration: .5}}>
      <AboutSection/>
      <ServicesSection2/>            
      <Gallary/>
    </motion.div>
  )
}

export default Home