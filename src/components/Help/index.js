import React from 'react'
import { Container } from 'react-bootstrap'
import './style.css'


const Help = () => {
    return (
        <div className="help">
            <div className="help__left">
                <Container>
                    <div className="help__leftform">
                        <input type="text" />
                    </div>
                    <div className="help__leftform2">
                        <div className="help__leftform2__Text1">
                            <input type="text" />
                        </div>
                        <div className="help__leftform2__Text2">
                            <input type="text" />
                        </div>
                    </div>

                </Container>

            </div>
            <div className="help__right">

                <img src='' alt='' />
            </div>
        </div>
    )
}

export default Help
