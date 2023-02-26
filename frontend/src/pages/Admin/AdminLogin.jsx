import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AdminStyles/Login.css'

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email || !password) {
            window.alert("Please fill in all fields and login or sign up.");
            return;
        }
        axios.post('http://127.0.0.1:3070/login/', { email, password })
            .then((response) => {
                console.log("success", response);
                document.cookie = `token=${response.data.token}; expires=${new Date(Date.now() + 36000000).toUTCString()}; path=/`;
                window.location.href = '/admin';
                setEmail('');
                setPassword('');
                window.alert("Success login");
            })
            .catch((error) => {
                console.log("catch", error);
                window.alert("Don't find such account.");
            });
    };




    return (
        <div className='admin-login__wrapper'>
            <div style={{ width: "20%", textAlign: "center" }}>
                <h3 style={{ color: "white", marginBottom: "30px" }}>ADMIN LOGIN</h3>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <input className='login-inp' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className='login-inp' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className='login-button' type="submit">Log in</button>
                    <div className='d-flex justify-content-between'>
                        <Link className='login-links' to="/admin/forgot-password">Forgot password?</Link>
                        <Link className='login-links' to="/admin/adminreg">Register</Link>
                    </div>

                </form>
            </div>

        </div>
    );
};

export default AdminLogin;










