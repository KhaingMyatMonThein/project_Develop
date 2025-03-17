import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Vlog from './pages/Vlog';
import Reviews from './pages/Reviews';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import DashboardPage from './admin/DashboardPage'; 
import LoginPage from './admin/LoginPage'; 
import Sidebar from './admin/Sidebar';
import UserPage from './admin/UserPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <Navbar />
                <Services />
                <Footer />
              </>
            }
          />
          <Route
            path="/aboutus"
            element={
              <>
                <Navbar />
                <AboutUs />
                <Footer />
              </>
            }
          />
          <Route
            path="/vlog"
            element={
              <>
                <Navbar />
                <Vlog />
                <Footer />
              </>
            }
          />
          <Route
            path="/reviews"
            element={
              <>
                <Navbar />
                <Reviews />
                <Footer />
              </>
            }
          />
          <Route
            path="/contactus"
            element={
              <>
                <Navbar />
                <ContactUs />
                <Footer />
              </>
            }
          />
         <Route path="/admin/loginPage" element={<LoginPage />} />
        <Route path="/admin/dashboard" element={
          <div>
            <Sidebar />
            <DashboardPage />
          </div>
        } />
        <Route path="/admin/users" element={
          <div>
            <Sidebar />
            <UserPage />
          </div>
        } />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
