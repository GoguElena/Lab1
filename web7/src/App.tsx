import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MenuComponent from './components/MenuComponent';
import './App.css'; // sau orice alt fișier CSS ai pentru stilizare

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <MenuComponent />
            </div>
        </Router>
    );
};

export default App;
