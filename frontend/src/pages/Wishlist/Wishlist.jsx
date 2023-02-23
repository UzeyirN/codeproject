import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import '../../styles/Wishlist.css'
import { Helmet } from 'react-helmet';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Wishlist = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true)

    const [quantities, setQuantities] = useState({});


    const increaseQuantity = (id) => {
        setQuantities({ ...quantities, [id]: (quantities[id] || 0) + 1 });
        localStorage.setItem("quantites", JSON.stringify(quantities));
    };

    const decreaseQuantity = (id) => {
        setQuantities({ ...quantities, [id]: (quantities[id] || 1) - 1 });
        localStorage.setItem("quantites", JSON.stringify(quantities));

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
            setQuantities(initialQuantities);
        } catch (error) {
            console.error(error);
        }
        localStorage.setItem("quantites", JSON.stringify(quantities));

    };

    const handleDelete = async (id) => {
        await fetch(`http://localhost:3070/wishlist/${id}`, {
            method: "DELETE",
        });
        fetchData();

        window.alert("Are you sure you want to delete this item?");
        toast.success('Successfuly delete!');
        localStorage.setItem("quantites", JSON.stringify(quantities));
    };

    const handleClear = async () => {
        try {
            await fetch("http://localhost:3070/wishlist", {
                method: "DELETE",
            });
            window.alert("Are you sure you want to delete all items?");
            toast.success("All Wishlist items have been deleted!");
            fetchData();
        } catch (error) {
            console.error(error);
        }
        localStorage.setItem("quantites", JSON.stringify(quantities));
    };

    useEffect(() => {
        fetchData();
    }, []);

    const price = product?.reduce((sum, products) => sum + parseFloat(products.price) * (quantities[products._id] || 1), 0)

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
                <table className="table wish-table__wrapper">
                    <thead>
                        <tr>
                            <th className="cart-th" scope="col">ITEM</th>
                            <th className="cart-th" scope="col">BRAND</th>
                            <th className="cart-th" scope="col">PRICE</th>
                            <th className="cart-th" scope="col">QUANTITY</th>
                            <th className="cart-th" scope="col">TOTAL</th>
                        </tr>
                    </thead>
                    {
                        loading ? <Loading /> :

                            product?.map((products) => (
                                <tbody >
                                    <tr>

                                        <td className="col-sm-12">
                                            <div className='image-wrapper' key={products._id}>
                                                <img style={{ width: "100%", height: "100%" }} src={products.image} alt="" />
                                            </div>
                                        </td>

                                        <td className='cart-td col-sm-12'><p className="lato-font wish-brand__p">{products.brand}</p>
                                            <p className="playfair-font wish-appelation__p"> {products.appelation}</p>
                                        </td>

                                        <td className='cart-td col-sm-12 '><p className="lato-font wish-price__p"> ${products.price}</p></td>

                                        <td className='cart-td col-sm-12'>
                                            <div className="quantity-btn__wrapper">
                                                <button onClick={() => increaseQuantity(products._id)} className="quantity-btn">+</button>
                                                <div className="quantity-num">{quantities[products._id] || 1}</div>
                                                <button onClick={() => decreaseQuantity(products._id)} className="quantity-btn">-</button>
                                            </div>
                                        </td>

                                        <td className='cart-td col-sm-12'>
                                            <div className="wish-price__total">
                                                <span className="lato-font wish-total__p">${parseFloat(products.price) * (quantities[products._id] || 1)}</span>

                                                <i onClick={() => handleDelete(products._id)} class="fa-solid fa-circle-xmark"></i>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            ))
                    }
                </table>

                <div className="subtotal-wrapper">
                    <div className="subtotal-inner">
                        <span className="subtotal-p lato-font">Subtotal</span>
                        <span className="lato-font wish-total__p">$ {price}</span>
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







