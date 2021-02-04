import React from 'react'
import { Container } from 'react-bootstrap'
import './style.css'
import layer1 from '../../../../images/Layer 14.png'
import layer2 from '../../../../images/Layer 15.png'
import layer3 from '../../../../images/Layer 16.png'
import layer4 from '../../../../images/Layer 17.png'
import layer5 from '../../../../images/Layer 18.png'

const Partners = () => {
    return (
        <>
            <Container>
                <div className="partners__Text">
                    <h1>Partners</h1>
                </div>
                <div className="partners">
                    <img src={layer1} alt='' />
                    <img src={layer2} alt='' />
                    <img src={layer3} alt='' />
                    <img src={layer4} alt='' />
                    <img src={layer5} alt='' />


                </div>
            </Container>
        </>
    )
}

export default Partners
