import React from 'react'
import { Container } from 'react-bootstrap'
import './style.css'
import layer1 from '../../images/Layer 27.png'
import layer2 from '../../images/Layer 28.png'
// import layer3 from '../../images/Layer 29.png'
const Work = () => {
    return (
        <div>
            <div className="work" >

                <h1>How We Work</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
            <Container >
                <div className="work__div">
                    <div className="work__div1">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </div>
                    <div className="flip-card">
                        <div class="flip-card-inner">
                            <div className="work__div2">
                                <img src={layer1} alt='' />
                                <h3>Experianced Agents</h3>
                                <p>  Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <button>learn more</button>
                            </div>
                            <div class="flip-card-back">
                                <h1>John Doe</h1>
                                <p>Architect & Engineer</p>
                                <p>We love that guy</p>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card">
                        <div class="flip-card-inner">
                            <div className="work__div2">
                                <img src={layer2} alt='' />
                                <h3>Experianced Agents</h3>
                                <p>  Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <button>learn more</button>
                            </div>
                            <div class="flip-card-back">
                                <h1>John Doe</h1>
                                <p>Architect & Engineer</p>
                                <p>We love that guy</p>
                            </div>
                        </div>
                    </div>


                </div>
            </Container>
        </div>
    )
}

export default Work
