import React, { useState } from 'react';
import Modal from 'react-modal';

import { nameAndClose } from '../styles';

const CustomModal = ({ isOpen, onRequestClose, camper }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Book Camper"
    >
      <div css={nameAndClose}>
      <h2>{camper.name}</h2>
      <button onClick={onRequestClose} className="close-button">Close</button>
      </div>
      <p>Price: €{parseFloat(camper.price).toFixed(2).toLocaleString()}</p>
      <p>Description: {camper.description}</p>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Booking Date:</label>
        <input type="date" value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} required />
        <label>Comment:</label>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
        <button type="submit">Submit</button>
      </form>
    </Modal>
  );
};

export default CustomModal;
