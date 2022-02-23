import React from 'react'
import { ContactForm } from '../Components/Contact/ContactForm'
import {motion} from 'framer-motion';
import { pageAnimation } from '../Components/Home/animation';
const Contact = () => {
  return (
    <motion.div variants={pageAnimation} initial='hidden' animate='show' exit="exit">
        <ContactForm/>
    </motion.div>
  )
}

export default Contact