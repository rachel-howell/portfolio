import React from 'react'
import { motion } from 'framer-motion'

const Portfolio = () => {

  const rsww = 'https://rsww.vercel.app/'
  const shakerr = 'http://shakerr.io'
  const ballotbox = 'http://100.26.160.109/'

  const toSite = (x) => {
    window.open(x)
  }

  return (
    <div className="h-fit flex flex-col items-center justify-around bg-[#f8f8f8]">
        <img src={require('../assets/sunriseblack.png')} alt="sunrise" width="100" className="mt-16"/>
        <p className="font-serif text-6xl mt-3 text-[#414141] mb-5">My Projects</p>
        
        <div className="flex flex-wrap items-center justify-around w-screen">
          <motion.img
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2},
            }}
            src={require('../assets/rswwgif.gif')} alt="sunrise" width="600" className="mt-10 mb-5 hover:cursor-pointer" onClick={()=>toSite(rsww)}/>
            <div className="flex flex-col text-center max-w-lg">
              <p className="font-serif text-3xl mb-3 md:mt-0 mt-7">RSWatchWorks</p>
              <p className="font-mono text-sm mb-3 text-[#979797]">Next.js | React | Node | GraphQL | Shopify Storefront API</p>
              <p className="mb-3">Fully functional custom Shopify storefront built with Next.js, GraphQL, and the Shopify Storefront API. Users can browse products, view product details, add products to the cart, and check out.</p>
              <p>Includes service listings, price estimate calculator, and the ability to send inquiries with selected services directly from the website.</p>
            </div>

        </div>

        <hr align="center" width="5%"
        className="mt-10"
        style={{
            color: '#979797',
            backgroundColor: '#979797',
            height: 4
        }}
        />



        <div className="flex flex-wrap-reverse items-center justify-around w-screen">

            <div className="flex flex-col text-center max-w-lg">
              <p className="font-serif text-3xl mb-3 md:mt-0 mt-7">Shakerr.io</p>
              <p className="font-mono text-sm mb-3 text-[#979797]">MongoDB | Express | React | Node | Bootstrap</p>
              <p className="mb-3">API and Database querying cocktail recipe application.</p>
              <p>MongoDB and Express backend for CRUD functionality. RESTful API calls populate website with 700+ recipes. Includes user registration and login with Bcrypt and jsonwebtoken.</p>
            </div>

            <motion.img 
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2},
            }}
            src={require('../assets/shakerr.png')} alt="sunrise" width="600" className="mt-10 mr-5 hover:cursor-pointer mb-5" onClick={()=>toSite(shakerr)}/>

          </div>

          <hr align="center" width="5%"
          className="mt-10"
          style={{
              color: '#979797',
              backgroundColor: '#979797',
              height: 4
          }}
          />

          <div className="flex flex-wrap items-center justify-around w-screen mb-8">
            <motion.img 
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2},
            }}
            src={require('../assets/ballotbox.png')} alt="sunrise" width="600" className="mt-10 mb-10 hover:cursor-pointer" onClick={()=>toSite(ballotbox)}/>

            <div className="flex flex-col text-center max-w-lg">
              <p className="font-serif text-3xl mb-3">Ballot Box Voting Application</p>
              <p className="font-mono text-sm mb-3 text-[#979797]">MongoDB | Express | React | Node | Tailwind</p>
              <p className="mb-3">Polling web application.</p>
              <p>Front-end built using React and Tailwind with MongoDB backend. Features include Bcrypt for password hashing, RESTful API communication, and promises for async operations.</p>
            </div>

        </div>
    </div>
  )
}

export default Portfolio
