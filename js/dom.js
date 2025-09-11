export const DOM = {
    searchTable: document.querySelector('#table-search tbody'),
    renderTable: (products) => {
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
    }
}