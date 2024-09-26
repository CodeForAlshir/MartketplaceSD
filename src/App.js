import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import the necessary components
import Header from './components/Header'; // Your header
import Shop from './components/Shop';     // The shop component
import ShoppingCart from './components/ShoppingCart'; // Your shopping cart page
import TrackOrder from './components/TrackOrder'; // Your track order page
import AboutUs from './components/AboutUs'; 
import Footer from './components/Footer'; // Optional: Footer component
import './App.css'; // Global styles

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Shop />} />
          
          <Route path="/cart" element={<ShoppingCart />} />
          
          <Route path="/track-order" element={<TrackOrder />} />
          
          <Route path="/about" element={<AboutUs />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
