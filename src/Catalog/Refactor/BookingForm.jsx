import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */

import { formTitle, formP, inputField, button, inputWithError } from 'Catalog/styles';

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!name.trim()) {
      errors.name = 'Name is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!bookingDate.trim()) {
      errors.bookingDate = 'Booking date is required';
    }

    if (Object.keys(errors).length === 0) {
      onSubmit({ name, email, bookingDate, comment });
    } else {
      setErrors(errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2 css={formTitle}>Book your campervan now</h2>
        <p css={formP}>Stay connected! We are always ready to help you.</p>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} css={[inputField, errors.name && inputWithError]} placeholder='Name' />
      </div>
      <div>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} css={[inputField, errors.email && inputWithError]} placeholder='Email' />

      </div>
      <div>
        <input type="date" value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} css={[inputField, errors.bookingDate && inputWithError]} placeholder='Booking date'/>
      </div>
      <div>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} css={inputField} placeholder='Comment'/>
      </div>
      <button type="submit" css={button}>Submit</button>
    </form>
  );
};

export default Form;
