import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'
import React, { Fragment } from 'react'

function SideMenu({menuButton}) {

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#experience', label: 'Experience'},
    { href: '#contact', label: 'Contact'}
  ]
  return (
    <Popover className="relative">
      <Popover.Button>{menuButton}</Popover.Button>
      <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
        <Popover.Panel className="absolute z-10 ml-0 sm:ml-3 sm:bg-white bg-white bg-opacity-90 border-2 rounded-md p-3">
          <div className="flex flex-col">
            {
              links.map((link, id)=>(
                <Link key={id} href={link.href} className="cursor-pointer font-mono text-[#414141] rounded-md hover:bg-[#f8f8f8] hover:bg-opacity-90 lg:px-4 ml-1 p-2">{link.label}</Link>
              ))
            }
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default SideMenu
