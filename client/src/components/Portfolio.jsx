import React from 'react'

const Portfolio = () => {
  return (
    <div className="h-fit flex flex-col items-center bg-[#f8f8f8]">
        <img src={require('../assets/sunriseblack.png')} alt="sunrise" width="100" className="mt-16"/>
        <p className="font-serif text-6xl mt-3 text-[#414141]">My Projects</p>
        <img src={require('../assets/rlswwhome.png')} alt="sunrise" width="800" className="mt-16"/>
        <div className="flex flex-wrap items-center justify-center mb-20">
            <img src={require('../assets/shakerr.png')} alt="sunrise" width="600" className="mt-16 mr-5"/>
            <img src={require('../assets/ballotbox.png')} alt="sunrise" width="600" className="mt-16"/>
        </div>
    </div>
  )
}

export default Portfolio
