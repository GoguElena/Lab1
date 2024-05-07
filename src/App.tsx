import React from 'react';
import { Provider } from 'mobx-react';
import { AppDataStore } from './stores/AppDataStore'; // Importă clasa AppDataStore
import GlobalDataComponent from './components/GlobalDataComponent';
import './App.css'; // Importă fișierul CSS pentru stilizare

const App: React.FC = () => {
    return (
        <Provider appDataStore={new AppDataStore()}> {/* Corectează numele prop-ului în appDataStore */}
            {/* Folosește Provider pentru a furniza store-ul AppDataStore */}
            <div className="app-container"> {/* Adaugă un container pentru a poziționa conținutul */}
                <header>
                    <h1>My App</h1>
                </header>
                <main>
                    <GlobalDataComponent />
                </main>
                <footer>
                    <p>© 2024 My App. Toate drepturile rezervate.</p>
                </footer>
            </div>
        </Provider>
    );
};

export default App;
