"use strict"

document.addEventListener('DOMContentLoaded', function () {
    const form=document.getElementById('form');
    form.addEventListener('submit', formSend);
    async function formSend (e) {
        e.preventDefault();
    
        let error=formValidate(form);
    
    }

    function formValidate (form) {
        let error=0;
        let formReq=document.querySelectorAll('._req');
    
        formRemoveError(input);
        if(reqCheck(input)){
            formAddError(input)
        }
    }

    function reqCheck(input){
        return /\d+/.test(input.value);
    }
    function formAddError (input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError (input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
})