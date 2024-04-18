import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id="about" className="bg-[#f8f8f8] h-fit w-screen sm:h-screen flex flex-col items-center p-5 ">
        <Image src={require('../assets/sunriseblack.png')} alt="sunrise" width="100" className="mt-16"/>
        <p className="font-serif text-6xl mt-3 text-[#414141]">About Me</p>
        <p className="font-mono text-[#979797] mt-5">California Grown | INTJ | she/her</p>
        <p className="mt-8 max-w-5xl text-center sm:text-2xl text-lg text-[#414141]">{`With a rich background in software quality assurance and biological sciences, I offer a unique perspective for development teams and powerful debugging skills. Testing is my expertise. I am an excellent learner.`}</p>
        <p className="mt-8 max-w-5xl text-center sm:text-2xl text-lg text-[#414141]">{`I love embracing new challenges and am passionate about employing logic to solve complex problems. I'm well-versed in React, MongoDB, and Shopify. I am obsessed with the customer experience and take pride in my work. I understand the importance of effective communication and time management. My goal is to produce high-quality products that solve business challenges in innovative ways.`}</p>

        <Image src={require('../assets/greyprofile.png')} alt="meow meow" width="100" className=" mt-0 place-self-end md:mr-32 mr-4"/>
    </div>
  )
}

export default About
