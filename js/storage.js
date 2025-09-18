const PRODUCTS = 'disquesea:products';
const RECORDS = 'disquesea:records';
const STORAGE_JSON_DATA = './storage_data.json';
const MAX_AMOUNT_RECORDS = 20;

export const Storage = {
    getProducts: () => {
        if (localStorage.getItem(PRODUCTS) != null) {
            return JSON.parse(localStorage.getItem(PRODUCTS));
        }

        Storage.setProducts([])
        return [];
    },
    setProducts: (data) => localStorage.setItem(PRODUCTS, JSON.stringify(data)),
    getRecords: () => (localStorage.getItem(RECORDS) != null) ? JSON.parse(localStorage.getItem(RECORDS)) : [],
    setRecords: (data) => {
        if (data.length > MAX_AMOUNT_RECORDS) {
            data.shift();
        }
        
        localStorage.setItem(RECORDS, JSON.stringify(data))
    },
    clearRecords: () => Storage.setRecords([])
}