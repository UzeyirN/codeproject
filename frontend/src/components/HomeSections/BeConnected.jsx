import React from 'react'
import '../../styles/HomeSections/BeConnected.css'

const BeConnected = () => {
    return (
        <>
            <div className="be-connected__wrapper">
                <div className="be-connected__content">
                    <p className='lato-font' style={{ fontSize: "14px", fontWeight: "700", color: "RGB(176, 151, 109)" }}>BE CONNECTED</p>
                    <h2 className='playfair-font' style={{ fontSize: "41px" }}>Join Our Newsletter</h2>

                    <div class="input-group mb-3" style={{marginTop:"80px"}}>
                        <input type="text" class="form-control" placeholder="YOUR EMAIL ADDRESS" aria-label="Recipient's username" aria-describedby="button-addon2"
                         style={{width:"80%",padding:"35px 10px",border:"1px solid #e9e9e9"}}/>
                        <button className="btn" type="button" id="button-addon2" style={{width:"20%",border:"1px solid #e9e9e9"}}>Button</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BeConnected