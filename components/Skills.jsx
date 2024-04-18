import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div id="skills" className="flex flex-col items-center h-fit sm:h-screen sm:mb-0 mb-5">


        <Image src={require('../assets/sunriseblack.png')} alt="sunrise" width="100" className="mt-16"/>

        <p className="text-6xl font-serif mt-3 text-[#414141] text-center">Developer Skills</p>
        <p className="mt-5 font-mono text-[#979797] text-center px-3">mongoDB | shopify | react | graphQL | node.js | next.js</p>
  
        <div className="flex flex-wrap justify-around w-3/5 mt-4 sm:mt-24">
            {/* first row */}
            <Image src={require('../assets/mongodb.svg.png')} alt="mongoDB mongoose" className="w-1/4 h-1/2 sm:mb-0 mb-8"/>
            <Image src={require('../assets/react.svg.png')} alt="react react.js javascript" className="sm:w-1/6"/>
            <Image src={require('../assets/shopify.svg.png')} alt="shopify" className="w-1/4 h-1/2 sm:mb-0 mb-8"/>
            
        </div>

        <div className="sm:flex sm:flex-wrap grid grid-cols-2 justify-around w-3/5 sm:mt-20 mt-8 gap-5">
            {/* second row */}

            <Image src={require('../assets/graphQL.png')} alt="graphql graphiql" className="sm:w-1/6"/>
            <Image src={require('../assets/node.png')} alt="node node.js" className="sm:w-1/5"/>
            <Image src={require('../assets/next.png')} alt="next next.js" className="sm:w-1/6"/>
        </div>

        <hr align="center" width="5%"
        className="sm:mt-24"
        style={{
            color: '#979797',
            backgroundColor: '#979797',
            height: 6
        }}
        />

    </div>
  )
}

export default Skills
