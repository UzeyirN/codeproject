import React from 'react'
import '../../styles/HomeSections/LatestCollecions.css'
import { Link } from 'react-router-dom';

const LatestCollecions = () => {

    return (
        <>
            <div className="latest-collections__wrapper">
                <div style={{ margin: "0 auto 50px auto", textAlign: "center" }}>
                    <p className='lato-font' style={{ fontSize: "14px", fontWeight: "700", color: "RGB(176, 151, 109)" }}>LATEST COLLECTION</p>
                    <h2 className='playfair-font' style={{ fontSize: "41px" }}>New Products</h2>
                </div>
                <div className=" container-fluid container-xl ">
                    <div className="row ">

                        <div className="col-12 col-sm-6 col-lg-4 mb-5">
                            <div className="card-wrapper ">
                                <div className="card">
                                    <div className="card-body">
                                        <img style={{ width: "100%", height: "100%" }} src="https://cdn11.bigcommerce.com/s-qbep6rt4nh/images/stencil/500x659/products/116/386/White-Chardonnay-w-cup__40812.1488466018.png?c=2" alt="" />
                                        <button className='feature-fav__btn'>
                                            <i class="fa-solid fa-heart"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <p className='lato-font' style={{ color: "RGB(176, 151, 109)" }}>SUTTER HOME</p>
                                    <Link className='playfair-font card-link' style={{ marginBottom: "20px", fontSize: "20px" }} >Villenoir Chardonnay</Link>
                                    <div style={{ color: "RGB(176, 151, 109)", margin: "30px 0", fontSize: "21px" }} className='notoserif-font'>$100.00</div>
                                    <button className='lato-font add-button '>ADD TO CART</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4 mb-5">
                            <div className="card-wrapper ">
                                <div className="card">
                                    <div className="card-body">
                                        <img style={{ width: "100%", height: "100%" }} src="https://cdn11.bigcommerce.com/s-qbep6rt4nh/images/stencil/500x659/products/116/386/White-Chardonnay-w-cup__40812.1488466018.png?c=2" alt="" />
                                        <button className='feature-fav__btn'>
                                            <i class="fa-solid fa-heart"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <p className='lato-font' style={{ color: "RGB(176, 151, 109)" }}>SUTTER HOME</p>
                                    <Link className='playfair-font card-link' style={{ marginBottom: "20px", fontSize: "20px" }} >Villenoir Chardonnay</Link>
                                    <div style={{ color: "RGB(176, 151, 109)", margin: "30px 0", fontSize: "21px" }} className='notoserif-font'>$100.00</div>
                                    <button className='lato-font add-button'>ADD TO CART</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4 mb-5">
                            <div className="card-wrapper ">
                                <div className="card">
                                    <div className="card-body">
                                        <img style={{ width: "100%", height: "100%" }} src="https://cdn11.bigcommerce.com/s-qbep6rt4nh/images/stencil/500x659/products/116/386/White-Chardonnay-w-cup__40812.1488466018.png?c=2" alt="" />
                                        <button className='feature-fav__btn'>
                                            <i class="fa-solid fa-heart"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <p className='lato-font' style={{ color: "RGB(176, 151, 109)" }}>SUTTER HOME</p>
                                    <Link className='playfair-font card-link' style={{ marginBottom: "20px", fontSize: "20px" }} >Villenoir Chardonnay</Link>
                                    <div style={{ color: "RGB(176, 151, 109)", margin: "30px 0", fontSize: "21px" }} className='notoserif-font'>$100.00</div>
                                    <button className='lato-font add-button'>ADD TO CART</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestCollecions