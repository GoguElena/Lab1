// src/components/GlobalDataComponent.tsx
import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import { AppDataStoreContext } from '../stores/AppDataStore';
import { AppDataModel } from '../models/AppDataModel'; // importă modelul

const GlobalDataComponent: React.FC = observer(() => {
    const appDataStore = useContext(AppDataStoreContext);

    const handleUpdateData = () => {
        // Simulăm actualizarea datelor de la un server extern
        const newData: AppDataModel = { data: 'Date actualizate de la server' };
        appDataStore.updateData(newData); // actualizează datele în store și în localStorage
    };

    const handleSetData = () => {
        // Simulăm introducerea manuală a unor date personalizate
        const newData: AppDataModel = { data: 'Date personalizate introduse manual' };
        appDataStore.setData(newData.data); // actualizează datele în localStorage și în store
    };

    const handleGetData = () => {
        // Simulăm obținerea unor date de la un server extern
        const storedData = appDataStore.getStoredData(); // obține datele din localStorage
        alert('Date primite de la server: ' + storedData); // afișează datele din localStorage într-un dialog de alertă
    };

    return (
        <div className="global-data-container"> {/* Adaugă un container pentru stilizare */}
            {appDataStore.isLoading ? (
                <h1>Loading...</h1> // Afișează un mesaj de încărcare în timp ce datele sunt încărcate
            ) : (
                <>
                    <h1>Data: {appDataStore.data}</h1>
                    <div className="button-container"> {/* Adaugă un container pentru butoane */}
                        <button className="update-button" onClick={handleUpdateData}>Actualizează date de la server</button>
                        <button className="set-data-button" onClick={handleSetData}>Introdu date personalizate</button>
                        <button className="get-data-button" onClick={handleGetData}>Obține date de la server</button>
                    </div>
                </>
            )}
        </div>
    );
});

export default GlobalDataComponent;
