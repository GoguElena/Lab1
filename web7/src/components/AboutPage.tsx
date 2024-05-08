import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div style={{ backgroundColor: '#cc9966', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '80vh' }}>
            <div style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color:'white' }}>About SKIN1004</h1>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color:'white' }}>
                    SKIN1004 is a Korean skincare brand that provides high-quality skincare items made of plant-based
                    ingredients from Madagascar.
                    Its main ingredient is centella asiatica, a soothing and hydrating antioxidant that is known for its
                    ability to heal wounds and protect the skin.
                </p>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color:'white' }}>
                    SKIN1004 products are carefully crafted to deliver effective results while being gentle on the skin,
                    making them suitable for all skin types.
                    With a focus on natural ingredients and sustainable practices, SKIN1004 aims to promote healthy and
                    radiant skin for everyone.
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
