import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import '../../styles/ShopWines/AllShopWines.css'
import { useState } from 'react';
import { useEffect } from 'react';

const AllShopWines = () => {

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedAlcohol, setSelectedAlcohol] = useState([]);
    const [selectedAppelation, setSelectedAppelation] = useState([]);
    const [selectedSize, setSelectedSize] = useState([]);
    const [selectedKinds, setSelectedKinds] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const [hiddenBrand, setHiddenBrand] = useState(true);
    const [hiddenAlcohol, setHiddenAlcohol] = useState(true);
    const [hiddenAppelation, setHiddenAppelation] = useState(true);
    const [hiddenSize, setHiddenSize] = useState(true);
    const [hiddenKind, setHiddenKind] = useState(true);

    const [brandPlus, setBrandPlus] = useState(true);
    const [alcoholPlus, setAlcoholPlus] = useState(true);
    const [appelationPlus, setAppelationPlus] = useState(true);
    const [sizePlus, setSizePlus] = useState(true);
    const [kindPlus, setKindPlus] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3070/featured')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.log(error));
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

        if (selectedKinds.length > 0) {
            filtered = filtered.filter((item) => selectedKinds.includes(item.kind));
        }

        if (minPrice !== '') {
            filtered = filtered.filter((item) => item.price >= minPrice);
        }

        if (maxPrice !== '') {
            filtered = filtered.filter((item) => item.price <= maxPrice);
        }

        setFilteredData(filtered);
    }, [data, selectedBrands, selectedAlcohol, selectedAppelation, selectedSize, selectedKinds, minPrice, maxPrice]);

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
            setSelectedAppelation([...selectedAlcohol, appelation]);
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

    const handleKindChange = (event) => {
        const kind = event.target.value;
        if (selectedKinds.includes(kind)) {
            setSelectedKinds(selectedKinds.filter((k) => k !== kind));
        } else {
            setSelectedKinds([...selectedKinds, kind]);
        }
    };

    const handleMinPriceChange = (event) => {
        setMinPrice(event.target.value);
    };

    const handleMaxPriceChange = (event) => {
        setMaxPrice(event.target.value);
    };

    const handleReset = () => {
        setSelectedBrands([]);
        setSelectedKinds([]);
        setSelectedAlcohol([]);
        setSelectedAppelation([]);
        setSelectedSize([]);
        setMinPrice('');
        setMaxPrice('');
        setFilteredData(data);
    };

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

    const kindToggle = () => {
        setHiddenKind(!hiddenKind);
        setKindPlus(!kindPlus);
    };

    const brands = [...new Set(data.map((item) => item.brand))]; // get unique brands
    const alcohol = [...new Set(data.map((item) => item.alcohol))]; // get unique alcohol
    const appelation = [...new Set(data.map((item) => item.appelation))]; // get unique appelation
    const size = [...new Set(data.map((item) => item.size))]; // get unique size
    const kind = [...new Set(data.map((item) => item.kind))]; // get unique kinds


    return (
        <>
            <Helmet>
                <title>All Shop Wines</title>
            </Helmet>

            <div className='all-top'>
                <span className='all-top__wrapper'>
                    <h2 className='playfair-font' style={{ color: "white" }}>SHOP WINES</h2>
                    <p className='lato-font all-nav' style={{ color: "gray" }}><span style={{ color: "RGB(176, 151, 109)" }}>Home</span> / Shop wines</p>
                </span>
            </div>

            <div className="all-wrapper">
                <div className="container">
                    <div className="row d-flex justify-content-between all-content__wrapper">
                        <div className="all-filter__wrapper g-0">

                            <div className='filter-box'>
                                <div className='shop-wines'>
                                    <h5 className='playfair-font'>Shop Wines</h5>
                                    <div className='border-line'></div>
                                    <div className='shop-wines__links'>
                                        <Link to='redwines' className='shop-link'>Red Wines</Link>
                                        <Link to='whitewines' className='shop-link'>White Wines</Link>
                                    </div>
                                </div>
                            </div>

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
                                        <h5 className={`playfair-font item-h5 ${appelationPlus ? 'plus' : 'minus'}`} onClick={appelationToggle}>{appelationPlus ? '+' : '-'}
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

                                    <div className="kind  filter-item" >
                                        <h5 className={`playfair-font item-h5 ${kindPlus ? 'plus' : 'minus'}`} onClick={kindToggle}>{kindPlus ? '+' : '-'}
                                            {' '} Kind</h5>
                                        {hiddenKind ? null : (
                                            <ul>
                                                {kind.map((kind, index) => (
                                                    <li className='lato-font'>
                                                        <label key={index}>
                                                            <input
                                                                type="checkbox"
                                                                value={kind}
                                                                checked={selectedKinds.includes(kind)}
                                                                onChange={handleKindChange}
                                                                className='filter-input'

                                                            />
                                                            {kind}
                                                        </label>
                                                    </li>
                                                ))}
                                            </ul>

                                        )}

                                    </div>

                                    <div className='filter-item'>
                                        <h5 className='playfair-font item-h5'>Price</h5>
                                        <input placeholder='MIN' type="number" value={minPrice} onChange={handleMinPriceChange} className='price-input' />
                                        <input placeholder='MAX' type="number" value={maxPrice} onChange={handleMaxPriceChange} className='price-input' />
                                    </div>

                                    <button className='filter-reset__btn lato-font' onClick={handleReset}>UPDATE</button>
                                </div>
                            </div>
                        </div>
                        <div className="all-card__wrapper">
                            <div className="row">

                                {filteredData.map((item, index) => (
                                    <div className="cards col-6">
                                        <div className="card-all" key={index}>
                                            <div className="allCard-body">
                                                <img style={{ height: "100%" }} src={item.image} alt="" />
                                            </div>
                                        </div>
                                        <div className="card-content__all">
                                            <p className='lato-font' style={{ color: "RGB(176, 151, 109)" }}>{item.brand}</p>
                                            <Link className='playfair-font card-link appelation' >{item.appelation}</Link>
                                            <div style={{ color: "RGB(176, 151, 109)", margin: "30px 0", fontSize: "21px" }} className='notoserif-font'>${item.price}.00</div>
                                            <button className='lato-font add-button shop-btn'>ADD TO CART</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AllShopWines

