import React from 'react'
import { Helmet } from 'react-helmet'
import '../styles/ContactUs.css'

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import contact_schema from '../Schema/ContactValidation';

const ContactUs = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(contact_schema),
  });
  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };
  return (
    <>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>

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
                  <input {...register("name")} type="text" placeholder='Full Name' className=' contact-input' />
                  <p className='contact-error__message'>{errors.name?.message}</p>
                </div>

                <div style={{ width: "100%" }}>
                  <input {...register("phone_num")} type="text" placeholder='Phone Number' className=' contact-input' />
                  <p className='contact-error__message'>{errors.phone_num?.message}</p>
                </div>

              </div>

              {/* second input wrapper */}

              <div className='input-wrapper'>

                <div style={{ width: "100%" }}>
                  <input {...register("email")} type="text" placeholder='Email Adress' className='contact-input' />
                  <p className='contact-error__message'>{errors.email?.message}</p>
                </div>

                <div style={{ width: "100%" }}>
                  <input type="text" placeholder='Order Number' className=' contact-input' />
                </div>
              </div>

              {/* third input wrapper */}

              <div className='input-wrapper'>
                <div style={{ width: "100%" }}>
                  <input type="text" placeholder='Company Name' className=' contact-input' />
                </div>
                <div style={{ width: "100%" }}>
                  <input type="text" placeholder='RMA Number' className=' contact-input' />
                </div>
              </div>

              {/* fourth input wrapper */}

              <div className='input-wrapper'>
                <div style={{ width: "100%"}}>
                  <textarea {...register("comment")} type="text" placeholder='Comments / Questions' className=' contact-comment__input' />
                  <p className='contact-error__message'>{errors.comment?.message}</p>
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