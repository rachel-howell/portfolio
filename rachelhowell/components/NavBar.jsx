import React from 'react';
import { SocialIcon } from 'react-social-icons';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import SideMenu from './SideMenu';

const NavBar = () => {
  return (
    <div className="flex flex-row lg:justify-end justify-between p-3 pr-3 w-screen sticky top-0 bg-white border-b z-50">
        <div className="hidden lg:flex flex-row justify-around w-2/5 items-center text-sm text-[#414141] font-mono">
            <Link href="#home" className="hover:underline">HOME</Link>
            <Link smooth href="#about" className="hover:underline">ABOUT</Link>
            <Link smoooth href="#skills" className="hover:underline">SKILLS</Link>
            <Link smooth href="#portfolio" className="hover:underline">PORTFOLIO</Link>
            <Link smooth href="#experience" className="hover:underline">EXPERIENCE</Link>
            <Link smooth href="#contact" className="hover:underline">CONTACT</Link>
        </div>

        <div className="lg:hidden ml-5 pt-2 ring-black">
          <SideMenu menuButton={<MenuIcon fontSize="large"/>}/>
        </div>

        <div className="flex flex-row md:w-1/12 pt-2 lg:pt-0 justify-around">
            <SocialIcon className="md:mr-0 mr-2" url="https://github.com/rachel-howell" style={{ height: 30, width: 30 }}/>
            <SocialIcon url="https://www.linkedin.com/in/racheljhowell/" style={{ height: 30, width: 30 }} bgColor="black" />
        </div>

    </div>
  )
}

export default NavBar
