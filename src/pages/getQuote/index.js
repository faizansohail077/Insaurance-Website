import React from 'react'
import HeroBottom1 from '../HomePage/components/HeroBottom1'
import HeroSession2 from './components/herosession2'
import Quota from './components/quote'
import './style.css'
import Help from "../../pages/HomePage/components/Help";
const GetQuote = () => {
    return (
        <div>
            <HeroSession2 />
            <HeroBottom1 />
            <Quota />
            <Help />

        </div>
    )
}

export default GetQuote
