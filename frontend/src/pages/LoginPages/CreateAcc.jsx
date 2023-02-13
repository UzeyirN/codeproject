import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import '../../styles/LoginPages/CreateAcc.css'
import axios from 'axios'

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import createacc_schema from './../../Schema/CreateAcc';

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

  const { email, password, confirm_password, first_name, last_name, company_name, phone_num, address_line1, address_line2, city, state, zip_code } = formData;


  const addData = async e => {
    e.preventDefault();
    if (password !== confirm_password) {
      console.log("Passwords do not match");
    } else {
      const newUser = {
        email,
        password,
        confirm_password,
        first_name,
        last_name,
        company_name,
        phone_num,
        address_line1,
        address_line2,
        city,
        state,
        zip_code
      };

      try {
        const config = {
          headers: {
            "Content-Type": "application/json"
          }
        };

        const body = JSON.stringify(newUser);

        const res = await axios.post("http://localhost:3050/users", body, config);
        console.log(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    }
  };


  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(createacc_schema),
  });
  const onSubmitHandler = (data) => {
    console.log({ data });
    addData();
    reset();
  };
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
                  <input {...register("email")} type="email" name='email' value={email} onChange={e => onChange(e)} placeholder='Email Address' className='login-input login-form__element' />
                  <p style={{ color: "red" }}>{errors.email?.message}</p>
                </div>

                <div style={{ width: "100%" }}>
                  {/* <input {...register("phone_num")} type="text" placeholder='Phone Number' className=' createacc-input' />
                  <p className='createacc-error__message'>{errors.phone_num?.message}</p> */}

                  <input {...register("password")} type="password" name='password' value={password} onChange={e => onChange(e)} placeholder='Password' className='login-input login-form__element' />
                  <p style={{ color: "red" }}>{errors.password?.message}</p>
                </div>

              </div>

              {/* second input wrapper */}

              <div className='input-wrapper'>

                <div style={{ width: "100%" }}>
                  <input {...register("password")} type="password" name='confirm_password' value={confirm_password} onChange={e => onChange(e)} placeholder='Confirm Password' className='login-input login-form__element' />
                  <p style={{ color: "red" }}>{errors.confirm_password?.message}</p>
                </div>

                <div style={{ width: "100%" }}>
                  <input {...register("first_name")} type="text" name='first_name' value={first_name} onChange={e => onChange(e)} placeholder='First Name' className=' createacc-input' />
                  <p className='createacc-error__message'>{errors.first_name?.message}</p>
                </div>
              </div>

              {/* third input wrapper */}

              <div className='input-wrapper'>
                <div style={{ width: "100%" }}>
                  <input {...register("last_name")} type="text" name='last_name' value={last_name} onChange={e => onChange(e)} placeholder='Last Name' className=' createacc-input' />
                  <p className='createacc-error__message'>{errors.last_name?.message}</p>
                </div>

                <div style={{ width: "100%" }}>
                  <input type="text" placeholder='Company Name' name='company_name' value={company_name} onChange={e => onChange(e)} className=' createacc-input' />
                </div>
              </div>

              {/* fourth input wrapper */}

              <div className='input-wrapper'>
                <div style={{ width: "100%" }}>
                  <input {...register("phone_num")} type="number" name='phone_num' value={phone_num} onChange={e => onChange(e)} placeholder='Phone Number' className=' createacc-input' />
                  <p className='createacc-error__message'>{errors.phone_num?.message}</p>
                </div>

                <div style={{ width: "100%" }}>
                  <input {...register("address_line1")} type="text" name='address_line1' value={address_line1} onChange={e => onChange(e)} placeholder='Address Line 1' className=' createacc-input' />
                  <p className='createacc-error__message'>{errors.address_line1?.message}</p>
                </div>
              </div>

              {/* fifth input wrapper */}

              <div className='input-wrapper'>

                <div style={{ width: "100%" }}>
                  <input type="text" placeholder='Address Line 2' name='address_line2' value={address_line2} onChange={e => onChange(e)} className=' createacc-input' />
                </div>

                <div style={{ width: "100%" }}>
                  <input {...register("city")} type="text" name='city' value={city} onChange={e => onChange(e)} placeholder='Suburb/City' className=' createacc-input' />
                  <p className='createacc-error__message'>{errors.city?.message}</p>
                </div>
              </div>

              {/* sixth input wrapper */}

              <div className='input-wrapper'>

                {/* <div style={{ width: "100%" }}>
                  <select name="Azerbaijan" id="createacc-select">
                    <option value="Romania">Romania</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Georgia">Georgia</option>
                  </select>
                </div> */}

                <div style={{ width: "49%" }}>
                  <input type="text" placeholder='State/Province' name='state' value={state} onChange={e => onChange(e)} className=' createacc-input' />
                </div>
              </div>

              {/* seventh input wrapper */}

              <div className='input-wrapper'>
                <div style={{ width: "100%" }}>
                  <input {...register("zip_code")} type="number" placeholder='Zip/Postcode' name='zip_code' value={zip_code} onChange={e => onChange(e)} className=' createacc-input zip-input' />
                  <p className='createacc-error__message'>{errors.zip?.message}</p>
                </div>
              </div>

              <button className='createacc-btn lato-font'>SUBMIT FORM</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateAcc
