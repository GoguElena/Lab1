// src/utils/localStorageUtils.ts

// Definează un tip pentru datele stocate în localStorage
type LocalStorageData<T> = {
    key: string;
    value: T;
};

// Funcție generică pentru a salva datele în localStorage
export const saveToLocalStorage = <T>(data: LocalStorageData<T>) => {
    localStorage.setItem(data.key, JSON.stringify(data.value));
};

// Funcție generică pentru a obține datele din localStorage
export const getFromLocalStorage = <T>(key: string): T | null => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : null;
};

// Funcție pentru a șterge datele din localStorage
export const removeFromLocalStorage = (key: string) => {
    localStorage.removeItem(key);
};
