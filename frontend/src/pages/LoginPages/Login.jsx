import React from 'react'
import { Helmet } from 'react-helmet';
import '../../styles/LoginPages/Login.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      window.alert("Please fill in all fields and login or sign up.");
      return;
    }
    axios.post('http://127.0.0.1:3070/customerlogin/', { email, password })

      .then((response) => {
        console.log("success", response);
        document.cookie = `token=${response.data.token}; expires=${new Date(Date.now() + 36000000).toUTCString()}; path=/`;
        window.location.href = '/wishlist';
        setEmail('');
        setPassword('');
        window.alert("Success login");
      })
      .catch((error) => {
        console.log("catch", error);
        window.alert("Email or password is wrong.");
      });
  };


  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [])

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <div className='login-top'>
        <span className='login-top__wrapper'>
          <h2 className='playfair-font' style={{ color: "white" }}>LOGIN</h2>
          <p className='lato-font login-nav' style={{ color: "gray" }}><span style={{ color: "RGB(176, 151, 109)" }}>Home</span>  / Login</p>
        </span>
      </div>

      <div className="login-wrapper">
        <div className="container">
          <div className="row roww">
            <div className="col-6 login-col">
              <div className="login-input__wrapper">
                <form onSubmit={handleSubmit} className='login-form'>

                  <input type="email" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} className='login-input login-form__element' />
                  <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='login-input login-form__element' />

                  <div className='login-btn__wrapper login-form__element'>
                    <button type='submit' className='login-btn'>LOGIN</button>
                    <Link to='forgotpassword' className='forgot-password__link'>Forgot your password?</Link>
                  </div>
                </form>
              </div>
            </div>


            <div className="col-6 login-col" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
              <div className="new-costumer__wrapper">
                <h2 className='playfair-font newcostumer-h2'>
                  New Customer?
                </h2>
                <p className='lato-font newcostumer-p'>
                  Create an account with us and you'll be able to:
                </p>
                <ul className='newcostumer-ul'>
                  <li className='newcostumer-li'>Check out faster</li>
                  <li className='newcostumer-li'>Save multiple shipping addresses</li>
                  <li className='newcostumer-li'>Access your order history</li>
                  <li className='newcostumer-li'>Track new orders</li>
                  <li className='newcostumer-li'>Save items to your wish list</li>
                </ul>
                <Link to='createaccount'><button className='login-btn'>CREATE ACCOUNT</button></Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
