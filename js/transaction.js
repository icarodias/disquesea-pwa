import { Storage } from "./storage.js";


export const Transaction = {
    in: (code, amount) => Transaction.change(code, amount, true),

    out: (code, amount) => Transaction.change(code, amount, false),

    change: (code, amount, isIn) => {
        const products = Storage.getProducts();
        const product = products.find(product => product.code === Number(code));

        const amountWithSign = isIn ? amount : (-1) * amount;
        product.amount = (Number(product.amount) + amountWithSign).toFixed(3);
        Storage.setProducts(products);

        const records = Storage.getRecords();

        const date = new Date()
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth()+1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const today = `${day}/${month}/${year}`
        const changeType = isIn ? 'entrada' : 'saida';
        records.push({
            code,
            name:product.name,
            amount,
            productAmount:product.amount,
            type: product.type,
            changeType, 
            date: today,
        })
        Storage.setRecords(records);
    }
}