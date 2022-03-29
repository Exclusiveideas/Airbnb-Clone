import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="app">
      <Router>
        <Header setOpen={setOpen} />
        <Sidebar open={open} setOpen={setOpen} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        
        <Footer />
      </ Router>
    </div>
  );
}

export default App;