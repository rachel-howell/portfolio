import React from 'react'

const About = () => {
  return (
    <div className="bg-[#f8f8f8] h-screen flex flex-col items-center">
        <img src={require('../assets/sunriseblack.png')} alt="sunrise" width="100" className="mt-16"/>
        <p className="font-serif text-6xl mt-3 text-[#414141]">About Me</p>
        <p className="font-mono text-[#979797] mt-5">California Grown | INTJ | she/her</p>
        <p className="mt-8 max-w-5xl text-center text-2xl text-[#414141]">I love challenging myself to learn new technologies, and I enjoy using logic to solve complex problems. I'm well-versed in React and Shopify. I am devoted to creating stunning and user-friendly interfaces that elevate the user experience. I am inspired by the dynamic and inventive perspectives of diverse development teams. My goal is to use technology to make the world a better place.</p>
        <p className="mt-8 max-w-5xl text-center text-2xl text-[#414141]">In addition to advancing my own skills, I am passionate about giving back to the community. Whether it's volunteering my time to mentor young coders or contributing to open-source projects, I am committed to using my expertise to effect positive change.</p>
        <img src={require('../assets/greyprofile.png')} alt="sunrise" width="100" className="mt-64 place-self-end mr-32"/>
        {/* Icon */}
        {/* Icon  */}
        {/* Icon  */}
    </div>
  )
}

export default About
