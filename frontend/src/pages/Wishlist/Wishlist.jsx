import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import '../../styles/Wishlist.css'

// import WishlistContext from '../../Context/WishlistContext'

const Wishlist = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)


    // const [count, setCount] = useState(0);
    // const { setWishlistCount } = useContext(WishlistContext);



    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3070/wishlist');
            const data = await response.json();
            setData(data);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };



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

        <div className="wish-wrapper">
            <div className='wish-top'>
                <span className='wish-top__wrapper'>
                    <h2 className='playfair-font' style={{ color: "white" }}>WISHLIST</h2>
                </span>

            </div>
            <div className=" container-fluid container-xl ">
                <div className="row ">
                    {
                        loading ? <Loading /> :
                            data?.map((products) => (
                                <div className="col-12 col-sm-6 col-lg-4 mb-5">
                                    <div className="card-wrapper wish-card__wrapper">
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

