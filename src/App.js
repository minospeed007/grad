import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './navbar';
import Overview from './overview';
import Home from './home';

const App = () => {
  return (
    <Router>
              <Navbar />

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;