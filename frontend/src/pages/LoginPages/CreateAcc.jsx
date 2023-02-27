import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import '../../styles/LoginPages/CreateAcc.css'
import { useEffect } from 'react';
import axios from 'axios';

const CreateAcc = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastname] = useState('');
  const [company_name, setCompany_Name] = useState('');
  const [phone_num, setPhone_Num] = useState(null);
  const [address_line1, setAddress_Line1] = useState("");
  const [address_line2, setAddress_Line2] = useState("");
  const [sburb_city, setSburb_City] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const addCustomer = (event) => {
    event.preventDefault();

    if (!email || !password || !confirmPassword || !firstname || !lastname || !phone_num || !address_line1 || !sburb_city || !zip) {
      window.alert("Please fill all the fields");
      return;
    }

    if (password !== confirmPassword) {
      window.alert("Confirm password doesn't match password");
      return;
    }

    axios.post('http://127.0.0.1:3070/customerregister/', {
      email, password, confirmPassword, firstname, lastname, company_name, phone_num, address_line1, address_line2, sburb_city, state, zip
    })
      .then((response) => {
        console.log("success", response)
        document.cookie = `token=${response.data.token}; expires=${new Date(Date.now() + 36000000).toUTCString()}; path=/`;
        window.location.href = '/wishlist';


        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setFirstName('');
        setLastname('');
        setCompany_Name('');
        setPhone_Num('');
        setAddress_Line1('');
        setAddress_Line1('');
        setSburb_City('');
        setState('');
        setZip('');

      })
      .catch((error) => {
        console.log("catch", error)

        if (error.response && error.response.data.message === "Email already registered") {
          window.alert("This email is already registered. Please use a different email.");
        }

      });
    // window.alert("success register");

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
            <form onSubmit={addCustomer} className='createacc-form'>

              {/* first input wrapper */}
              <div className='input-wrapper'>

                <div style={{ width: "100%" }}>
                  <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' className='login-input login-form__element' />
                </div>

                <div style={{ width: "100%" }}>
                  <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='login-input login-form__element' />
                </div>

              </div>

              {/* second input wrapper */}

              <div className='input-wrapper'>

                <div style={{ width: "100%" }}>
                  <input type="password" name='confirm_password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password' className='login-input login-form__element' />
                </div>

                <div style={{ width: "100%" }}>
                  <input type="text" name='first_name' value={firstname} onChange={(e) => setFirstName(e.target.value)} placeholder='First Name' className=' createacc-input' />
                </div>

              </div>

              {/* third input wrapper */}

              <div className='input-wrapper'>

                <div style={{ width: "100%" }}>
                  <input type="text" name='last_name' value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder='Last Name' className=' createacc-input' />
                </div>

                <div style={{ width: "100%" }}>
                  <input type="text" placeholder='Company Name' name='company_name' value={company_name} onChange={(e) => setCompany_Name(e.target.value)} className=' createacc-input' />
                </div>

              </div>

              {/* fourth input wrapper */}

              <div className='input-wrapper'>

                <div style={{ width: "100%" }}>
                  <input type="number" name='phone_num' value={phone_num} onChange={(e) => setPhone_Num(e.target.value)} placeholder='Phone Number' className=' createacc-input' />
                </div>

                <div style={{ width: "100%" }}>
                  <input type="text" name='address_line1' value={address_line1} onChange={(e) => setAddress_Line1(e.target.value)} placeholder='Address Line 1' className=' createacc-input' />
                </div>

              </div>

              {/* fifth input wrapper */}

              <div className='input-wrapper'>

                <div style={{ width: "100%" }}>
                  <input type="text" placeholder='Address Line 2' name='address_line2' value={address_line2} onChange={(e) => setAddress_Line2(e.target.value)} className=' createacc-input' />
                </div>

                <div style={{ width: "100%" }}>
                  <input type="text" name='city' value={sburb_city} onChange={(e) => setSburb_City(e.target.value)} placeholder='Suburb/City' className=' createacc-input' />
                </div>

              </div>

              {/* sixth input wrapper */}

              <div className='input-wrapper'>

                <div style={{ width: "100%" }}>
                  <input type="text" placeholder='State/Province' name='state' value={state} onChange={(e) => setState(e.target.value)} className=' createacc-input' />
                </div>

                <div style={{ width: "100%" }}>
                  <input type="text" placeholder='Zip/Postcode' name='zip_code' value={zip} onChange={(e) => setZip(e.target.value)} className=' createacc-input zip-input' />
                </div>

              </div>

              <button type='submit' className='createacc-btn lato-font'>SUBMIT FORM</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateAcc
