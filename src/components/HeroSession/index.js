import React from 'react'
import './HeroSession.css'
import hero from '../../images/hero.png'
import { Container } from 'react-bootstrap'
import Layer2 from '../../images/Layer2.png'
const img = hero
const index = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${img})`, width: '100%', height: '70vh', backgroundColor: '#AEAEAE', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} className="image">
                <Container >
                    <div className="hero__container">
                        <div className="hero__containerLeft">
                            <p style={{ color: '#37885F' }}>We Protect</p>
                            <p style={{ color: '#BD2E1F' }}>What You Love</p>
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
        </div>
    )
}

export default index
