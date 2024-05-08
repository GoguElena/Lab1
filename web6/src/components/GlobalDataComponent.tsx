import React from 'react';
import { observer } from 'mobx-react';

const GlobalDataComponent: React.FC = observer(() => {
    // Am eliminat importul și utilizarea useContext și AppDataStoreContext

    const handleSetData = () => {
        // Simulăm introducerea manuală a unor date personalizate
        const newData: string = 'Date personalizate introduse manual';
        // Am eliminat utilizarea appDataStore pentru că nu mai avem contextul definit
    };

    return (
        <div className="global-data-container">
            <h1>Data: {/* Înlocuiește cu datele tale salvate */}</h1>
            <div className="button-container">
                <button className="set-data-button" onClick={handleSetData}>Introdu date personalizate</button>
            </div>
        </div>
    );
});

export default GlobalDataComponent;
