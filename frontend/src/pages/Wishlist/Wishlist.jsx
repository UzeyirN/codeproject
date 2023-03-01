import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import '../../styles/Wishlist.css'
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { Link } from "react-router-dom";

const getAuthToken = () => {
    const name = 'token=';
    const cookieArr = document.cookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
        let cookie = cookieArr[i].trim();
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return null;
};

const tokenRequired = () => {
    const token = getAuthToken();

    axios.post('http://127.0.0.1:3070/customertoken/', { token })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
            window.location.href = '/customerlogin';
        });
}

const Wishlist = () => {

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true)
    const [quantities, setQuantities] = useState({});

    tokenRequired()

    const increaseQuantity = (id) => {
        const updatedQuantities = { ...quantities, [id]: (quantities[id] || 0) + 1 };
        setQuantities(updatedQuantities);
        localStorage.setItem('quantities', JSON.stringify(updatedQuantities));
    };

    const decreaseQuantity = (id) => {
        const updatedQuantities = { ...quantities, [id]: (quantities[id] || 1) - 1 };
        setQuantities(updatedQuantities);
        localStorage.setItem('quantities', JSON.stringify(updatedQuantities));
    };

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3070/wishlist');
            const data = await response.json();
            setProduct(data);
            setLoading(false);

            const initialQuantities = {};
            data.forEach(product => {
                initialQuantities[product._id] = 0;
            });

            const savedQuantities = localStorage.getItem('quantities');
            if (savedQuantities) {
                setQuantities(JSON.parse(savedQuantities));
            } else {
                setQuantities(initialQuantities);
            }
        } catch (error) {
            console.error(error);
        }
    };


    const handleDelete = async (id) => {
        const confirmed = window.confirm("Are you sure you want to delete this item?");

        if (confirmed) {
            try {
                await fetch(`http://localhost:3070/wishlist/${id}`, {
                    method: "DELETE",
                });

                const existingItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
                const updatedItems = existingItems.filter((item) => item.id !== id);
                localStorage.setItem("wishlistItems", JSON.stringify(updatedItems));

                fetchData();
                toast.success('Successfully deleted!', {
                    autoClose: 1000
                });
            } catch (error) {
                console.error(error);
            }
        }
    };

    const handleClear = async () => {
        const confirmed = window.confirm("Are you sure you want to delete all items?");

        if (confirmed) {
            try {
                await fetch("http://localhost:3070/wishlist", {
                    method: "DELETE",
                });

                localStorage.removeItem("wishlistItems");
                toast.success('All Wishlist items have been deleted!!', {
                    autoClose: 1000
                });
                fetchData();
            } catch (error) {
                console.error(error);
            }
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const price = product?.reduce((sum, products) => sum + parseFloat(products.price) * (quantities[products._id] || 1), 0)

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [])

    return (
        <div className="wishlist">
            <Helmet>
                <title>WISHLIST</title>
            </Helmet>
            <ToastContainer />


            <div className='wish-top'>
                <span className='wish-top__wrapper'>
                    <h2 className='playfair-font' style={{ color: "white" }}>YOUR CART</h2>
                    <p className='lato-font white-nav' style={{ color: "gray" }}><span style={{ color: "RGB(176, 151, 109)" }}>Home</span>
                        / Your Cart</p>
                </span>
            </div>

            <div className="container">
                <div style={{ overflowX: "auto" }}>
                    <div className="table lato-font">
                        {/* <div style={{ border: "2px solid #f2f2f2" }}>
                            <div>
                                <div className="cart-th" >ITEM</div>
                                <div className="cart-th" >BRAND</div>
                                <div className="cart-th" >PRICE</div>
                                <div className="cart-th" >QUANTITY</div>
                                <div className="cart-th" >DETAIL</div>
                                <div className="cart-th" >TOTAL</div>
                                <div className="cart-th" >DELETE</div>
                            </div>
                        </div> */}
                        <div>
                            {loading ? (
                                <Loading />
                            ) : (
                                product?.map((products) => (
                                    <div key={products._id}>
                                        <div className="image-wrapper" data-label="ITEM" >
                                            <img
                                                style={{ width: "100%", height: "100%" }}
                                                src={products.image}
                                                alt="wine"
                                            />
                                        </div>
                                        <div data-label="BRAND" className="cart-td">
                                            <p className="lato-font wish-brand__p">{products.brand}</p>
                                            <p className="playfair-font wish-appelation__p">
                                                {" "}
                                                {products.appelation}
                                            </p>
                                        </div>

                                        <div data-label="PRICE" className="cart-td ">
                                            <p className="lato-font wish-price__p"> ${products.price}</p>
                                        </div>

                                        <div data-label="QUANTITY" className="cart-td">
                                            <span className="quantity-btn__wrapper">
                                                <button
                                                    onClick={() => increaseQuantity(products._id)}
                                                    className="quantity-btn"
                                                >
                                                    +
                                                </button>
                                                <span className="quantity-num">
                                                    {quantities[products._id] || 1}
                                                </span>
                                                <button
                                                    onClick={() => decreaseQuantity(products._id)}
                                                    className="quantity-btn"
                                                >
                                                    -
                                                </button>
                                            </span>
                                        </div>
                                        <div>
                                            <p className="lato-font wish-price__p"> <Link className="detail-link" to={`${products._id}`}>Detail</Link></p>
                                        </div>

                                        <div data-label="TOTAL" className="cart-td">
                                            <span className="wish-price__total">
                                                <span className="lato-font wish-total__p">
                                                    ${parseFloat(products.price) * (quantities[products._id] || 1)}
                                                </span>
                                            </span>
                                        </div>
                                        <div>
                                            <i
                                                onClick={() => handleDelete(products._id)}
                                                className="fa-solid fa-circle-xmark wish-price__p"
                                            ></i>
                                        </div>

                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>

                <div className="subtotal-wrapper">
                    <div className="subtotal-inner">
                        <div className="subtotal-p lato-font">Subtotal</div>
                        <div className="lato-font wish-total__p">$ {price}</div>
                    </div>
                    <div>
                        <button onClick={handleClear} style={{ marginRight: "10px" }} className="payment-btn clear-btn lato-font">
                            CLEAR ALL
                        </button>
                        <button className="payment-btn lato-font">
                            PAYMENT
                        </button>
                    </div>
                </div>
            </div>

            
        </div >
    );
};

export default Wishlist;







