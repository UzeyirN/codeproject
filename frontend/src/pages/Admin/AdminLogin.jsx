// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const AdminLogin = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         axios.post('/http://localhost:3070/login', { email, password })
//             .then((response) => {
//                 // handle successful login
//             })
//             .catch((error) => {
//                 // handle login error
//             });
//             window.alert("success login")
//     };

//     return (
//         <div style={{ margin: '100px auto', width: '20%' }}>
//             <h2>Admin Login</h2>
//             <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
//                 <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                 <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                 <button type="submit">Log in</button>
//                 <Link to="/admin/forgot-password">Forgot password?</Link>
//             </form>
//         </div>
//     );
// };

// export default AdminLogin;


import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://127.0.0.1:3070/login/', { email, password })
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
        window.alert("success login")
    };

    return (
        <div style={{ margin: '100px auto', width: '20%' }}>
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Log in</button>
                <Link to="/admin/forgot-password">Forgot password?</Link>
            </form>
        </div>
    );
};

export default AdminLogin;










