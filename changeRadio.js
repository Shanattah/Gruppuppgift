var takeOutRadio = document.getElementById('radio1');
      var deliveryRadio = document.getElementById('radio2');
      var takeOutDropdown = document.getElementById('pickupTimeContainer');
      var leveransAdress = document.getElementById('adressInputContainer');
 
      takeOutRadio.addEventListener('change', function(){
       if(takeOutRadio.checked){
         takeOutDropdown.style.display='block';
         leveransAdress.style.display='none';
       }
      });
 
      deliveryRadio.addEventListener('change', function(){
       if(deliveryRadio.checked){
         leveransAdress.style.display='block';
         takeOutDropdown.style.display='none';
       }
      });