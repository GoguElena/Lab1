import { createContext } from 'react';
import { makeAutoObservable, action } from 'mobx';
import { AppDataModel } from '../models/AppDataModel';
import { saveToLocalStorage, getFromLocalStorage } from '../utils/localStorageUtils';

export class AppDataStore {
    data: string;
    isLoading: boolean = true;

    constructor() {
        makeAutoObservable(this);
        this.data = '';

        setTimeout(() => {
            const storedData = getFromLocalStorage<string>('appData');
            if (storedData) {
                this.data = storedData;
                this.isLoading = false;
            } else {
                this.data = 'Default Data';
                saveToLocalStorage<string>({ key: 'appData', value: this.data });
                this.isLoading = false;
            }
        }, 2000);

        // Adaugă apelul metodei pentru transformarea datelor
        this.transformDataToMobX();
    }

    @action
    transformDataToMobX() {
        const storedData = getFromLocalStorage<string>('appData');
        if (storedData) {
            // Actualizează datele din store-ul MobX cu datele din localStorage
            this.setData(storedData);
        }
    }

    @action
    setData(newData: string) {
        this.data = newData;
        saveToLocalStorage<string>({ key: 'appData', value: newData });
    }

    @action
    updateData(newData: AppDataModel) {
        this.data = newData.data;
        saveToLocalStorage<string>({ key: 'appData', value: newData.data });
    }

    getStoredData(): string {
        return getFromLocalStorage<string>('appData') ?? '';
    }
}

export const AppDataStoreContext = createContext(new AppDataStore());
