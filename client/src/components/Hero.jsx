import React from 'react'

const Hero = () => {
  return (
    <div className="xl:h-fit xl:mb-40 md:mb-0  mb-12 flex flex-col items-center">
        {/* Picture of Me */}
        <img src={require('../assets/profilepic.png')} alt="profile pic of Rachel"  className=" mt-10 w-96"/>
        <p className="text-6xl mt-2 text-[#414141] font-serif">Rachel Howell</p>
        <p className="text-2xl mt-4 font-mono text-[#414141]">Full Stack Software Engineer</p>
        <div className="mt-6 mb-6">
            <button className="font-mono border-2 mx-2 px-6 py-3 border-[#414141] duration-200 bg-[#414141] text-white hover:bg-white hover:text-[#414141]">My Projects</button>
            <button className="font-mono border-2 mx-2 px-6 py-3 border-[#414141] duration-200 hover:bg-[#414141] hover:text-white">Get in Touch</button>
        </div>

    </div>
  )
}

export default Hero
