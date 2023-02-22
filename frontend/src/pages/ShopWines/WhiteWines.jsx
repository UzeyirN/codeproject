import React,{useState} from "react";
import { Helmet } from 'react-helmet'
import { Link } from "react-router-dom";
import '../../styles/ShopWines/WhiteWines.css'

const WhiteWines = () => {

   const [toggle, setToggle] = useState(false)



    return (
        <>
            <Helmet>
                <title>White Wines</title>
            </Helmet>

            <div className='w-wines__top'>
                <div className="container">
                    <span className='white-top__wrapper'>
                        <h2 className='playfair-font' style={{ color: "white" }}>WHITE WINES</h2>
                        <p className="white-top__article lato-font" style={{ color: "gray" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis libero, nulla minima ipsa ipsam voluptates suscipit adipisci.
                            Animi delectus architecto natus, cupiditate sequi ipsum veniam omnis!</p>
                        <p className='lato-font white-nav' style={{ color: "gray" }}><span style={{ color: "RGB(176, 151, 109)" }}>Home</span>
                            <span style={{ color: "RGB(176, 151, 109)" }}> / Shop Wines</span> / White Wines</p>
                    </span>
                </div>
            </div>

            <div className="white-wrapper">
                <div className="container">
                    <div className="row d-flex justify-content-between white-content__wrapper">
                        <div className="white-filter__wrapper">

                            <div className="brand" >
                                <h5 onClick={()=>{setToggle(!toggle)}}> brand listi </h5>
                                <ul className={`brand-list ${toggle ? "salam" :"sagol"}`}  style={ {display:` ${toggle ? "none" :"block"} `}}>
                                    <li><input type="checkbox" />ff</li>
                                    <li><input type="checkbox" />fdfdf</li>
                                    <li><input type="checkbox" />fdfdff</li>
                                </ul>

                            </div>





                        </div>
                        <div className="white-card__wrapper">
                            <div className="white-banner">
                                <img style={{ width: "100%", height: "100%" }} src="https://cdn11.bigcommerce.com/s-qbep6rt4nh/images/stencil/original/s/wines-header-image__25732.original.jpg" alt="" />
                            </div>
                            <div className="white-cards">
                                <div className="row d-flex justify-content-between">
                                    <div className="col-lg-6 d-flex justify-content-start">
                                        <div className="wcard-wrapper">
                                            <div className="card-w">
                                                <div className="wCard-body">
                                                    <img style={{ height: "100%" }} src="https://cdn11.bigcommerce.com/s-qbep6rt4nh/images/stencil/500x659/products/116/386/White-Chardonnay-w-cup__40812.1488466018.png?c=2" alt="" />
                                                    <button className='feature-fav__btn'>
                                                        <i class="fa-solid fa-heart"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="card-content__w">
                                                <p className='lato-font' style={{ color: "RGB(176, 151, 109)" }}>SUTTER HOME</p>
                                                <Link className='playfair-font card-link' style={{ marginBottom: "20px", fontSize: "20px" }} >VILLENOIR</Link>
                                                <div style={{ color: "RGB(176, 151, 109)", margin: "30px 0", fontSize: "21px" }} className='notoserif-font'>$120.00</div>
                                                <button className='lato-font add-button'>ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex justify-content-end">
                                        <div className="wcard-wrapper">
                                            <div className="card-w">
                                                <div className="wCard-body">
                                                    <img style={{ height: "100%" }} src="https://cdn11.bigcommerce.com/s-qbep6rt4nh/images/stencil/500x659/products/116/386/White-Chardonnay-w-cup__40812.1488466018.png?c=2" alt="" />
                                                    <button className='feature-fav__btn'>
                                                        <i class="fa-solid fa-heart"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="card-content__w">
                                                <p className='lato-font' style={{ color: "RGB(176, 151, 109)" }}>SUTTER HOME</p>
                                                <Link className='playfair-font card-link' style={{ marginBottom: "20px", fontSize: "20px" }} >VILLENOIR</Link>
                                                <div style={{ color: "RGB(176, 151, 109)", margin: "30px 0", fontSize: "21px" }} className='notoserif-font'>$120.00</div>
                                                <button className='lato-font add-button'>ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}

export default WhiteWines