// import React from "react";
// import { Helmet } from 'react-helmet'

// const AllShopWines = () => {
//     return (
//         <>
//             <Helmet>
//                 <title>All Shop Wines</title>
//             </Helmet>
//             <h1 style={{marginTop:"500px"}}>All Shop Wines</h1>
//         </>
//     )
// }

// export default AllShopWines



// import React, { useState, useEffect } from 'react';

// function FilterableData() {
//     const [data, setData] = useState([]);
//     const [filteredData, setFilteredData] = useState([]);
//     const [selectedBrand, setSelectedBrand] = useState(null);
//     const [selectedKind, setSelectedKind] = useState(null);

//     const [minPrice, setMinPrice] = useState('');
//     const [maxPrice, setMaxPrice] = useState('');

//     useEffect(() => {
//         fetch('http://localhost:3070/featured')
//             .then((response) => response.json())
//             .then((data) => setData(data))
//             .catch((error) => console.log(error));
//     }, []);

//     useEffect(() => {
//         let filtered = [...data];

//         if (selectedBrand) {
//             filtered = filtered.filter((item) => item.brand === selectedBrand);
//         }

//         if (selectedKind) {
//             filtered = filtered.filter((item) => item.kind === selectedKind);
//         }

//         if (minPrice !== '') {
//             filtered = filtered.filter((item) => item.price >= minPrice);
//         }

//         if (maxPrice !== '') {
//             filtered = filtered.filter((item) => item.price <= maxPrice);
//         }

//         setFilteredData(filtered);
//     }, [data, selectedBrand, selectedKind, minPrice, maxPrice]);

//     const handleBrandChange = (event) => {
//         const brand = event.target.value === 'all' ? null : event.target.value;
//         setSelectedBrand(brand);
//     };

//     const handleKindChange = (event) => {
//         const kind = event.target.value === 'all' ? null : event.target.value;
//         setSelectedKind(kind);
//     };

//     const handleMinPriceChange = (event) => {
//         setMinPrice(event.target.value);
//     };

//     const handleMaxPriceChange = (event) => {
//         setMaxPrice(event.target.value);
//     };

//     const handleReset = () => {
//         setSelectedBrand('');
//         setSelectedKind('');
//         setMinPrice('');
//         setMaxPrice('');
//         setFilteredData(data);
//     };

//     const brands = [...new Set(data.map((item) => item.brand))]; // get unique brands
//     const kinds = [...new Set(data.map((item) => item.kind))]; // get unique kinds

//     return (
//         <div style={{ margin: "200px auto" }}>
//             <h2>Filterable Data:</h2>
//             <div>
//                 <label>
//                     Brand:
//                     <select value={selectedBrand || 'all'} onChange={handleBrandChange}>
//                         <option value="all">All</option>
//                         {brands.map((brand, index) => (
//                             <option key={index} value={brand}>
//                                 {brand}
//                             </option>
//                         ))}
//                     </select>
//                 </label>
//                 <label>
//                     Kind:
//                     <select value={selectedKind || 'all'} onChange={handleKindChange}>
//                         <option value="all">All</option>
//                         {kinds.map((kind, index) => (
//                             <option key={index} value={kind}>
//                                 {kind}
//                             </option>
//                         ))}
//                     </select>
//                 </label>
//                 <label>
//                     Minimum Price:
//                     <input type="number" value={minPrice} onChange={handleMinPriceChange} />
//                 </label>
//                 <label>
//                     Maximum Price:
//                     <input type="number" value={maxPrice} onChange={handleMaxPriceChange} />
//                 </label>
//                 <button onClick={handleReset}>Reset</button>
//             </div>
//             <ul>
//                 {filteredData.map((item, index) => (
//                     <li key={index}>
//                         {item.brand}, {item.kind}, {item.name},{item.price}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default FilterableData;




//! MAIN 

// import React, { useState, useEffect } from 'react';

// function FilterableData() {
//     const [data, setData] = useState([]);
//     const [filteredData, setFilteredData] = useState([]);
//     const [selectedBrands, setSelectedBrands] = useState([]);
//     const [selectedKinds, setSelectedKinds] = useState([]);
//     const [minPrice, setMinPrice] = useState('');
//     const [maxPrice, setMaxPrice] = useState('');

//     useEffect(() => {
//         fetch('http://localhost:3070/featured')
//             .then((response) => response.json())
//             .then((data) => setData(data))
//             .catch((error) => console.log(error));
//     }, []);

//     useEffect(() => {
//         let filtered = [...data];

//         if (selectedBrands.length > 0) {
//             filtered = filtered.filter((item) => selectedBrands.includes(item.brand));
//         }

//         if (selectedKinds.length > 0) {
//             filtered = filtered.filter((item) => selectedKinds.includes(item.kind));
//         }

//         if (minPrice !== '') {
//             filtered = filtered.filter((item) => item.price >= minPrice);
//         }

//         if (maxPrice !== '') {
//             filtered = filtered.filter((item) => item.price <= maxPrice);
//         }

//         setFilteredData(filtered);
//     }, [data, selectedBrands, selectedKinds, minPrice, maxPrice]);

//     const handleBrandChange = (event) => {
//         const brand = event.target.value;
//         if (selectedBrands.includes(brand)) {
//             setSelectedBrands(selectedBrands.filter((b) => b !== brand));
//         } else {
//             setSelectedBrands([...selectedBrands, brand]);
//         }
//     };

//     const handleKindChange = (event) => {
//         const kind = event.target.value;
//         if (selectedKinds.includes(kind)) {
//             setSelectedKinds(selectedKinds.filter((k) => k !== kind));
//         } else {
//             setSelectedKinds([...selectedKinds, kind]);
//         }
//     };

//     const handleMinPriceChange = (event) => {
//         setMinPrice(event.target.value);
//     };

//     const handleMaxPriceChange = (event) => {
//         setMaxPrice(event.target.value);
//     };

//     const handleReset = () => {
//         setSelectedBrands([]);
//         setSelectedKinds([]);
//         setMinPrice('');
//         setMaxPrice('');
//         setFilteredData(data);
//     };

//     const brands = [...new Set(data.map((item) => item.brand))]; // get unique brands
//     const kinds = [...new Set(data.map((item) => item.kind))]; // get unique kinds

//     return (
//         <div style={{ margin: "200px auto" }}>
//             <h2>Filterable Data:</h2>
//             <div>
//                 <label>Brand:</label>
//                 <br />
//                 {brands.map((brand, index) => (
//                     <label key={index}>
//                         <input
//                             type="checkbox"
//                             value={brand}
//                             checked={selectedBrands.includes(brand)}
//                             onChange={handleBrandChange}
//                         />
//                         {brand}
//                     </label>
//                 ))}
//                 <br />
//                 <label>Kind:</label>
//                 <br />
//                 {kinds.map((kind, index) => (
//                     <label key={index}>
//                         <input
//                             type="checkbox"
//                             value={kind}
//                             checked={selectedKinds.includes(kind)}
//                             onChange={handleKindChange}
//                         />
//                         {kind}
//                     </label>
//                 ))}
//                 <br />
//                 <label>
//                     Minimum Price:
//                     <input type="number" value={minPrice} onChange={handleMinPriceChange} />
//                 </label>
//                 <label>
//                     Maximum Price:
//                     <input type="number" value={maxPrice} onChange={handleMaxPriceChange} />
//                 </label>
//                 <button onClick={handleReset}>Reset</button>
//             </div>
//             <ul>                 {filteredData.map((item, index) => (
//                 <li key={index}>
//                     {item.brand}, {item.kind}, {item.name},{item.price}
//                 </li>
//             ))}
//             </ul>
//         </div>
//     );
// }

// export default FilterableData;



import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import '../../styles/ShopWines/AllShopWines.css'
import { useState } from 'react';
import { useEffect } from 'react';

const AllShopWines = () => {

    // const [toggle, setToggle] = useState(false)





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
    // const [hiddenPrice, setHiddenPrice] = useState(true);

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
    }, [data, selectedBrands, selectedAlcohol, selectedAppelation, selectedKinds, minPrice, maxPrice]);

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
    };

    const alcoholToggle = () => {
        setHiddenAlcohol(!hiddenAlcohol);
    };

    const appelationToggle = () => {
        setHiddenAppelation(!hiddenAppelation);
    };

    const sizeToggle = () => {
        setHiddenSize(!hiddenSize);
    };

    const kindToggle = () => {
        setHiddenKind(!hiddenKind);
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
                                    <div className="brand" >
                                        <h5 className='playfair-font brand-h5' onClick={brandToggle}>Brand </h5>
                                        {
                                            hiddenBrand ? null : (
                                                <ul>
                                                    {brands.map((brand, index) => (
                                                        <li>
                                                            <label key={index}>
                                                                <input
                                                                    type="checkbox"
                                                                    value={brand}
                                                                    checked={selectedBrands.includes(brand)}
                                                                    onChange={handleBrandChange}
                                                                />
                                                                {brand}
                                                            </label>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )
                                        }

                                    </div>

                                    <div className="alcohol" >
                                        <h5 className='playfair-font brand-h5' onClick={alcoholToggle}>Alcohol</h5>
                                        {hiddenAlcohol ? null : (
                                            <ul>
                                                {alcohol.map((alcohol, index) => (
                                                    <li>
                                                        <label key={index}>
                                                            <input
                                                                type="checkbox"
                                                                value={alcohol}
                                                                checked={selectedAlcohol.includes(alcohol)}
                                                                onChange={handleAlcoholChange}
                                                            />
                                                            {alcohol}
                                                        </label>
                                                    </li>
                                                ))}
                                            </ul>

                                        )}

                                    </div>

                                    <div className="appelation" >
                                        <h5 className='playfair-font brand-h5' onClick={appelationToggle}>Appelation</h5>
                                        {hiddenAppelation ? null : (
                                            <ul>
                                                {appelation.map((appelation, index) => (
                                                    <li>
                                                        <label key={index}>
                                                            <input
                                                                type="checkbox"
                                                                value={appelation}
                                                                checked={selectedAppelation.includes(appelation)}
                                                                onChange={handleAppelationChange}
                                                            />
                                                            {appelation}
                                                        </label>
                                                    </li>
                                                ))}
                                            </ul>

                                        )}

                                    </div>

                                    <div className="size" >
                                        <h5 className='playfair-font brand-h5' onClick={sizeToggle}>Size</h5>
                                        {hiddenSize ? null : (
                                            <ul>
                                                {size.map((size, index) => (
                                                    <li>
                                                        <label key={index}>
                                                            <input
                                                                type="checkbox"
                                                                value={size}
                                                                checked={selectedSize.includes(size)}
                                                                onChange={handleSizeChange}
                                                            />
                                                            {size}
                                                        </label>
                                                    </li>
                                                ))}
                                            </ul>

                                        )}

                                    </div>

                                    <div className="kind" >
                                        <h5 className='playfair-font brand-h5' onClick={kindToggle}>Kind</h5>
                                        {hiddenKind ? null : (
                                            <ul>
                                                {kind.map((kind, index) => (
                                                    <li>
                                                        <label key={index}>
                                                            <input
                                                                type="checkbox"
                                                                value={kind}
                                                                checked={selectedKinds.includes(kind)}
                                                                onChange={handleKindChange}
                                                            />
                                                            {kind}
                                                        </label>
                                                    </li>
                                                ))}
                                            </ul>

                                        )}

                                    </div>

                                    <div>

                                        <h5 className='playfair-font brand-h5'>Price</h5>
                                        <input placeholder='min' type="number" value={minPrice} onChange={handleMinPriceChange} />
                                        <input placeholder='max' type="number" value={maxPrice} onChange={handleMaxPriceChange} />
                                    </div>

                                    <button onClick={handleReset}>Reset</button>
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
                                            <Link className='playfair-font card-link' style={{ marginBottom: "20px", fontSize: "20px" }} >{item.appelation}</Link>
                                            <div style={{ color: "RGB(176, 151, 109)", margin: "30px 0", fontSize: "21px" }} className='notoserif-font'>${item.price}.00</div>
                                            <button className='lato-font add-button'>ADD TO CART</button>
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

