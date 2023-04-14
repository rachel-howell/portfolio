import React from 'react'

const Contact = () => {

  const openInNewTab = () => {
    const newWindow = window.open('mailto:rachelhowelldev@gmail.com', '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <div className=" h-72 flex flex-col items-center justify-center" onClick={()=>openInNewTab()}>
        <img src={require('../assets/mail.png')} alt="sunrise" width="100" className="hover:cursor-pointer"/>
        <p className="font-serif text-6xl mt-5 text-[#414141] hover:cursor-pointer">Get in Touch</p>
    </div>
  )
}

export default Contact
