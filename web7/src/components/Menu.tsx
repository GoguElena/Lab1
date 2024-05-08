import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ProductPage from './ProductPage';
import FormPage from './FormPage';
import LoginPage from './LoginPage';
import { formData, loginData } from '../date';

const Menu: React.FC = () => {
    return (
        <div>
            {/* Stilizare pentru meniu */}
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/Product">Product</Link>
                    </li>
                    <li>
                        <Link to="/form">Sign in</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
            {/* Stilizare pentru conținut */}
            <div className="content-container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/Product" element={<ProductPage />} />
                    <Route path="/form" element={<FormPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </div>
        </div>
    );
};

export default Menu;
