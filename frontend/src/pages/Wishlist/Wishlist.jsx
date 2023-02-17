import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import '../../styles/Wishlist.css'

const Wishlist = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)

    // const fetchData = async () => {
    //     await fetch('http://localhost:3070/wishlist')
    //         .then((response) => response.json())
    //         .then((data) => setData(data));

    //     setLoading(false);

    // }

    const fetchData = async () => {
        await axios.get("http://localhost:3070/wishlist").then((resp) => setData(resp.data));
        setLoading(false);

    }

    const handleDelete = async (id) => {
        await fetch(`http://localhost:3070/wishlist/${id}`, {
            method: "DELETE",
        });
        fetchData();
    };

    useEffect(() => {
        fetchData();
    }, []);
    console.log(data);

    return (
        <div className="latest-collections__wrapper">
            <span className='contact-top__wrapper'>
                <h2 className='playfair-font' style={{ color: "black" }}>WISHLIST</h2>
                {/* <p className='lato-font contact-nav' style={{ color: "gray" }}><span style={{ color: "RGB(176, 151, 109)" }}>Home</span>  / Contact us</p> */}
            </span>
            <div className=" container-fluid container-xl ">
                <div className="row ">
                    {
                        loading ? <Loading /> :
                            data?.map((products) => (
                                <div className="col-12 col-sm-6 col-lg-4 mb-5">
                                    <div className="card-wrapper ">
                                        <div className="card">
                                            <div className="card-body">
                                                <img style={{ width: "100%", height: "100%" }} src={products.image} alt="" />
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <p className='lato-font' style={{ color: "RGB(176, 151, 109)" }}>{products.brand}</p>
                                            <Link className='playfair-font card-link' style={{ marginBottom: "20px", fontSize: "20px" }} >{products.appelation}</Link>
                                            <div style={{ color: "RGB(176, 151, 109)", margin: "30px 0", fontSize: "21px" }} className='notoserif-font'>${products.price}</div>
                                            <button className='lato-font add-button '>ADD TO CART</button>
                                            <button onClick={() => handleDelete(products._id)} className='lato-font add-button ' style={{ marginTop: "10px" }}>DELETE</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Wishlist;

