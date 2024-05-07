// src/stores/CounterStore.ts
import { createContext } from 'react';
import { makeAutoObservable } from 'mobx';

export class CounterStore {
    count = 0;

    constructor() {
        makeAutoObservable(this);
    }

    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }
}

export const CounterStoreContext = createContext(new CounterStore());
