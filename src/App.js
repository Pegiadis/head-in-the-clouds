import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from './components/TopBar';
import HomePage from './components/HomePage';
import EpisodesPage from './components/EpisodesPage'; // Assume you have this component
import AboutPage from './components/AboutPage'; // Assume you have this component
import ShopPage from './components/ShopPage'; // Assume you have this component
import ContactPage from './components/ContactPage'; // Assume you have this component

const App = () => {
    return (
        <Router>
            <div className="App">
                <TopBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/episodes" element={<EpisodesPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    {/* Add more routes as needed */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
