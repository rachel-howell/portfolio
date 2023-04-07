import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#f8f8f8] h-64 flex flex-row justify-between">
        <img src={require('../assets/greypeek.png')} alt="sunrise" width="100" className="mt-40 place-self-end mr-32"/>
        <p className="place-self-end mb-12 mr-12 font-mono text-lg">© Howell | all rights reserved</p>
    </div>
  )
}

export default Footer
