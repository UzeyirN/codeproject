import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import '../../styles/Wishlist.css'


const WishlistDetail = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`http://localhost:3070/wishlist/` + id);
            setProducts(res.data);
        };
        getData();
    });

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [])

    return (

        <>
            <div className='wish-top'>
                <span className='wish-top__wrapper'>
                    <h2 className='playfair-font' style={{ color: "white" }}>PRODUCT DETAIL</h2>
                    <p className='lato-font white-nav' style={{ color: "gray" }}><span style={{ color: "RGB(176, 151, 109)" }}>Home</span>
                        <span style={{ color: "RGB(176, 151, 109)" }}> / Wishlist </span>
                        / Product detail</p>
                </span>
            </div>
            <div style={{ margin: "100px auto" }}>


                <div className="container">
                    <table className="table lato-font">
                        <thead style={{ border: "2px solid #f2f2f2" }}>
                            <th className="cart-th" scope="col"><p className='wish-table__title lato-font'>ITEM</p></th>
                            <th className="cart-th" scope="col"><p className='wish-table__title lato-font'>BRAND</p></th>
                            <th className="cart-th" scope="col"><p className='wish-table__title lato-font'>ALCOHOL</p></th>
                            <th className="cart-th" scope="col"><p className='wish-table__title lato-font'>APPELATION</p></th>
                            <th className="cart-th" scope="col"><p className='wish-table__title lato-font'>SIZE</p></th>
                            <th className="cart-th" scope="col"><p className='wish-table__title lato-font'>PRICE</p></th>
                            <th className="cart-th" scope="col"><p className='wish-table__title lato-font'>KIND</p></th>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="ITEM" >
                                    <div className="image-wrapper" >
                                        <img style={{ width: "100%", height: "100%" }} src={products.image} alt="" />
                                    </div>
                                </td>
                                <td>
                                    <span className='product-title lato-font'>BRAND</span><p className='detail-p playfair-font'> {products.brand}</p>
                                </td>
                                <td>
                                    <span className='product-title lato-font'>ALCOHOL</span><p className='detail-p playfair-font'> {products.alcohol} %</p>
                                </td>
                                <td>
                                    <span className='product-title lato-font'>APPELATION</span><p className='detail-p playfair-font'> {products.appelation}</p>
                                </td>
                                <td>
                                    <span className='product-title lato-font'>SIZE</span><p className='detail-p playfair-font'> {products.size} ml</p>
                                </td>
                                <td>
                                    <span className='product-title lato-font'>PRICE</span><p className='detail-p playfair-font'>$ {products.price}</p>
                                </td>
                                <td>
                                    <span className='product-title lato-font'>KIND</span><p className='detail-p playfair-font'> {products.kind}</p>
                                </td>


                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </>

    )
}

export default WishlistDetail
