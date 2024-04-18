import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div id="home" className=" h-screen w-screen mb-12 flex flex-col items-center">
        {/* Picture of Me */}
        <Image src={require('../assets/profilepic.png')} alt="profile pic of Rachel"  className=" mt-32 sm:w-96 w-72"/>
        <p className="sm:text-6xl text-5xl mt-2 text-[#414141] font-serif">Rachel Howell</p>
        <p className="text-2xl mt-4 font-mono text-[#414141] text-wrap px-1 text-center">Full Stack Web Developer</p>
        <div className="mt-5 flex flex-wrap justify-center">
            <div className="font-mono border-2 mx-2 sm:px-7 px-8 py-4 border-[#414141] duration-200 bg-[#414141] text-white hover:bg-white hover:text-[#414141] mb-2">
              <Link href="#portfolio">My Projects</Link>
            </div>

            <div className="font-mono border-2 mx-2 px-7 py-4 border-[#414141] duration-200 hover:bg-[#414141] hover:text-white mb-2">
              <Link href="#contact" >Get in Touch</Link>
            </div>
            
        </div>

    </div>
  )
}

export default Hero
