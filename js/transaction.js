import { Storage } from "./storage.js";


export const Transaction = {
    records : Storage.getRecords(),
    products: Storage.getProducts(),

    in: (code, amount) => Transaction.change(code, amount, true),

    out: (code, amount) => Transaction.change(code, amount, false),

    change: (code, amount, isIn) => {
        const products = Transaction.products;
        const product = products.find(product => product.code === Number(code));

        const amountWithSign = isIn ? amount : (-1) * amount;
        product.amount = (Number(product.amount) + amountWithSign).toFixed(3);
        Storage.setProducts(products);

        const records = Transaction.records;

        const date = new Date()
        const today = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
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