import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet'
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import '../../styles/ShopWines/RoseWines.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RoseWines = () => {

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);

    //!selected
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedAlcohol, setSelectedAlcohol] = useState([]);
    const [selectedAppelation, setSelectedAppelation] = useState([]);
    const [selectedSize, setSelectedSize] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    //!hidden
    const [hiddenBrand, setHiddenBrand] = useState(true);
    const [hiddenAlcohol, setHiddenAlcohol] = useState(true);
    const [hiddenAppelation, setHiddenAppelation] = useState(true);
    const [hiddenSize, setHiddenSize] = useState(true);
    const [showPriceInputs, setShowPriceInputs] = useState(false);

    //! toggle + ,toggle -
    const [brandPlus, setBrandPlus] = useState(true);
    const [alcoholPlus, setAlcoholPlus] = useState(true);
    const [appelationPlus, setAppelationPlus] = useState(true);
    const [sizePlus, setSizePlus] = useState(true);
    const [priceText, setPriceText] = useState('+');


    useEffect(() => {
        fetch('http://localhost:3070/featured')
            .then(response => response.json())
            .then(data => {
                const roseWines = data.filter(item => item.kind === "Rose");
                setData(roseWines);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        let filtered = [...data];

        if (selectedBrands.length > 0) {
            filtered = filtered.filter((item) => selectedBrands.includes(item.brand));
        }

        if (selectedAlcohol.length > 0) {
            filtered = filtered.filter((item) => selectedAlcohol.includes(item.alcohol));
        }

        if (selectedAppelation.length > 0) {
            filtered = filtered.filter((item) => selectedAppelation.includes(item.appelation));
        }

        if (selectedSize.length > 0) {
            filtered = filtered.filter((item) => selectedSize.includes(item.size));
        }

        if (minPrice !== '') {
            filtered = filtered.filter((item) => item.price >= minPrice);
        }

        if (maxPrice !== '') {
            filtered = filtered.filter((item) => item.price <= maxPrice);
        }

        setFilteredData(filtered);
    }, [data, selectedBrands, selectedAlcohol, selectedAppelation, selectedSize, minPrice, maxPrice]);


    //!filter
    const handleBrandChange = (event) => {
        const brand = event.target.value;
        if (selectedBrands.includes(brand)) {
            setSelectedBrands(selectedBrands.filter((b) => b !== brand));
        } else {
            setSelectedBrands([...selectedBrands, brand]);
        }
    };

    const handleAlcoholChange = (event) => {
        const alcohol = event.target.value;
        if (selectedAlcohol.includes(alcohol)) {
            setSelectedAlcohol(selectedAlcohol.filter((a) => a !== alcohol));
        } else {
            setSelectedAlcohol([...selectedAlcohol, alcohol]);
        }
    };

    const handleAppelationChange = (event) => {
        const appelation = event.target.value;
        if (selectedAppelation.includes(appelation)) {
            setSelectedAppelation(selectedAppelation.filter((ap) => ap !== appelation));
        } else {
            setSelectedAppelation([...selectedAppelation, appelation]);
        }
    };

    const handleSizeChange = (event) => {
        const size = event.target.value;
        if (selectedSize.includes(size)) {
            setSelectedSize(selectedSize.filter((ap) => ap !== size));
        } else {
            setSelectedSize([...selectedSize, size]);
        }
    };

    const handleMinPriceChange = (event) => {
        setMinPrice(event.target.value);
    };

    const handleMaxPriceChange = (event) => {
        setMaxPrice(event.target.value);
    };


    //!update
    const handleReset = () => {
        setSelectedBrands([]);
        setSelectedAlcohol([]);
        setSelectedAppelation([]);
        setSelectedSize([]);
        setMinPrice('');
        setMaxPrice('');
        setFilteredData(data);
    };

    //!Price style
    const styles = {
        color: showPriceInputs ? 'RGB(176, 151, 109)' : 'black'
    };

    //!toggle
    const brandToggle = () => {
        setHiddenBrand(!hiddenBrand);
        setBrandPlus(!brandPlus);
    };

    const alcoholToggle = () => {
        setHiddenAlcohol(!hiddenAlcohol);
        setAlcoholPlus(!alcoholPlus)
    };

    const appelationToggle = () => {
        setHiddenAppelation(!hiddenAppelation);
        setAppelationPlus(!appelationPlus);
    };

    const sizeToggle = () => {
        setHiddenSize(!hiddenSize);
        setSizePlus(!sizePlus);
    };

    const handlePriceHeaderClick = () => {
        setShowPriceInputs(!showPriceInputs);
        setPriceText(priceText === '+' ? '-' : '+');
    }

    //!add to wishlist
    const addToWishList = async (id) => {
        await fetch("http://localhost:3070/wishlist", {
            method: "Post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
        });
        toast.success('Added to cart!');

    };

    const brands = [...new Set(data.map((item) => item.brand))]; // get unique brands
    const alcohol = [...new Set(data.map((item) => item.alcohol))]; // get unique alcohol
    const appelation = [...new Set(data.map((item) => item.appelation))]; // get unique appelation
    const size = [...new Set(data.map((item) => item.size))]; // get unique size

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
                <title>Rose Wines</title>
            </Helmet>
            <ToastContainer />


            <div className='rose-wines__top'>
                <div className="container">
                    <span className='rose-top__wrapper'>
                        <h2 className='playfair-font' style={{ color: "white" }}>ROSE WINES</h2>
                        <p className="rose-top__article lato-font" style={{ color: "gray" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis libero, nulla minima ipsa ipsam voluptates suscipit adipisci.
                            Animi delectus architecto natus, cupiditate sequi ipsum veniam omnis!</p>
                        <p className='lato-font rose-nav' style={{ color: "gray" }}><span style={{ color: "RGB(176, 151, 109)" }}>Home</span>
                            <span style={{ color: "RGB(176, 151, 109)" }}> / Shop Wines</span> / Rose Wines</p>
                    </span>
                </div>
            </div>

            <div className="rose-wrapper">
                <div className="container">
                    <div className="row d-flex justify-content-between rose-content__wrapper">
                        <div className="rose-filter__wrapper g-0">
                            <div className="filter-box">
                                <div className="refine-by">
                                    <h5 className='playfair-font'>Refine by</h5>
                                    <div className='border-line'></div>
                                    <div className="brand filter-item" >
                                        <h5 className={`playfair-font item-h5 ${brandPlus ? 'plus' : 'minus'}`} onClick={brandToggle}>{brandPlus ? '+' : '-'}
                                            {' '} Brand </h5>
                                        {
                                            hiddenBrand ? null : (
                                                <ul>
                                                    {brands.map((brand, index) => (
                                                        <li className='lato-font'>
                                                            <label key={index}>
                                                                <input
                                                                    type="checkbox"
                                                                    value={brand}
                                                                    checked={selectedBrands.includes(brand)}
                                                                    onChange={handleBrandChange}
                                                                    className='filter-input'
                                                                />
                                                                {brand}
                                                            </label>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )
                                        }
                                    </div>

                                    <div className="alcohol filter-item" >
                                        <h5 className={`playfair-font item-h5 ${alcoholPlus ? 'plus' : 'minus'}`} onClick={alcoholToggle}>{alcoholPlus ? '+' : '-'}
                                            {' '} Alcohol</h5>
                                        {hiddenAlcohol ? null : (
                                            <ul>
                                                {alcohol.map((alcohol, index) => (
                                                    <li className='lato-font'>
                                                        <label key={index}>
                                                            <input
                                                                type="checkbox"
                                                                value={alcohol}
                                                                checked={selectedAlcohol.includes(alcohol)}
                                                                onChange={handleAlcoholChange}
                                                                className='filter-input'
                                                            />
                                                            {alcohol}
                                                        </label>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>

                                    <div className="appelation filter-item" >
                                        <h5 className={`playfair-font item-h5 ${appelationPlus ? 'plus' : 'minus'}`} onClick={appelationToggle}>
                                            {appelationPlus ? '+' : '-'}
                                            {' '} Appelation</h5>
                                        {hiddenAppelation ? null : (
                                            <ul>
                                                {appelation.map((appelation, index) => (
                                                    <li className='lato-font'>
                                                        <label key={index}>
                                                            <input
                                                                type="checkbox"
                                                                value={appelation}
                                                                checked={selectedAppelation.includes(appelation)}
                                                                onChange={handleAppelationChange}
                                                                className='filter-input'
                                                            />
                                                            {appelation}
                                                        </label>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>

                                    <div className="size  filter-item" >
                                        <h5 className={`playfair-font item-h5 ${sizePlus ? 'plus' : 'minus'}`} onClick={sizeToggle}>{sizePlus ? '+' : '-'}
                                            {' '} Size</h5>
                                        {hiddenSize ? null : (
                                            <ul>
                                                {size.map((size, index) => (
                                                    <li className='lato-font'>
                                                        <label key={index}>
                                                            <input
                                                                type="checkbox"
                                                                value={size}
                                                                checked={selectedSize.includes(size)}
                                                                onChange={handleSizeChange}
                                                                className='filter-input'
                                                            />
                                                            {size}
                                                        </label>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>

                                    <div className='filter-item'>
                                        <h5 className='playfair-font item-h5' onClick={handlePriceHeaderClick} style={styles}>{priceText} Price</h5>
                                        {showPriceInputs && (
                                            <>
                                                <input placeholder='MIN' type="number" value={minPrice} onChange={handleMinPriceChange} className='price-input' />
                                                <input placeholder='MAX' type="number" value={maxPrice} onChange={handleMaxPriceChange} className='price-input' />
                                            </>
                                        )}
                                    </div>

                                    <button className='filter-reset__btn lato-font' onClick={handleReset}>UPDATE</button>
                                </div>
                            </div>
                        </div>
                        <div className="rose-card__wrapper">
                            <div className="row">
                                {
                                    loading ? (
                                        <Loading />
                                    ) : filteredData && filteredData.length ? (
                                        filteredData.map(({ _id, image, brand, appelation, price }) => (
                                            <div className="cards col-6" key={_id}>
                                                <div className="card-rose">
                                                    <div className="roseCard-body">
                                                        <img style={{ height: "100%" }} src={image} alt="" />
                                                    </div>
                                                </div>
                                                <div className="card-content__rose">
                                                    <p className="lato-font" style={{ color: "RGB(176, 151, 109)" }}>
                                                        {brand}
                                                    </p>
                                                    <Link className="playfair-font card-link appelation">
                                                        {appelation}
                                                    </Link>
                                                    <div
                                                        style={{
                                                            color: "RGB(176, 151, 109)",
                                                            margin: "30px 0",
                                                            fontSize: "21px",
                                                        }}
                                                        className="notoserif-font"
                                                    >
                                                        ${price}.00
                                                    </div>
                                                    <button onClick={() => addToWishList(_id)} className="lato-font add-button shop-btn">
                                                        ADD TO CART
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <span className="no-data">There are no products listed under this category.</span>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RoseWines





