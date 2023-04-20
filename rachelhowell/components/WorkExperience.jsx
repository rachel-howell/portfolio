import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const WorkExperience = () => {

  const logoStyle = {
    height: '12rem'
  }

  return (
    <div id="experience" className="flex flex-col items-center h-fit w-screen">
    <Image src={require('../assets/sunriseblack.png')} alt="sunrise" width="100" className="mt-16"/>

    <p className="text-6xl font-serif mt-3 text-[#414141] text-center">Work Experience</p>
    <div className="flex flex-wrap w-5/6 mt-16 justify-around h-1/2">

      <motion.div 
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2},
        }}
        className="flex flex-col w-96 md:w-80 border-4 rounded-md items-center p-4 mb-5 sm:mb-0">
        <div className="h-1/3 flex items-center justify-center border-4" style={logoStyle} >
          <Image src={require('../assets/rswhite.png')} alt="rswatchworks logo" width="300px" className=""/>
        </div>

        <div className="text-center mt-1">
          <p className="text-2xl font-serif">Software Developer & Social Media Manager</p>
          <p className="text-sm font-mono">RSWatchWorks | Vancouver, WA</p>
          <p className="text-xs font-mono">4/2021 - present</p>
        </div>

        
        <div className="basis-2/3 mt-3">
          <li>Developed and maintain custom Shopify storefront for high-growth start-up</li>
          <li>Design and launch ad campaigns - increased audience reach by 600% to date</li>
          <li>Create polished social media content to drive sales</li>
        </div>
      </motion.div>


      <motion.div 
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2},
        }} className="flex flex-col w-96 md:w-80 items-center p-4 border-4 rounded-md mb-5 md:mb-0">
        <div className="h-1/3 flex items-center " style={logoStyle} >
          <Image src={require('../assets/varsity.png')} alt="profile pic of Rachel"  height="100px" width="100px"/>
        </div>

        <div className="text-center mt-1">
          <p className="text-2xl font-serif">Math Tutor & Academic Coach</p>
          <p className="text-sm font-mono">Varsity Tutors</p>
          <p className="text-xs font-mono">4/2020 - 4/2021</p>
        </div>

        
        <div className="h-2/3 mt-3">
          <li>Trained students in calculus and advanced math</li>
          <li>Improved student outcomes via adapted lesson plans and communicated progress to parents</li>
          <li>Used academic coaching skills to help students learn time management and organizational techniques</li>
        </div>
      </motion.div>

      <motion.div 
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2},
        }} className="flex flex-col w-96 md:w-80 items-center p-4 border-4 rounded-md mt-8 lg:mt-0">
        <div className="h-1/3 flex items-center" style={logoStyle} >
          <Image src={require('../assets/progenesis.png')} alt="profile pic of Rachel" height="103px"  width="192px" className=""/>
        </div>

        <div className="text-center">
          <p className="text-2xl font-serif">Laboratory Associate</p>
          <p className="text-sm font-mono">Progenesis | La Jolla, CA</p>
          <p className="text-xs font-mono">8/2019 - 3/2020</p>
        </div>


        <div className="basis-2/3 mt-3">
          <li>Aided clinical laboratory scientists in genetic sequencing workflow (PCR and NextGen sequencing) to ensure accuracy of patient results (100-200+ samples/day)</li>
          <li>Extracted DNA from whole blood patient samples to be analyzed for patient-specific assays</li>
          <li>Designed novel packaging with CEO to increase logistical efficiency of embryo biopsy transport</li>
        </div>
      </motion.div>

    </div>
    

    <hr align="center" width="5%"
        className="mt-10"
        style={{
            color: '#979797',
            backgroundColor: '#979797',
            height: 4
        }}
        />


    </div>
  )
}

export default WorkExperience
