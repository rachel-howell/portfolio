import React from 'react'
import { motion } from 'framer-motion'

const Portfolio = () => {

  const rsww = 'https://rsww.vercel.app/'

  const toRSWW = () => {
    window.open(rsww)
  }

  return (
    <div className="h-fit flex flex-col items-center bg-[#f8f8f8]">
        <img src={require('../assets/sunriseblack.png')} alt="sunrise" width="100" className="mt-16"/>
        <p className="font-serif text-6xl mt-3 text-[#414141]">My Projects</p>
        <motion.img
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2},
          }}
          src={require('../assets/rswwgif.gif')} alt="sunrise" width="800" className="mt-16 hover:cursor-pointer" onClick={()=>toRSWW()}/>
        <div className="flex flex-wrap items-center justify-center mb-20">
            <img src={require('../assets/shakerr.png')} alt="sunrise" width="600" className="mt-16 mr-5"/>
            <img src={require('../assets/ballotbox.png')} alt="sunrise" width="600" className="mt-16"/>
        </div>
    </div>
  )
}

export default Portfolio
