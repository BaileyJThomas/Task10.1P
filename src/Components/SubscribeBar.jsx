import React, { useState } from 'react';
import './subscribebar.css'
import 'boxicons'

const SubscribeBar = () => {

  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3003/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: email,
        subject: 'Subscription Confirmation',
        text: 'Thank you for subscribing to our daily insider!',
      }),
    });

    if (response.ok) {
      alert('Subscription successful!');
    } else {
      alert('There was an error with your subscription. Please try again.');
    }
  };

  return (
    <div className='subscribe-bar-container'>
      <form onSubmit={handleSubmit} className="subscription-form">
        <label htmlFor="email">SIGN UP FOR OUR DAILY INSIDER:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  )
}

export default SubscribeBar
