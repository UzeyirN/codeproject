// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Loading from "../../components/Loading";
// import '../../styles/Wishlist.css'
// import { Helmet } from 'react-helmet';

// const Wishlist = () => {
//     const [product, setProduct] = useState(null);
//     const [loading, setLoading] = useState(true)



//     const fetchData = async () => {
//         try {
//             const response = await fetch('http://localhost:3070/wishlist');
//             const data = await response.json();
//             setProduct(data);
//             setLoading(false);



//         } catch (error) {
//             console.error(error);
//         }
//     };


//     const handleDelete = async (id) => {
//         await fetch(`http://localhost:3070/wishlist/${id}`, {
//             method: "DELETE",
//         });
//         fetchData();
//     };



//     useEffect(() => {
//         fetchData();
//     }, []);

//     return (
//         <>
//             <Helmet>
//                 <title>WISHLIST</title>
//             </Helmet>

//             <div className="wish-wrapper">
//                 <div className='wish-top'>
//                     <span className='wish-top__wrapper'>
//                         <h2 className='playfair-font' style={{ color: "white" }}>WISHLIST</h2>
//                     </span>

//                 </div>
//                 <div className=" container-fluid container-xl ">
//                     <div className="row ">
//                         {
//                             loading ? <Loading /> :
//                                 product?.map((products) => (
//                                     <div className="col-12 col-sm-6 col-lg-4 mb-5">
//                                         <div className="card-wrapper wish-card__wrapper">
//                                             <div className="card">
//                                                 <div className="card-body">
//                                                     <img style={{ width: "100%", height: "100%" }} src={products.image} alt="" />
//                                                 </div>
//                                             </div>
//                                             <div className="card-content">
//                                                 <p className='lato-font' style={{ color: "RGB(176, 151, 109)" }}>{products.brand}</p>
//                                                 <Link className='playfair-font card-link' style={{ marginBottom: "20px", fontSize: "20px" }} >{products.appelation}</Link>
//                                                 <div style={{ color: "RGB(176, 151, 109)", margin: "30px 0", fontSize: "21px" }} className='notoserif-font'>${products.price}</div>
//                                                 <button className='lato-font add-button '>ADD TO CART</button>
//                                                 <button onClick={() => handleDelete(products._id)} className='lato-font add-button ' style={{ marginTop: "10px" }}>DELETE</button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))
//                         }
//                     </div>
//                 </div>
//             </div>
//         </>



//     );
// };

// export default Wishlist;

import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import '../../styles/Wishlist.css'
import { Helmet } from 'react-helmet';

const Wishlist = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true)

    const [quantities, setQuantities] = useState({});

    const increaseQuantity = (id) => {
        setQuantities({ ...quantities, [id]: (quantities[id] || 0) + 1 });
    };

    const decreaseQuantity = (id) => {
        setQuantities({ ...quantities, [id]: (quantities[id] || 1) - 1 });
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

    const price = product?.reduce((sum, products) => sum + parseFloat(products.price) * (quantities[products._id] || 0), 0)
    
    return (
        <div className="wishlist">
            <Helmet>
                <title>WISHLIST</title>
            </Helmet>

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
                                <tbody>
                                    <tr>

                                        <td>
                                            <div className='image-wrapper' key={products._id}>
                                                <img style={{ width: "100%", height: "100%" }} src={products.image} alt="" />
                                            </div>
                                        </td>

                                        <td className='cart-td'><p className="lato-font wish-brand__p">{products.brand}</p>
                                            <p className="playfair-font wish-appelation__p"> {products.appelation}</p>
                                        </td>

                                        <td className='cart-td '><p className="lato-font wish-price__p"> ${products.price}</p></td>

                                        <td className='cart-td'>
                                            <div className="quantity-btn__wrapper">
                                                <button onClick={() => increaseQuantity(products._id)} className="quantity-btn">+</button>
                                                <div className="quantity-num">{quantities[products._id] || 0}</div>
                                                <button onClick={() => decreaseQuantity(products._id)} className="quantity-btn">-</button>
                                            </div>
                                        </td>

                                        <td className='cart-td'>
                                            <div className="wish-price__total">
                                                <span className="lato-font wish-total__p">${parseFloat(products.price) * (quantities[products._id] || 0)}</span>
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
                    <button className="payment-btn lato-font">
                        SALAM
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Wishlist;







