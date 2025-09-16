import { Storage } from "./storage.js";


export const Transaction = {
    products: Storage.getProducts(),

    in: async (code, amount) => {
        const products = await Transaction.products;
        const product = products.find(product => product.code === Number(code));
        product.amount = (product.amount + amount).toFixed(3);
        Storage.setProducts(products);        
    },

    out: async (code, amount) => {
        const products = await Transaction.products;
        const product = products.find(product => product.code === Number(code));
        product.amount = (product.amount - amount).toFixed(3);
        Storage.setProducts(products);        
    }
}