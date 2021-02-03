import React from 'react'
import { Container } from 'react-bootstrap'
import './style.css'
import layer from '../../images/Layer 21.png'
import logo1 from '../../images/logo1.png'
import logo2 from '../../images/logo2.png'
import logo3 from '../../images/logo3.png'
import logo4 from '../../images/logo4.png'
import logo5 from '../../images/logo5.png'



const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <div className="footer__content">
                    <div className="logo">
                        <div className="logo__left">
                            <img src={layer} alt="" />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s standard dummy text ever since the 1500s,</p>
                        </div>
                        <div className="footer__left">
                            <ul>
                                <li>Affiliates</li>
                                <li>Register</li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer__right">
                        <ul>
                            <li>Terms and Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Disclaimer</li>
                            <li>Complaints</li>
                        </ul>
                    </div>
                    <div className="footer__right2">
                        <div className="footer__right2Logo">
                            <img src={logo1} alt="" />
                            <img src={logo2} alt="" />
                            <img src={logo3} alt="" />
                            <img src={logo4} alt="" />
                        </div>
                    <img src={logo5} alt=""/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer
