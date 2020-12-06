"use strict"

document.addEventListener('DOMContentLoaded', function () {
    const form=document.getElementById('form');
    form.addEventListener('submit', formSend);
    async function formSend (e) {
        e.preventDefault();
        let error=formValidate(form);
        let formData=new FormData(form)

        if(error===0){
            form.classList.add('_sending');
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if(response.ok){
                let result = await response.json();
                alert(result.message);
                form.reset();
                form.classList.remove('_sending');
            }else{
                alert("Error")
                form.classList.remove('_sending');
            }

        } else alert("Поле должно быть заполненно");
    }

    function formValidate (form) {
        let error=0;
        let formReq=document.querySelectorAll('._req');
        const input = formReq[0]
        formRemoveError(input);
        if(!reqCheck(input)){
            formAddError(input)
            error++;
        }
       return error;
    }

    function reqCheck(input){
        return /\d+/.test(input.value);
    }
    function formAddError (input) {
        input.parentElement.classList.add('_error');
    }
    function formRemoveError (input) {
        input.parentElement.classList.remove('_error');
    }
})