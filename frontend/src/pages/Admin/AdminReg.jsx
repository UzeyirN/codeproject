import React, { useState } from 'react';
// import axios from 'axios';

const AdminReg = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // const [error, setError] = useState('');

    // const handleRegister = async (e) => {
    //     e.preventDefault();

    //     if (password !== confirmPassword) {
    //         setError('Passwords do not match');
    //         return;
    //     }

    //     try {
    //         const res = await axios.post('http://localhost:3070/register', { name, email, password,confirmPassword });
    //         console.log(res.data);
    //     } catch (err) {
    //         setError(err.response.data.message);
    //     }
    // };

    return (
        <div style={{ margin: '100px auto', width: '20%' }}>
            <h2>Admin Reg</h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                {/* <button onClick={handleRegister}>Register</button> */}
            </form>
        </div>
    )
}
export default AdminReg






