import React from 'react'
import { Container } from 'react-bootstrap'
import './style.css'
import layer1 from '../../images/layer1.png'
import layer0 from '../../images/layer0.png'
const Hero2 = () => {
    return (
        <div>
            <Container>
                <div className="hero2">
                    <div className="hero2__img">
                        <img src={layer1} alt='' />
                    </div>
                    <div className="hero2__content">
                        <h2>
                            Life Just Got lot more Convenient
                        </h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum typesetting industry. Lorem Ipsum
                        </p>
                        <span>know more -- </span>
                    </div>
                </div>
            </Container>
            <Container>
                <div className="hero3">
                    <div className="hero3__img">
                        <img src={layer0} alt='' />
                    </div>
                    <div className="hero3__content">
                        <h2>
                            RoadSide  Assistant
                        </h2>
                        <h1>
                            0800 123 4567
                        </h1>
                        <span>Process  </span>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default Hero2
