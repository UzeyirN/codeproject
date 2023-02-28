import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';

const AdminNavbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) {
            return parts.pop().split(';').shift();
        }
    };

    useEffect(() => {

        const token = getCookie('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <>

            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#121212" }}>
                <div className="container">
                    <Link style={{ color: "white" }} className="navbar-brand" to="">ADMIN</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav" style={{ display: "flex", justifyContent: "space-between" }}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            {isLoggedIn ? (
                                <li className="nav-item">
                                    <Link className="nav-link" to="featuredadmin">Featured</Link>
                                </li>
                            ) : (
                                <li></li>
                            )}

                            {isLoggedIn ? (
                                <li className="nav-item">
                                    <Link className="nav-link" to="latestadmin">Latest</Link>
                                </li>
                            ) : (
                                <li></li>
                            )}
                        </ul>
                        <ul className='navbar-nav'>
                            {isLoggedIn ? (
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="adminlogin">
                                        <i className="fa-solid fa-house-circle-check"></i>
                                    </Link>
                                </li>
                            ) : (
                                <li></li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default AdminNavbar
