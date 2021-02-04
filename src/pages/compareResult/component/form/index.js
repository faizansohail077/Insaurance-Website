import React from 'react'
import { Container } from 'react-bootstrap'
import './style.css'
import layer from '../../../../images/Layer 1200.png'
import layer1 from '../../../../images/Layer 1031.png'

const Compareform = () => {
    return (
        <div className="compareform">
            <div className="compare">
                <Container>
                    {/* <p style={{ textAlign: 'center', color: 'green' }}>Secure Payment</p> */}
                    <div className="form__top">
                        <p>Card Number</p>
                        <input type="text" placeholder="03/11/20" />
                        <img src={layer} alt="as" />

                        <p>Expiry *</p>
                        <div className="form__mid">
                            <p> MM
                    </p>
                            <p>
                                YY
                        </p>
                        </div>
                        <div className="form__topInput">
                            <input type="text" placeholder="Card holder Name" />
                            <input type="text" placeholder="CVV" />
                        </div>

                    </div>
                    <div>

                    </div>
                </Container>
            </div>
            <div className="compare">
                <Container>

                    <div className="form__bottom">
                        <input type="text" placeholder="Street1" />
                        <input type="text" placeholder="Street2" />
                        <div>
                            <input type="text" placeholder="City" />
                            <input type="text" placeholder="Province" />
                        </div>
                        <div>
                            <input type="text" placeholder="Postal/zip code" />
                            <input type="text" placeholder="Country" />
                        </div>
                    </div>
                </Container>
            </div>
            <div className="compare">
                <Container>

                    <div className="form__bottom2">
                        <div className="form__bottom2Content">
                            <div className="form__bottom2ContentImg">
                                <img src={layer1} alt="" />
                                <div>
                                    <div>Third Party Saloon/HatchBack-6</div>
                                    <div>CYLINDERS-NOOR TAKAFUL</div>
                                </div>


                            </div>


                            <p>AED 3,000</p>

                        </div>
                    </div>
                </Container>
            </div>
            <div className="compare">
                <Container>
                    <div className="form__bottom3">
                        <p>The Next screen you see may be payment card verification through you card issuer </p>
                    </div>
                    <div className="form__bottom3Button">
                        <button>Hello</button>
                        <button>Hello</button>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Compareform
