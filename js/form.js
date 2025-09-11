import { Storage } from "./storage.js";
import { DOM } from "./dom.js";
import { Modal } from "./modal.js"

export const Form = {
    // Search
    searchCodes: document.getElementById('searchCodes'),
    clearSearchInput() {
        Form.searchCodes.value = ""
    },
    search: {
        async submit(event) {
            event.preventDefault();
            
            const inputString = searchCodes.value.trim().replaceAll(".", ",").replaceAll("\s", "");
            const codes = inputString.split(",").map(code => Number(code));

            const products = await Storage.getProducts();
            const filteredProducts = products.filter(item => codes.includes(item.code));

            DOM.renderTable(filteredProducts);
            Form.clearSearchInput();
            Modal.search.close();
        }
    },
    
    // In
    in: () => console.log('in'),
    
    //Out
    out: () => console.log('out')
}
