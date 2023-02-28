import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/forgot-password', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      <div style={{ margin: '150px auto', width: '30%' }}>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button>Send email</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </>
  );
};

export default ForgotPassword;
