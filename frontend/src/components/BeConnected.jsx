import React from 'react'
import '../styles/HomeSections/BeConnected.css'

const BeConnected = () => {
    return (
        <>
            <div className="be-connected__wrapper">
                <div className="be-connected__content">
                    <p className='lato-font beconnect-p'>BE CONNECTED</p>
                    <h2 className='playfair-font beconnect-h2'>Join Our Newsletter</h2>

                    <div class="input-group mb-3 beconnect-input__group" style={{ marginTop: "80px" }}>
                        <input type="text" class=" beconnect-input" placeholder="YOUR EMAIL ADDRESS"
                            aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="btn beconnect-btn" type="button" id="button-addon2">Button</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BeConnected