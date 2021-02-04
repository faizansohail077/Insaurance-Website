import React from 'react'
import { Container } from 'react-bootstrap'
import './style.css'
const HeroBottom1 = () => {
    return (
        <div>
            <div style={{ backgroundColor: '#BD2E1F' }}>
                <Container>
                    <div className="heroBottom">
                        <div className="heroBottomLeft">
                            <div> Compare Quote For</div>
                        </div>
                        <div className="heroBottomMiddle">
                            <div>
                                Mouse over me +
                            </div>
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

export default HeroBottom1
