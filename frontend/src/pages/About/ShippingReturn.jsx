import React,{useEffect} from "react";
import { Helmet } from 'react-helmet'
import '../../styles/About/ShippingReturn.css'

const ShippingReturn = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [])


    return (
        <>
            <Helmet>
                <title>Shipping & Return</title>
            </Helmet>

            <div className='shipping-top'>
                <span className="shipping-top__wrapper">
                    <h2 className='playfair-font' style={{ color: "white" }}>SHIPPING & RETURNS</h2>
                    <p className='lato-font shipping-nav' style={{ color: "gray" }}><span style={{ color: "RGB(176, 151, 109)" }}>Home / </span>
                        <span style={{ color: "RGB(176, 151, 109)" }}>About</span> / Shipping & Returns</p>
                </span>
            </div>
            <div className="container">
                <div className="shipping-wrapper">
                    <div className="shipping-article">
                        <p className='lato-font shipping-heading'>Returns Policy</p>
                        <p className="lato-font shipping-p">You may return most new, unopened items within 30 days
                            of delivery for a full refund. We'll also pay the return shipping costs if the return is a result of our error (you received an incorrect or defective item, etc.).</p>
                        <p className="lato-font shipping-p">You should expect to receive your refund within four weeks of giving your package to the return shipper, however, in many cases you will receive a refund more quickly.
                            This time period includes the transit time for us to receive your return from the shipper (5 to 10 business days), the time it takes us to process your return once we receive it (3 to 5 business days), and the time it takes your bank to process our refund request (5 to 10 business days).</p>
                        <p className="lato-font shipping-p">If you need to return an item, please Contact Us with your order number and details about the product you would like to return. We will respond quickly with instructions for how to return items from your order.</p>
                    </div>

                    <div className="shipping-article">
                        <p className='lato-font shipping-heading'>Shipping  </p>
                        <p className="lato-font shipping-p">We can ship to virtually any address in the world. Note that there are restrictions on some products, and some products cannot be shipped to
                            international destinations.</p>
                        <p className="lato-font shipping-p">When you place an order, we will estimate shipping and delivery dates for you based on the availability of your items and the shipping options you choose. Depending on the
                            shipping provider you choose, shipping date estimates may appear on the shipping quotes page.</p>
                        <p className="lato-font shipping-p">Please also note that the shipping rates for many items we sell are weight-based. The weight of any such item can be found on its detail page. To reflect the policies of
                            the shipping companies we use, all weights will be rounded up to the next full pound.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShippingReturn