import React from 'react'
import Hero from './components/HeroSession'
import Hero2 from './components/Hero'

import HeroBottom from "./components/HeroBottom";
import Prices from "./components/Prices";
import Work from "./components/Work";
import Partners from "./components/partners";
const Home = () => {
    return (
        <>
            <Hero />
            <HeroBottom />
            <Hero2 />
            <Prices />
            <Work />
            
            <Partners />
        </>
    )
}

export default Home
