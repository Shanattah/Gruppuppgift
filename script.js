//const errorMessageElement = document.getElementById("telError");
//errorMessageElement.style.visibility="hidden";
/*
function numberCheck(){
var inputTel = document.getElementById("telephone");
var inputTel_value= inputTel.value;

if (!inputTel_value.match(/[0-9]{1,10}/) ) {
inputTel.value='';
document.getElementById('alert').innerHTML = 'error';
} else{
document.getElementById('alert').innerHTML = 'OK!'; 
}
}
*/

(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

