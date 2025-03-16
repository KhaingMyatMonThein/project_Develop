import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Vlog from './pages/Vlog';
import Reviews from './pages/Reviews';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import Login from './components/Login';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/vlog" element={<Vlog />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
