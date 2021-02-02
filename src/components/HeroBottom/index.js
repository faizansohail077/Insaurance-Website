import React from 'react'
import { Container } from 'react-bootstrap'
import './style.css'
import layer1 from '../../images/Layer 6.png'
import layer2 from '../../images/Layer 7.png'
import layer3 from '../../images/Layer 8.png'
import layer4 from '../../images/Layer 9.png'
import layer5 from '../../images/Layer 10.png'

const HeroBottom = () => {
    return (
        <div style={{ backgroundColor: '#E5E5E5' }}>
            <Container>
                <div className="heroBottom1__text">
                    <p>We don't only Compare,we Issue</p>
                </div>
                <div className="herobottom1">
                    <div className="herobottom1__img">
                        <img src={layer1} alt="" />
                    </div>
                    <div className="herobottom1__img">
                        <img src={layer2} alt="" />
                    </div>
                    <div className="herobottom1__img">
                        <img src={layer3} alt="" />
                    </div>
                    <div className="herobottom1__img">
                        <img src={layer4} alt="" />
                    </div>
                    <div className="herobottom1__img">
                        <img src={layer5} alt="" />
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default HeroBottom
