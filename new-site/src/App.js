import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/navbar';
import Darkswitch from './components/darkswitch';

import About from './pages/about';
import Board from './pages/board';
import Hackathons from './pages/hackathons';
import Index from './pages/index';
import Join from './pages/join';
import FAQ from './pages/questions';
import Schedule from './pages/schedule';
import Workshop from './pages/workshops';

export default class App extends React.Component {
  render() {
    return (
      <div>
          <BrowserRouter>
            <div>
              <Navbar />
              <Routes>
                <Route path="/" element={<Index/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/join" element={<Join/>} />
                <Route path="/schedule" element={<Schedule/>} />
                <Route path="/hackathons" element={<Hackathons/>} />
                <Route path="/workshops" element={<Workshop/>} />
                <Route path="/board" element={<Board/>} />
                <Route path="/questions" element={<FAQ/>} />
              </Routes>
              <Darkswitch />
            </div>
          </BrowserRouter>
        </div>
    );
  }
}