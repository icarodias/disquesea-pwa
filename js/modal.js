export const Modal = {
    in: {
        open:() => document.querySelector('.modal-overlay-in').classList.add('active'),
        close:() => document.querySelector('.modal-overlay-in').classList.remove('active')
    },
    out: {
        open: () => document.querySelector('.modal-overlay-out').classList.add('active'),
        close: () => document.querySelector('.modal-overlay-out').classList.remove('active')
    },
    search: {
        open: () => document.querySelector('.modal-overlay-search').classList.add('active'),
        close: () => document.querySelector('.modal-overlay-search').classList.remove('active')
    },
    send: {
        open: () => document.querySelector('.modal-overlay-send-whatsapp').classList.add('active'),
        close: () => document.querySelector('.modal-overlay-send-whatsapp').classList.remove('active'),
    },
    load: {
        open: () => document.querySelector('.modal-overlay-load-storage').classList.add('active'),
        close: () => document.querySelector('.modal-overlay-load-storage').classList.remove('active'),

    }
}