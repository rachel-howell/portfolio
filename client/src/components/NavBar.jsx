import React from 'react';
import { SocialIcon } from 'react-social-icons';

const NavBar = () => {
  return (
    <div className="flex flex-row justify-end p-3 mt-3 mr-3">
        <div className="flex flex-row justify-around w-2/5 items-center text-sm text-[#414141] font-mono">
            <p className="hover:underline">HOME</p>
            <p className="hover:underline">ABOUT</p>
            <p className="hover:underline">PORTFOLIO</p>
            <p className="hover:underline">RESUME</p>
            <p className="hover:underline">CONTACT</p>
        </div>

        <div className="flex flex-row  w-1/12 justify-around">
            <SocialIcon url="https://github.com/rachel-howell" style={{ height: 30, width: 30 }}/>
            <SocialIcon url="https://www.linkedin.com/in/racheljhowell/" style={{ height: 30, width: 30 }} bgColor="black" />
        </div>

    </div>
  )
}

export default NavBar
