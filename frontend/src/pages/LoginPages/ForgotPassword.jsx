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

    </>
  )
}

export default ForgotPassword
