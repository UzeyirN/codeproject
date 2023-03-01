import React, { useState } from 'react';
import axios from 'axios';
import './AdminStyles/Login.css'


const AdminReg = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    //!exist account
   
    const handleSubmit = (event) => {
        event.preventDefault();

        if (!username || !email || !password || !confirmPassword) {
            window.alert("Please fill all the fields");
            return;
        }

        if (password !== confirmPassword) {
            window.alert("Confirm password doesn't match password");
            return;
        }

        axios.post('http://127.0.0.1:3070/register/', { username, email, password, confirmPassword })
            .then((response) => {
                console.log("success", response)
                document.cookie = `auth-token=${response.data.token}; expires=${new Date(Date.now() + 36000000).toUTCString()}; path=/`;
                window.location.href = '/admin';

                setUsername('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');

            })
            .catch((error) => {
                console.log("catch", error);
                if (error.response && error.response.data.message === "User already exists") {
                  window.alert("This email is already registered. Please use a different email.");
                }
              });
    };


    return (
        <div className='admin-login__wrapper'>
            <div style={{ width: "20%", textAlign: "center" }}>
                <h2 style={{ color: "white", marginBottom: "30px" }}>Admin Register</h2>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <input className='login-inp' type="text" placeholder="Name" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input className='login-inp' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className='login-inp' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input className='login-inp' type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <button className='login-button' type="submit">Sign in</button>
                </form>
            </div>
        </div>
    )
}
export default AdminReg











