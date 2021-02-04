import React from 'react'
import { Container } from 'react-bootstrap'
import './style.css'
import layer from '../../../../images/Layer 6.png'
import layer2 from '../../../../images/Layer 7.png'
import layer3 from '../../../../images/Layer 8.png'
import layer4 from '../../../../images/Layer 9.png'
const Quota = () => {
    return (
            <Container>
        <div className="quota">
                <div className="quota_top">
                    <div className="quota_topImg">
                        <img src={layer2} alt="" />
                        <p>Motor Insaurance</p>
                    </div>
                    <div>
                        <div className="quota_topImg">
                            <img src={layer} alt="" />
                            <p>Home Insaurance</p>
                        </div>
                    </div>
                </div>
                <div className="quota_top">
                    <div>
                        <div className="quota_topImg">
                            <img src={layer3} alt="" />
                            <p>Travel Insaurance</p>
                        </div>
                    </div>
                    <div>
                        <div className="quota_topImg">
                            <img src={layer4} alt="" />
                            <p>Health Insaurance</p>
                        </div>
                    </div>
                </div>

        </div>
            </Container>
    )
}

export default Quota
