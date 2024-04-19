import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Header from './MainPage/Header';
import Catalog from './Catalog/Catalog';
import HomePage from './Home/Home';
import Favourites from './Favourites/Favourites';

export function App() {
  return (
  <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favourites/>} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}
