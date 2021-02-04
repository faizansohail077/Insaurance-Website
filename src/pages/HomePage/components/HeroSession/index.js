import React from 'react'
import './index.css'
// import './style.css'
import { Container } from 'react-bootstrap'
import Layer2 from '../../../../images/Layer2.png'
import HeroBottom1 from '../HeroBottom1'

const index = () => {
    return (
        <div>
            <div className="image">
                <Container >
                    <div className="hero__container">
                        <div className="hero__containerLeft">
                            <p>We Protect</p>
                            <p>What you Love</p>
                            <div className="hero__containerButton">
                                <button >Register Now</button>
                            </div>
                        </div>
                        <div className="hero__containerRight">
                            <img src={Layer2} alt="" />
                        </div>
                    </div>
                </Container>
            </div>
                <HeroBottom1/>
        </div>
    )
}

export default index
