import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blackjack from './pages/blackjack/Blackjack';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Blackjack />} />
      </Routes>
    </BrowserRouter>
  );
};
