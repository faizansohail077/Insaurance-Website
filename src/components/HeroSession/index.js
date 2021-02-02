import React from 'react'
import './index.css'
import './style.css'
import { Container } from 'react-bootstrap'
import Layer2 from '../../images/Layer2.png'

const index = () => {
    return (
        <div>
            <div className="image">
                <Container >
                    <div className="hero__container">
                        <div className="hero__containerLeft">
                            <p>We Protect</p>
                            <p>What You Love</p>
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

            {/* style.css is for this part  */}

            <div style={{ backgroundColor: '#BD2E1F' }}>
                <Container>
                    <div className="heroBottom">
                        <div className="heroBottomLeft">
                            <p> Compare Quote For</p>
                        </div>
                        <div className="heroBottomMiddle">
                            <p>
                                Mouse over me +
                            </p>
                            <div className="dropdown">
                                <p>Hello World!</p>

                            </div>
                        </div>
                        <div className="heroBottomRight">
                            <button>Compare Now</button>
                        </div>

                    </div>
                </Container>

            </div>
        </div>
    )
}

export default index
