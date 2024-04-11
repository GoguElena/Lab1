import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Adaugă interfețele aici
interface FirstInterface {
    field1: string;
    field2: number;
    field3: string;
    field4: string;
    field5: string;
}

interface SecondInterface extends FirstInterface {
    additionalField1: string;
    additionalField2: string;
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
