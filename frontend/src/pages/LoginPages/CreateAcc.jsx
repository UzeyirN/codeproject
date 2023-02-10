import React from 'react'
import { Helmet } from 'react-helmet'
import '../../styles/LoginPages/CreateAcc.css'

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import createacc_schema from './../../Schema/CreateAcc';

const CreateAcc = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(createacc_schema),
  });
  const onSubmitHandler = (data) => {
    console.log({ data });
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
                  <input {...register("email")} type="email" placeholder='Email Address' className='login-input login-form__element' />
                  <p style={{ color: "red" }}>{errors.email?.message}</p>
                </div>

                <div style={{ width: "100%" }}>
                  {/* <input {...register("phone_num")} type="text" placeholder='Phone Number' className=' createacc-input' />
                  <p className='createacc-error__message'>{errors.phone_num?.message}</p> */}

                  <input {...register("password")} type="password" placeholder='Password' className='login-input login-form__element' />
                  <p style={{ color: "red" }}>{errors.password?.message}</p>
                </div>

              </div>

              {/* second input wrapper */}

              <div className='input-wrapper'>

                <div style={{ width: "100%" }}>
                  <input {...register("password")} type="password" placeholder='Confirm Password' className='login-input login-form__element' />
                  <p style={{ color: "red" }}>{errors.confirm_password?.message}</p>
                </div>

                <div style={{ width: "100%" }}>
                  <input {...register("first_name")} type="text" placeholder='First Name' className=' createacc-input' />
                  <p className='createacc-error__message'>{errors.first_name?.message}</p>
                </div>
              </div>

              {/* third input wrapper */}

              <div className='input-wrapper'>
                <div style={{ width: "100%" }}>
                  <input {...register("first_name")} type="text" placeholder='Last Name' className=' createacc-input' />
                  <p className='createacc-error__message'>{errors.last_name?.message}</p>
                </div>

                <div style={{ width: "100%" }}>
                  <input type="text" placeholder='Company Name' className=' createacc-input' />
                </div>
              </div>

              {/* fourth input wrapper */}

              <div className='input-wrapper'>
                <div style={{ width: "100%" }}>
                  <input {...register("phone_num")} type="number" placeholder='Phone Number' className=' createacc-input' />
                  <p className='createacc-error__message'>{errors.phone_num?.message}</p>
                </div>

                <div style={{ width: "100%" }}>
                  <input {...register("address_line1")} type="text" placeholder='Address Line 1' className=' createacc-input' />
                  <p className='createacc-error__message'>{errors.address_line1?.message}</p>
                </div>
              </div>

              {/* fifth input wrapper */}

              <div className='input-wrapper'>

                <div style={{ width: "100%" }}>
                  <input type="text" placeholder='Address Line 2' className=' createacc-input' />
                </div>

                <div style={{ width: "100%" }}>
                  <input {...register("city")} type="text" placeholder='Suburb/City' className=' createacc-input' />
                  <p className='createacc-error__message'>{errors.city?.message}</p>
                </div>
              </div>

              {/* sixth input wrapper */}

              <div className='input-wrapper'>

                <div style={{ width: "100%" }}>
                  <select name="Azerbaijan" id="createacc-select">
                    <option value="Romania">Romania</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Georgia">Georgia</option>
                  </select>
                </div>

                <div style={{ width: "100%" }}>
                  <input type="text" placeholder='State/Province' className=' createacc-input' />
                </div>
              </div>

              {/* seventh input wrapper */}

              <div className='input-wrapper'>
                <div style={{ width: "100%" }}>
                  <input {...register("zip")} type="text" placeholder='Suburb/City' className=' createacc-input zip-input' />
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
