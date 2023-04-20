import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id="about" className="bg-[#f8f8f8] h-fit w-screen sm:h-screen flex flex-col items-center p-5">
        <Image src={require('../assets/sunriseblack.png')} alt="sunrise" width="100" className="sm:mt-16 mt-4"/>
        <p className="font-serif text-6xl mt-3 text-[#414141]">About Me</p>
        <p className="font-mono text-[#979797] mt-5">California Grown | INTJ | she/her</p>
        <p className="mt-8 max-w-5xl text-center sm:text-2xl text-lg text-[#414141]">I love challenging myself to learn new technologies, and I enjoy using logic to solve complex problems. I'm well-versed in React and Shopify. I am devoted to creating stunning and user-friendly interfaces that elevate the user experience. I am inspired by the dynamic and inventive perspectives of diverse development teams. My goal is to use technology to make the world a better place.</p>
        <p className="mt-8 max-w-5xl text-center sm:text-2xl text-lg text-[#414141]">In addition to advancing my own skills, I am passionate about giving back to the community. Whether it's volunteering my time to mentor young coders or contributing to open-source projects, I am committed to using my expertise to effect positive change.</p>
        <Image src={require('../assets/greyprofile.png')} alt="meow meow" width="100" className="sm:mt-32 lg:mt-64 mt-12 place-self-end md:mr-32 mr-4"/>
        {/* Icon */}
        {/* Icon  */}
        {/* Icon  */}
    </div>
  )
}

export default About
