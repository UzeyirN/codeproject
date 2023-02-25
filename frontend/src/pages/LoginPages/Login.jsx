import React from 'react'
import { Helmet } from 'react-helmet';
import '../../styles/LoginPages/Login.css'
import { Link } from 'react-router-dom';
import login__schema from '../../Schema/LoginValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

const Login = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(login__schema),
  });
  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
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
                <form onSubmit={handleSubmit(onSubmitHandler)} action="" className='login-form'>
                  <input {...register("email")} type="email" placeholder='Email Address' className='login-input login-form__element' />
                  <p style={{ color: "red" }}>{errors.email?.message}</p>

                  <input {...register("password")} type="password" placeholder='Password' className='login-input login-form__element' />
                  <p style={{ color: "red" }}>{errors.password?.message}</p>


                  <div className='login-btn__wrapper login-form__element'>
                    <button className='login-btn'>LOGIN</button>
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
