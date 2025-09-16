import {Storage} from './js/storage.js'
import {Modal} from './js/modal.js'
import {Form} from './js/form.js'


// APP 
const App = {
    init:() => {
        Storage.getProducts();
    }
}

// Adding EventListener to modal behavior
document.querySelector('#buttonIn').addEventListener('click', Modal.in.open);
document.querySelector('#buttonInClose').addEventListener('click', Modal.in.close);

document.querySelector('#buttonOut').addEventListener('click', Modal.out.open);
document.querySelector('#buttonOutClose').addEventListener('click', Modal.out.close);

document.querySelector('#buttonSearch').addEventListener('click', Modal.search.open);
document.querySelector('#buttonSearchClose').addEventListener('click', Modal.search.close);

//Adding EventListener to form behavior
document.querySelector('#searchForm').addEventListener('submit', Form.search.submit);

//Adding EventListener to form behavior
document.querySelector('#inForm').addEventListener('submit', Form.in.submit);
document.querySelector('#outForm').addEventListener('submit', Form.out.submit);


App.init();