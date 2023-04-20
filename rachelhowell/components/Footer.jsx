import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <div className="bg-[#f8f8f8] h-64 flex flex-row w-screen justify-between">
        <motion.div
        whileHover={{
          x: -100,
          transition: { duration: 0.5 },
        }}
        className="mt-40 place-self-end mr-32">
          <Image src={require('../assets/greypeek.png')} alt="sunrise" width="100" />
        </motion.div>

        <p className="place-self-end mb-12 mr-12 font-mono text-lg">© Howell | all rights reserved</p>
    </div>
  )
}

export default Footer
