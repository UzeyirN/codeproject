import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AdminStyles/Login.css'
import { useEffect } from 'react';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = getCookie('auth-token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) {
            return parts.pop().split(';').shift();
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email || !password) {
            window.alert("Please fill in all fields and login or sign up.");
            return;
        }
        axios.post('http://127.0.0.1:3070/login/', { email, password })
            .then((response) => {
                console.log("success", response);
                document.cookie = `auth-token=${response.data.token}; expires=${new Date(Date.now() + 36000000).toUTCString()}; path=/`;
                window.location.href = '/admin';
                setIsLoggedIn(true);
                setEmail('');
                setPassword('');
                window.alert("Success login");
            })
            .catch((error) => {
                console.log("catch", error);
                window.alert("Don't find such account.");
            });
    };

    const handleLogout = () => {
        document.cookie = "auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setIsLoggedIn(false);
        setEmail('');
    };


    return (
        <div className='admin-login__wrapper'>
            <div style={{ width: "20%", textAlign: "center" }}>
                <h3 style={{ color: "white", marginBottom: "30px" }}>ADMIN LOGIN</h3>
                {isLoggedIn ? (
                    <div>
                        <p className='lato-font' style={{ color: "white" }}>
                        You're already logged in !
                        </p>
                        <button className='login-button' onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <input className='login-inp' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input className='login-inp' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button className='login-button' type="submit">Log in</button>
                        <div className='d-flex justify-content-between'>
                            <Link className='login-links' to="/admin/forgot-password">Forgot password?</Link>
                            <Link className='login-links' to="/admin/adminreg">Register</Link>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default AdminLogin;









