import React from 'react';

const HomePage: React.FC = () => {
    return (
        <div>
            <div style={{ backgroundColor: '#cc9966', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '65vh' }}>
                <img src="https://www.zlatnaribka.com/image/catalog/100/skin1004-model.png" alt="Blossom Rituals" style={{ maxWidth: '90%', maxHeight: '90%', marginTop: '5vh' }} />
            </div>
            <div style={{ backgroundColor: '#f2f2f2', padding: '20px', textAlign: 'center', color: '#333' }}>
                <h2 style={{ color: '#996633', marginBottom: '20px' }}>Contacte și informații suplimentare</h2>
                <p>Puteți găsi mai multe informații despre noi și produsele noastre accesând următoarele link-uri:</p>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li><a href="/about" style={{ color: '#996633' }}>Despre noi</a></li>
                    <li><a href="/product" style={{ color: '#996633' }}>Produse</a></li>
                </ul>
                <div style={{ marginTop: '30px' }}>
                    <p style={{ color: '#996633' }}>Pentru orice întrebări sau solicitări, ne puteți contacta la următoarele adrese:</p>
                    <p><strong>Customer Service:</strong> <a href="mailto:hello@skin1004korea.com" style={{ color: '#996633' }}>hello@skin1004korea.com</a></p>
                    <p><strong>Wholesale Inquiry:</strong> <a href="mailto:sales@skin1004korea.com" style={{ color: '#996633' }}>sales@skin1004korea.com</a></p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
