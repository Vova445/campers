import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Catalog from './Catalog/Catalog';
import HomePage from './Home/Home';
import Favourites from './Favourites/Favourites';
import axios from 'axios';

export function App() {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    axios
      .get('https://661ff5d73bf790e070ae8dac.mockapi.io/Advert')
      .then((response) => {
        setAdverts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog adverts={adverts} />} />
        <Route path="/favorites" element={<Favourites adverts={adverts} />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}
