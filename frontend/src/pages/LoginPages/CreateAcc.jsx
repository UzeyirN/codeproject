import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import '../../styles/LoginPages/CreateAcc.css'

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import createacc_schema from './../../Schema/CreateAcc';
import { useEffect } from 'react';

const CreateAcc = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirm_password: "",
    first_name: "",
    last_name: "",
    company_name: "",
    phone_num: null,
    address_line1: "",
    address_line2: "",
    city: "",
    state: "",
    zip_code: null,

  });

  // const { email, password, confirm_password, first_name, last_name, company_name, phone_num, address_line1, address_line2, city, state, zip_code } = formData;


  // const addData = async e => {
  //   e.preventDefault();
  //   if (password !== confirm_password) {
  //     console.log("Passwords do not match");
  //   } else {
  //     const newUser = {
  //       email,
  //       password,
  //       confirm_password,
  //       first_name,
  //       last_name,
  //       company_name,
  //       phone_num,
  //       address_line1,
  //       address_line2,
  //       city,
  //       state,
  //       zip_code
  //     };

  //     try {
  //       const config = {
  //         headers: {
  //           "Content-Type": "application/json"
  //         }
  //       };

  //       const body = JSON.stringify(newUser);

  //       const res = await axios.post("http://localhost:3050/users", body, config);
  //       console.log(res.data);
  //     } catch (err) {
  //       console.error(err.response.data);
  //     }
  //     setFormData({
  //       email: "",
  //       password: "",
  //       confirm_password: "",
  //       first_name: "",
  //       last_name: "",
  //       company_name: "",
  //       phone_num: "",
  //       address_line1: "",
  //       address_line2: "",
  //       city: "",
  //       state: "",
  //       zip_code: "",
  //     })
  //   }
  // };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }


  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(createacc_schema),
  });


  const onSubmitHandler = (data) => {
    console.log({ data });
    // addData();
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
        <title>Create Account</title>
      </Helmet>
      <div className='createacc-top'>
        <span className='createacc-top__wrapper'>
          <h2 className='playfair-font' style={{ color: "white" }}>NEW ACCOUNT</h2>
          <p className='lato-font createacc-nav' style={{ color: "gray" }}><span style={{ color: "RGB(176, 151, 109)" }}>Home</span>  / Create Account</p>
        </span>
      </div>

      <div className="container">
        <div className="createacc-wrapper">

          <div className="createacc-inputs__wrapper">
            <form onSubmit={handleSubmit(onSubmitHandler)} className='createacc-form'>

              {/* first input wrapper */}
              <div className='input-wrapper'>

                <div style={{ width: "100%" }}>
                  <input {...register("email")} type="email" name='email' required value={formData.email} onChange={handleChange} placeholder='Email Address' className='login-input login-form__element' />
                  <p style={{ color: "red" }}>{errors.email?.message}</p>
                </div>

                <div style={{ width: "100%" }}>
                  {/* <input {...register("phone_num")} type="text" placeholder='Phone Number' className=' createacc-input' />
                  <p className='createacc-error__message'>{errors.phone_num?.message}</p> */}

                  <input {...register("password")} type="password" name='password' required value={formData.password} onChange={handleChange} placeholder='Password' className='login-input login-form__element' />
                  <p style={{ color: "red" }}>{errors.password?.message}</p>
                </div>

              </div>

              {/* second input wrapper */}

              <div className='input-wrapper'>

                <div style={{ width: "100%" }}>
                  <input {...register("confirm_password")} type="password" required name='confirm_password' value={formData.confirm_password} onChange={handleChange} placeholder='Confirm Password' className='login-input login-form__element' />
                  <p style={{ color: "red" }}>{errors.confirm_password?.message}</p>
                </div>

                <div style={{ width: "100%" }}>
                  <input {...register("first_name")} type="text" required name='first_name' value={formData.first_name} onChange={handleChange} placeholder='First Name' className=' createacc-input' />
                  <p className='createacc-error__message'>{errors.first_name?.message}</p>
                </div>
              </div>

              {/* third input wrapper */}

              <div className='input-wrapper'>
                <div style={{ width: "100%" }}>
                  <input {...register("last_name")} type="text" required name='last_name' value={formData.last_name} onChange={handleChange} placeholder='Last Name' className=' createacc-input' />
                  <p className='createacc-error__message'>{errors.last_name?.message}</p>
                </div>

                <div style={{ width: "100%" }}>
                  <input type="text" placeholder='Company Name' name='company_name' value={formData.company_name} onChange={handleChange} className=' createacc-input' />
                </div>
              </div>

              {/* fourth input wrapper */}

              <div className='input-wrapper'>
                <div style={{ width: "100%" }}>
                  <input {...register("phone_num")} type="number" required name='phone_num' value={formData.phone_num} onChange={handleChange} placeholder='Phone Number' className=' createacc-input' />
                  <p className='createacc-error__message'>{errors.phone_num?.message}</p>
                </div>

                <div style={{ width: "100%" }}>
                  <input {...register("address_line1")} type="text" required name='address_line1' value={formData.address_line1} onChange={handleChange} placeholder='Address Line 1' className=' createacc-input' />
                  <p className='createacc-error__message'>{errors.address_line1?.message}</p>
                </div>
              </div>

              {/* fifth input wrapper */}

              <div className='input-wrapper'>

                <div style={{ width: "100%" }}>
                  <input type="text" placeholder='Address Line 2' name='address_line2' value={formData.address_line2} onChange={handleChange} className=' createacc-input' />
                </div>

                <div style={{ width: "100%" }}>
                  <input {...register("city")} type="text" name='city' value={formData.city} onChange={handleChange} placeholder='Suburb/City' className=' createacc-input' />
                  <p className='createacc-error__message'>{errors.city?.message}</p>
                </div>
              </div>

              {/* sixth input wrapper */}

              <div className='input-wrapper'>
                <div style={{ width: "100%" }}>
                  <input type="text" placeholder='State/Province' name='state' value={formData.state} onChange={handleChange} className=' createacc-input' />
                </div>
                <div style={{ width: "100%" }}>
                  <input {...register("zip_code")} type="number" required placeholder='Zip/Postcode' name='zip_code' value={formData.zip_code} onChange={handleChange} className=' createacc-input zip-input' />
                  <p className='createacc-error__message'>{errors.zip?.message}</p>
                </div>
              </div>

              {/* seventh input wrapper */}

              {/* <div className='input-wrapper'>
                <div style={{ width: "100%" }}>
                  <input {...register("zip_code")} type="number" required placeholder='Zip/Postcode' name='zip_code' value={formData.zip_code} onChange={handleChange} className=' createacc-input zip-input' />
                  <p className='createacc-error__message'>{errors.zip?.message}</p>
                </div>
              </div> */}

              <button className='createacc-btn lato-font'>SUBMIT FORM</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateAcc
