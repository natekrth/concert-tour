import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
import Home from './pages/Home';
import './main.css';
import Navbar from './components/Navbar';
import Artistbox from './components/Artistbox';
import TourDate from './pages/TourDate';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/date" element={<TourDate/>} />
      </Routes>
    </div>
  );
}

export default App;
