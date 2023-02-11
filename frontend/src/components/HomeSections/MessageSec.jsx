import React from 'react'
import '../../styles/HomeSections/MessageSec.css'

const MessageSec = () => {

    return (
        <>
            <div className="messagesec-wrapper">
                <div className="container-fluid">
                    <div className="row" >
                        <div className="col-lg-6 left-box">
                            <img src="https://villenoir7.mybigcommerce.com/product_images/uploaded_images/homepage-about-us.jpg" alt="" />
                        </div>
                        <div className="col-lg-6 right-box">
                            <div className="messagesec-content">
                                <p className='lato-font' style={{ fontSize: "14px", fontWeight: "700", color: "RGB(176, 151, 109)" }}>MESSAGE FROM VILLENOIR</p>
                                <h1 className='playfair-font' style={{ fontSize: "41px" }}>A New Generation of Winemakers</h1>

                                <p className='lato-font' style={{ marginTop: "50px" }}>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                                    penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet elit leo.
                                </p>
                                <p className='lato-font' style={{ marginTop: "30px" }}>
                                    Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                                    Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. .
                                </p>
                                <img src="https://villenoir7.mybigcommerce.com/product_images/uploaded_images/signature-black.png" alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MessageSec