import React from 'react'
import '../../styles/HomeSections/OurAdress.css'

const OurAdress = () => {
    return (
        <>
            <div className="ouradress-wrapper">
                <div className="ouraddress-content">
                    <p className='lato-font' style={{ fontSize: "14px", fontWeight: "700", color: "RGB(176, 151, 109)" }}>OUR ADDRESS</p>
                    <h2 className='playfair-font' style={{ fontSize: "41px" }}>53 Rue de Venteille, 33185 Le Haillan
                        Bordeaux, France</h2>
                    <p className='lato-font' style={{ fontSize: "14px", fontWeight: "700", color: "RGB(176, 151, 109)",marginTop:"70px"}}>CALL US AT +40746616288</p>

                </div>
            </div>
        </>
    )
}

export default OurAdress