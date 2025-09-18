import { Storage } from "./storage.js";
import { DOM } from "./dom.js";
import { Modal } from "./modal.js";
import { Transaction } from "./transaction.js";
import { App } from "../app.js";


const whatsappGeneratorUrl = (number, encodedText) => `https://wa.me/${number}?text=${encodedText}`;

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

            DOM.renderSearchTable(filteredProducts);
            Form.clearSearchInput();
            Modal.search.close();
        }
    },

    // Send to Whatsapp
    phone: document.getElementById('phone'),
    clearSearchInput() {
        Form.phone.value = ""
    },
    send: {
        async submit(event) {
            event.preventDefault();

            const number = Form.phone.value;
            
            const response = await fetch(whatsappGeneratorUrl(number,'icaro%20teste'))

            if (response.status != 200) {
                throw new Error('Error while send whatsapp message')
            }
            
            Modal.send.close();
        }
    },
    
    // In
    codeIn: document.getElementById('codeIn'),
    amountIn: document.getElementById('amountIn'),
    clearInValues: () => {
        codeIn.value = '';
        amountIn.value = '';
    },
    validateIn: (codeIn, amountIn) => {
        const code = codeIn.value;
        const amount = Number(amountIn.value);
        if (code.trim() === '' || String(amount).trim() === '') {
            throw new Error("Preencha todos os campos");
        }

    },
    executeIn: (codeIn, amountIn) => {
        const code = codeIn.value;
        const amount = Number(amountIn.value);
        Transaction.in(code, amount);
    },
    in: {
        async submit(event) {
            try {
                event.preventDefault();
                Form.validateIn(codeIn, amountIn);
                Form.executeIn(codeIn, amountIn);
                Form.clearInValues();
                Modal.in.close();
                App.reload();
            } catch (error) {
                alert(error.message)
            }
        }
    },

    
    //Out
    codeOut: document.getElementById('codeOut'),
    amountOut: document.getElementById('amountOut'),
    clearOutValues: () => {
        codeOut.value = '';
        amountOut.value = '';
    },
    validateOut: (codeOut, amountOut) => {
        const code = codeOut.value;
        const amount = Number(amountOut.value);
        if (code.trim() === '' || String(amount).trim() === '') {
            throw new Error("Preencha todos os campos");
        }

    },
    executeOut: (codeOut, amountOut) => {
        const code = codeOut.value;
        const amount = Number(amountOut.value);
        Transaction.out(code, amount);
    },
    out: {
        submit(event) {
            try {
                event.preventDefault();
                Form.validateOut(codeOut, amountOut);
                Form.executeOut(codeOut, amountOut);
                Form.clearOutValues();
                Modal.out.close();
                App.reload();
            } catch (error) {
                alert(error.message)
            }
        }
    },
    
}