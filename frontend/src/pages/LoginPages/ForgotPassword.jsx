import React from 'react'
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';

const ForgotPassword = () => {

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
        <title>Forgot Password</title>
      </Helmet>
      <div style={{ margin: "150px auto", width: "30%" }}>
        <form>

          <input type="text" placeholder='forgot password ?' />
          <button>Send email</button>
        </form>

      </div>

    </>
  )
}

export default ForgotPassword
