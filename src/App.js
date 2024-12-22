import './App.css';
import NewsPage from './news';

import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import React, { Component, useState } from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/news' element={<NewsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
