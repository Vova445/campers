import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
/** @jsxImportSource @emotion/react */

import { formTitle, formP, inputField, button, inputWithError } from 'Catalog/styles';

import { ReactComponent as Notepad } from '../../svg/Notepad.svg';

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bookingDate, setBookingDate] = useState(null);
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState({});

  const handleDateChange = (date) => {
    setBookingDate(date);
    if (date) {
      document.getElementById("booking-date-input").placeholder = "";
    } else {
      document.getElementById("booking-date-input").placeholder = "Booking date";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!name.trim()) {
      errors.email = 'Name is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    }
    if (!bookingDate) {
      errors.bookingDate = 'Booking date is required';
    }
  
    if (Object.keys(errors).length === 0) {
      onSubmit({ name, email, bookingDate, comment });
      setName('');
      setEmail('');
      setBookingDate(null);
      setComment('');
      setErrors({});
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
      <div css={{ position: 'relative' }}>
        <DatePicker
          selected={bookingDate}
          onChange={handleDateChange}
          dateFormat="dd.MM.yyyy"
          placeholderText="Booking date"
          wrapperClassName="block-datepicker-wrapper"
          css={[inputField, errors.bookingDate && inputWithError]}
          id="booking-date-input"
        />
        <div css={{ position: 'absolute', top: '45%', right: '10px', transform: 'translateY(-50%)' }}>
          <Notepad />
        </div>
        <style jsx>{`
          .block-datepicker-wrapper {
            display: block !important;
          }
        `}</style>
      </div>
      <div>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} css={inputField} placeholder='Comment'/>
      </div>
      <button type="submit" css={button}>Submit</button>
    </form>
  );
};

export default Form;
