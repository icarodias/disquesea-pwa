const PRODUCTS = 'disquesea:products';
const RECORDS = 'disquesea:records';
const STORAGE_JSON_DATA = './storage_data.json'

export const Storage = {
    getProducts: async () => {
        if (localStorage.getItem(PRODUCTS) != null) {
            return JSON.parse(localStorage.getItem(PRODUCTS));
        }

        const response = await fetch(STORAGE_JSON_DATA);

        if (response.status == 200) {
            const products = await response.json();
            Storage.setProducts(products)
            return products;
        }
    },
    setProducts: (data) => localStorage.setItem(PRODUCTS, JSON.stringify(data)),
    getRecords: () => (localStorage.getItem(RECORDS) != null) ? JSON.parse(localStorage.getItem(RECORDS)) : [],
    setRecords: (data) => localStorage.setItem(RECORDS, JSON.stringify(data))
}