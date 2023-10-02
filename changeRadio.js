      var takeOutRadio = document.getElementById('radio1');
      var deliveryRadio = document.getElementById('radio2');
      var takeOutDropdown = document.getElementById('pickupTimeContainer');
      var requiredPickupTime =document.getElementById('pickupTime');
      var leveransAdress = document.getElementById('adressInputContainer');
      var requiredAdressInput =document.getElementById('adressInput');
 
      takeOutRadio.addEventListener('change', function(){
       if(takeOutRadio.checked){
         takeOutDropdown.style.display='block';
         requiredPickupTime.setAttribute('required', 'required');
         leveransAdress.style.display='none';
         requiredAdressInput.removeAttribute('required');
         requiredAdressInput.value = '';
         
       }
      });
 
      deliveryRadio.addEventListener('change', function(){
       if(deliveryRadio.checked){
         leveransAdress.style.display='block';
         requiredAdressInput.setAttribute('required', 'required');
         takeOutDropdown.style.display='none';
         requiredPickupTime.removeAttribute('required')
         requiredPickupTime.value = '';
         
       }
      });

    