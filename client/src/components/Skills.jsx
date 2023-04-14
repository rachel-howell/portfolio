import React from 'react'

const Skills = () => {
  return (
    <div className="flex flex-col items-center h-fit sm:h-screen mt-16 sm:mb-0 mb-5">


        <img src={require('../assets/sunriseblack.png')} alt="sunrise" width="100"/>

        <p className="text-6xl font-serif mt-3 text-[#414141] text-center">Developer Skills</p>
        <p className="mt-5 font-mono text-[#979797] text-center">mongoDB | shopify | mySQL | react | graphQL | node.js | next.js</p>

        <div className="flex flex-wrap justify-around w-3/5 sm:w-screen mt-4 sm:mt-16">
            {/* second row */}
            <img src={require('../assets/mongodb.svg.png')} alt="mongoDB mongoose" className="sm:w-1/4 sm:mb-0 mb-8"/>
            <img src={require('../assets/shopify.svg.png')} alt="shopify" className="sm:w-1/4 sm:mb-0 mb-8"/>
            <img src={require('../assets/mysql.svg.png')} alt="mysql" className="sm:w-1/4"/>
        </div>

        <div className="sm:flex sm:flex-wrap grid grid-cols-2 justify-around w-3/5 sm:w-screen sm:mt-20 mt-8 gap-5">
            {/* first row */}
            <img src={require('../assets/react.svg.png')} alt="react react.js javascript" className="sm:w-1/6"/>
            <img src={require('../assets/graphQL.png')} alt="graphql graphiql" className="sm:w-1/6"/>
            <img src={require('../assets/node.png')} alt="node node.js" className="sm:w-1/5"/>
            <img src={require('../assets/next.png')} alt="next next.js" className="sm:w-1/6"/>
        </div>

    </div>
  )
}

export default Skills
