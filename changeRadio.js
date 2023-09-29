var takeAwayRadio = document.getElementById('radio1');
      var deliveryRadio = document.getElementById('radio2');
      var takeAwayDropdown = document.getElementById('pickupTimeContainer');
      var leveransAdress = document.getElementById('adressInputContainer');
 
      takeAwayRadio.addEventListener('change', function(){
       if(takeAwayRadio.checked){
         takeAwayDropdown.style.display='block';
         leveransAdress.style.display='none';
       }
      });
 
      deliveryRadio.addEventListener('change', function(){
       if(deliveryRadio.checked){
         leveransAdress.style.display='block';
         takeAwayDropdown.style.display='none';
       }
      });