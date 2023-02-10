import React, { useState, createContext } from 'react';

export const BasketContext = createContext();

const AddToBasket = () => {
    const [itemCount, setItemCount] = useState(0);

    const handleClick = () => {
        setItemCount(itemCount + 1);
    };

    return (
        <BasketContext.Provider value={{ itemCount, setItemCount }}>
            <div style={{marginTop:"300px"}}>
                <p >Number of items in basket: {itemCount}</p>
                <button onClick={handleClick}>Add to Basket</button>
            </div>

        </BasketContext.Provider>
    );
};

export default AddToBasket;
