import React from 'react'
// import './App.css';
import { Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
import Home from './pages/Home';
import './main.css';
import Navbar from './components/Navbar';
import Artistbox from './components/Artistbox';
import Login from './components/Login';

function App() {
  return (
    <div className="w-full h-full text-center">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
