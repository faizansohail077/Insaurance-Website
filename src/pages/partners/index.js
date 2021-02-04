import React from 'react'
import { Container } from 'react-bootstrap'
import HeroBottom1 from '../HomePage/components/HeroBottom1'
import HeroSession from './components/HeroSession'
import PartnerDesc from './components/partnersDesc'
import Help from "../../pages/HomePage/components/Help";
const PartnersPage = () => {
    return (
        <div>


            <HeroSession />
            <HeroBottom1 />
            <PartnerDesc />
            <Help />


        </div>
    )
}

export default PartnersPage
