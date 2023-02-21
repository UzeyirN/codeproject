// import React from "react";
// import { Helmet } from 'react-helmet'

// const RedWines = () => {
//     return (
//         <>
//             <Helmet>
//                 <title>Red Wines</title>
//             </Helmet>
//             <h1 style={{marginTop:"500px"}}>RED WINES</h1>
//         </>
//     )
// }

// export default RedWines



import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FilteredList() {
    const [select, setSelect] = useState([]);
    const [data, setData] = useState(null);


    useEffect(() => {
        axios.get('http://localhost:3070/featured')
            .then(response => {
                setData(response.data);
            })
            .catch(error => console.log(error));
    }, []);


    const handleSelect = (e) => {
        setSelect(e.target.value);
    };




    return (
        <>
            {/* <div style={{ margin: "100px auto" }}>
                <label>
                    Option 1
                    <input
                        type="checkbox"
                        name="option1"
                        checked={filterOptions.option1}
                        onChange={handleFilterOptionChange}
                    />
                </label>
                <label>
                    Option 2
                    <input
                        type="checkbox"
                        name="option2"
                        checked={filterOptions.option2}
                        onChange={handleFilterOptionChange}
                    />
                </label>
                <label>
                    Option 3
                    <input
                        type="checkbox"
                        name="option3"
                        checked={filterOptions.option3}
                        onChange={handleFilterOptionChange}
                    />
                </label>
                <ul>
                    {filteredItems.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div> */}

            <select class="form-select" onChange={handleSelect} style={{margin:"300px auto 50px auto"}} >
                {data && data.map((ops, i) => <option placeholder='Appelation' key={i}>{ops.appelation}</option>)}
            </select>
            <div>
                {
                    data && data
                        .filter((product) => {
                            return select === "" ? product : product.appelation.includes(select)
                        })
                        .map((data) => (
                            <ul>
                                <li>
                                    <img style={{ width: "100px", height: "100" }} src={data.image} alt="" />
                                </li>
                                <li>
                                    {data.brand}
                                </li>
                                <li>
                                    {data.appelation}
                                </li>
                                <li>
                                    {data.price}
                                </li>
                            </ul>
                        ))
                }
            </div>

        </>

    );
}

export default FilteredList;
