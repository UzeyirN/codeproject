import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import '../styles/ContactUs.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import contact_schema from '../Schema/ContactValidation';
import axios from 'axios';
import { useEffect } from 'react';

const ContactUs = () => {
  const [state, setState] = useState({
    fullname: "",
    phone_num: "",
    email: "",
    order_num: "",
    company_name: "",
    rma_num: "",
    comments: "",
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(contact_schema) });

  const URL = axios.create({
    baseURL: "http://localhost:3070",
  });


  const addData = async () => {
    await URL.post("/contactus", state);
    setState({
      fullname: "",
      phone_num: "",
      email: "",
      order_num: "",
      company_name: "",
      rma_num: "",
      comments: "",

    });
    toast.success('Success !');
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })

  }

  const onSubmitHandler = (data) => {
    console.log(data);
    addData();
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
        <title>Contact Us</title>
      </Helmet>
      <ToastContainer />

      <div className='contact-top'>
        <span className='contact-top__wrapper'>
          <h2 className='playfair-font' style={{ color: "white" }}>CONTACT US</h2>
          <p className='lato-font contact-nav' style={{ color: "gray" }}><span style={{ color: "RGB(176, 151, 109)" }}>Home</span>  / Contact us</p>
        </span>
      </div>

      <div className="container">
        <div className="contact-wrapper">
          <div className='contact-heading__wrapper'>
            <p className="lato-font">
              We're happy to answer questions or help you with returns.
              Please fill out the form below if you need assistance.
            </p>
          </div>
          <div className="contact-inputs__wrapper">
            <form onSubmit={handleSubmit(onSubmitHandler)} className='contact-form'>

              {/* first input wrapper */}
              <div className='input-wrapper'>

                <div style={{ width: "100%" }}>
                  <input {...register("fullname")} name='fullname' value={state.fullname} type="text" placeholder='Full Name' className=' contact-input' onChange={handleChange} />
                  <p className='contact-error__message'>{errors.fullname?.message}</p>
                </div>

                <div style={{ width: "100%" }}>
                  <input value={state.phone_num} name="phone_num" type="text" placeholder='Phone Number' className=' contact-input' onChange={handleChange} />
                </div>

              </div>

              {/* second input wrapper */}

              <div className='input-wrapper'>

                <div style={{ width: "100%" }}>
                  <input {...register("email")} value={state.email} name='email' type="text" placeholder='Email Adress' className='contact-input' onChange={handleChange} />
                  <p className='contact-error__message'>{errors.email?.message}</p>
                </div>

                <div style={{ width: "100%" }}>
                  <input value={state.order_num} name="order_num" type="text" placeholder='Order Number' className=' contact-input' onChange={handleChange} />
                </div>
              </div>

              {/* third input wrapper */}

              <div className='input-wrapper'>
                <div style={{ width: "100%" }}>
                  <input value={state.company_name} name='company_name' type="text" placeholder='Company Name' className=' contact-input' onChange={handleChange} />
                </div>
                <div style={{ width: "100%" }}>
                  <input value={state.rma_num} name='rma_num' type="text" placeholder='RMA Number' className=' contact-input' onChange={handleChange} />
                </div>
              </div>

              {/* fourth input wrapper */}

              <div className='input-wrapper'>
                <div style={{ width: "100%" }}>
                  <textarea {...register("comments")} type="text" placeholder='Comments / Questions' className=' contact-comment__input' onChange={handleChange} />
                  <p className='contact-error__message'>{errors.comments?.message}</p>
                </div>
              </div>
              <button className='contact-btn lato-font'>SUBMIT FORM</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs