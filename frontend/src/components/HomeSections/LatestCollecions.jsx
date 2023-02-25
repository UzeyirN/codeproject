import React, { useState, useEffect } from 'react'
import '../../styles/HomeSections/LatestCollecions.css'
import axios from 'axios';
import Loading from '../Loading';

const LatestCollecions = () => {

    const [latestProducts, setLatestProducts] = useState(null)
    const [loading, setLoading] = useState(true);
    const URL = 'http://localhost:3070/latest';


    const getData = async () => {
        await axios.get(URL).then((resp) => setLatestProducts(resp.data));
        setLoading(false);

    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className="latest-collections__wrapper">
                <div style={{ margin: "0 auto 50px auto", textAlign: "center" }}>
                    <p className='lato-font' style={{ fontSize: "14px", fontWeight: "700", color: "RGB(176, 151, 109)" }}>LATEST COLLECTION</p>
                    <h2 className='playfair-font' style={{ fontSize: "41px" }}>New Products</h2>
                </div>
                <div className=" container container-xl">
                    <div className="row ">
                        {
                            loading ? <Loading /> :
                                latestProducts?.map(({ _id, image, brand, appelation, price }) => (
                                    <div className="col-12 col-lg-4  mb-5">
                                        <div className="card-wrapper " key={_id}>
                                            <div className="card">
                                                <div className="card-body">
                                                    <img style={{ width: "100%", height: "100%" }} src={image} alt="" />
                                                </div>
                                            </div>
                                            <div className="card-content">
                                                <p className='lato-font latest-card__p' style={{ color: "RGB(176, 151, 109)" }}>{brand}</p>
                                                <p className='playfair-font card-appelation'>{appelation}</p>
                                                <div style={{ color: "RGB(176, 151, 109)", margin: "30px 0", fontSize: "21px" }} className='notoserif-font'>${price}.00</div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestCollecions