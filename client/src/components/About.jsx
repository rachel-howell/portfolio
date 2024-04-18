import React from 'react'

const About = () => {
  return (
    <div id="about" className="bg-[#f8f8f8] h-fit sm:h-screen flex flex-col items-center p-5">
        <img src={require('../assets/sunriseblack.png')} alt="sunrise" width="100" className="sm:mt-16 mt-4"/>
        <p className="font-serif text-6xl mt-3 text-[#414141]">About Me</p>
        <p className="font-mono text-[#979797] mt-5">California Grown | INTJ | she/her</p>
        <p className="mt-8 max-w-5xl text-center sm:text-2xl text-lg text-[#414141]">I love embracing new challenges and am passionate about employing logic to solve complex problems. I'm well-versed in React, MongoDB, and Shopify. I am obsessed with the customer experience and take pride in my work. My goal is to produce high-quality products that address business challenges in innovative ways.</p>
        <p className="mt-8 max-w-5xl text-center sm:text-2xl text-lg text-[#414141]">With a background in software quality assurance and biological sciences, I offer a unique perspective and powerful debugging skills.</p>
        <img src={require('../assets/greyprofile.png')} alt="sunrise" width="100" className="md:mt-64 mt-12 place-self-end md:mr-32 mr-4"/>
        {/* Icon */}
        {/* Icon  */}
        {/* Icon  */}
    </div>
  )
}

export default About
