import React from 'react'
import { Container } from 'react-bootstrap'
import './style.css'
import layer from '../../images/Layer 12.png'

const Help = () => {
    return (
        <div className="help">
            <div className="help__left">
                <Container>
                    <div className="help__Text">
                        <h1>How can we helps</h1>
                    </div>
                    <div className="help__leftform">
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className="help__leftform2">
                        <div className="help__leftform2__Text1">
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className="help__leftform2__Text2">
                            <input type="text" placeholder="Contact" />
                        </div>
                    </div>
                    <div className="help__leftform2__Text3">
                        <textarea type="text" placeholder="Message" />
                    </div>
                    <div className="help__leftform2__button">
                        <button>
                            Submit
                        </button>

                    </div>
                </Container>

            </div>
            <div className="help__right">
                <div className="help__rightImg"> 

                    <img src={layer} alt='play button' />
                </div>
            </div>
        </div>
    )
}

export default Help
