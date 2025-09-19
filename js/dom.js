import { Storage } from "./storage.js";

export const DOM = {
    searchTable: document.querySelector('#table-search tbody'),
    renderSearchTable: (products) => {
        DOM.clearSearchTable();
        products.forEach(product => DOM.addToSearchTable(product));
    },
    addToSearchTable: (product) => {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLProduct(product)
        DOM.searchTable.appendChild(tr)
    },
    innerHTMLProduct: (product) => {
        return `
            <td class="codigo">${product.code}</td>
            <td class="nome">${product.name}</td>
            <td class="quantidade">${product.amount}</td>
            <td class="tipo">${product.type}</td>
        `
    },
    clearSearchTable: () => {
        DOM.searchTable.innerHTML = ""
    },

    recordsTable: document.querySelector('#table-records tbody'),
    renderRecordsTable: async () => {
        const records = await Storage.getRecords();
        DOM.clearRecordsTable();
        records.forEach(record => DOM.addToRecordsTable(record));
    },
    addToRecordsTable: (record) => {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLRecord(record)
        DOM.recordsTable.appendChild(tr)
    },
    innerHTMLRecord: (record) => {

        const css = record.changeType == "entrada" ? 
            `<img src="./icons/income.svg" alt="Entrada"></img>` :
            `<img src="./icons/expense.svg" alt="Saída"></img>`;

        return `
            <td class="code">${record.code}</td>
            <td class="name">${record.name}</td>
            <td class="amount">${record.amount}</td>
            <td class="productAmount">${record.productAmount}</td>
            <td class="type">${record.type}</td>
            <td class="date">${record.date}</td>
            <td class="changeType">${css}</td>
        `
    },
    clearRecordsTable: () => {
        DOM.recordsTable.innerHTML = ""
    }
}