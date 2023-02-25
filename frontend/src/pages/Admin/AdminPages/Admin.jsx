import React from 'react'
import { useEffect } from 'react';



const Admin = () => {


    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [])
    return (
        <>
            <h1>WELCOME</h1>

        </>
    )
}

export default Admin
