import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className=" h-screen xl:h-fit xl:mb-40 md:mb-0  w-screen mb-12 flex flex-col items-center">
        {/* Picture of Me */}
        <Image src={require('../assets/profilepic.png')} alt="profile pic of Rachel"  className=" mt-36 w-96"/>
        <p className="text-6xl mt-2 text-[#414141] font-serif">Rachel Howell</p>
        <p className="text-2xl mt-4 font-mono text-[#414141]">Full Stack Web Developer</p>
        <div className="mt-6">
            <button className="font-mono border-2 mx-2 px-6 py-3 border-[#414141] duration-200 bg-[#414141] text-white hover:bg-white hover:text-[#414141]">My Projects</button>
            
            <Link href="#contact"><button className="font-mono border-2 mx-2 px-6 py-3 border-[#414141] duration-200 hover:bg-[#414141] hover:text-white">Get in Touch</button></Link>
        </div>

    </div>
  )
}

export default Hero
