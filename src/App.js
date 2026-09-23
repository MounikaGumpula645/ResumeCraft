import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './about';
import ResumeEditor from './ResumeEditor';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link> | <Link to="/about">About</Link>
      </nav>

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<ResumeEditor />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;