import React from 'react';
import { SocialIcon } from 'react-social-icons';
import MenuIcon from '@mui/icons-material/Menu';
import { HashLink as Link } from 'react-router-hash-link';

const NavBar = () => {
  return (
    <div className="flex flex-row sm:justify-end justify-between p-3 mt-3 mr-3">
        <div className="hidden sm:flex flex-row justify-around w-2/5 items-center text-sm text-[#414141] font-mono">
            <p className="hover:underline">HOME</p>
            <Link smooth to="/#about">ABOUT</Link>
            <p className="hover:underline">ABOUT</p>
            <p className="hover:underline">PORTFOLIO</p>
            {/* <p className="hover:underline">RESUME</p> */}
            <p className="hover:underline">CONTACT</p>
        </div>

        <div className="sm:hidden">
          <MenuIcon fontSize="large"/>
        </div>

        <div className="flex flex-row sm:w-1/12 justify-around">
            <SocialIcon className="sm:mr-0 mr-2" url="https://github.com/rachel-howell" style={{ height: 30, width: 30 }}/>
            <SocialIcon url="https://www.linkedin.com/in/racheljhowell/" style={{ height: 30, width: 30 }} bgColor="black" />
        </div>

    </div>
  )
}

export default NavBar
