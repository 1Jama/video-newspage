import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import React, { Component, useState } from 'react';
import TopHeadlines from './TopHeadlines';
import NewsPage from './news';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/top' element={<TopHeadlines />} />
      </Routes>
    </Router>
  );
}

export default App;
