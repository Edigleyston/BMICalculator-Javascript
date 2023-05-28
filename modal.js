export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    btnClose: document.querySelector('.close'),
    open(){
        Modal.wrapper.classList.add('open')
    },
    close(){
        Modal.wrapper.classList.remove('open')
    }
}

Modal.btnClose.onclick = () =>{
    Modal.close()
}
