// import React, { useState } from 'react';
// // import axios from 'axios';

// const AdminReg = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     // const [error, setError] = useState('');

//     // const handleRegister = async (e) => {
//     //     e.preventDefault();

//     //     if (password !== confirmPassword) {
//     //         setError('Passwords do not match');
//     //         return;
//     //     }

//     //     try {
//     //         const res = await axios.post('http://localhost:3070/register', { name, email, password,confirmPassword });
//     //         console.log(res.data);
//     //     } catch (err) {
//     //         setError(err.response.data.message);
//     //     }
//     // };

//     return (
//         <div style={{ margin: '100px auto', width: '20%' }}>
//             <h2>Admin Reg</h2>
//             <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
//                 <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
//                 <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                 <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                 <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//                 {/* <button onClick={handleRegister}>Register</button> */}
//             </form>
//         </div>
//     )
// }
// export default AdminReg



import axios from 'axios';
import React, { useState } from 'react';
// import axios from 'axios';

const AdminReg = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://127.0.0.1:3070/register/', { username, email, password, confirmPassword })
            .then((response) => {
                // handle successful login

                console.log("succcess", response)
                document.cookie = `token=${response.data.token}; expires=${new Date(Date.now() + 36000000).toUTCString()}; path=/`;
                // redirect to dashboard or home page
                window.location.href = '/admin'; // replace with your dashboard or home page URL

            })
            .catch((error) => {
                console.log("catch", error)

                // handle login error
            });
        window.alert("success register")
    };


    return (
        <div style={{ margin: '100px auto', width: '20%' }}>
            <h2>Admin Reg</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input type="text" placeholder="Name" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <button type="submit">Sign in</button>

            </form>
        </div>
    )
}
export default AdminReg











