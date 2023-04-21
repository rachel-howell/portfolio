import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Contact = () => {

  const openInNewTab = () => {
    const newWindow = window.open('mailto:rachelhowelldev@gmail.com', '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <motion.div 
    whileHover={{
      scale: 1.1,
      transition: { duration: 0.2},
    }} id="contact" className=" h-96 flex flex-col items-center justify-center" onClick={()=>openInNewTab()}>
        <Image src={require('../assets/mail.png')} alt="sunrise" width="100" className="hover:cursor-pointer"/>
        <p className="font-serif text-6xl mt-5 text-[#414141] hover:cursor-pointer">Get in Touch</p>
    </motion.div>
  )
}

export default Contact
