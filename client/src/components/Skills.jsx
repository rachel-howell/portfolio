import React from 'react'

const Skills = () => {
  return (
    <div className="flex flex-col items-center h-screen mt-16">


        <img src={require('../assets/sunriseblack.png')} alt="sunrise" width="100"/>

        <p className="text-6xl font-serif mt-3 text-[#414141]">Developer Skills</p>
        <p className="mt-5 font-mono text-[#979797]">mongoDB | shopify | mySQL | react | graphQL | node.js | next.js</p>

        <div className="flex flex-row justify-between w-5/6 mt-16">
            {/* second row */}
            <img src={require('../assets/mongodb.svg.png')} alt="mongoDB mongoose" width="400"/>
            <img src={require('../assets/shopify.svg.png')} alt="shopify" width="400"/>
            <img src={require('../assets/mysql.svg.png')} alt="mysql" width="400"/>
        </div>

        <div className="flex flex-row justify-between w-11/12 mt-20">
            {/* first row */}
            <img src={require('../assets/react.svg.png')} alt="react react.js javascript" width="345"/>
            <img src={require('../assets/graphQL.png')} alt="graphql graphiql" width="300"/>
            <img src={require('../assets/node.png')} alt="node node.js" width="489" height="300"/>
            <img src={require('../assets/next.png')} alt="next next.js" width="300"/>
        </div>

    </div>
  )
}

export default Skills
