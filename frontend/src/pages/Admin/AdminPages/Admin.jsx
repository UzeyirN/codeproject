import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';

const getAuthToken = () => {
    
    const name = 'auth-token=';
    const cookieArr = document.cookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
        let cookie = cookieArr[i].trim();
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return null;
};


const tokenRequired = () => {
    const token = getAuthToken();

    axios.post('http://127.0.0.1:3070/tokenRequired/', { token })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
            window.location.href = '/admin/adminlogin';

        });
}

const Admin = () => {

    tokenRequired()


    useEffect(() => {

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [])
    return (
        <>
            <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: 'center' }}>
                <h1>WELCOME TO ADMIN PANEL</h1>

            </div>

        </>
    )
}

export default Admin
