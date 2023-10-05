      var lunchRadio = document.getElementById('radio1');
      var dinnerRadio = document.getElementById('radio2');
      var lunchDropdown = document.getElementById('pickupTimeContainerLunch');
      var requiredlunchTime =document.getElementById('pickupLunchTime');
      var dinnerDropdown = document.getElementById('pickupTimeContainerDinner');
      var requiredDinnerTime =document.getElementById('pickupDinnerTime');
 
      lunchRadio.addEventListener('change', function(){
       if(lunchRadio.checked){
         lunchDropdown.style.display='block';
         requiredlunchTime.setAttribute('required', 'required');
         dinnerDropdown.style.display='none';
         requiredDinnerTime.removeAttribute('required');
         requiredDinnerTime.value = '';
         
       }
      });
 
      dinnerRadio.addEventListener('change', function(){
       if(dinnerRadio.checked){
         dinnerDropdown.style.display='block';
         requiredDinnerTime.setAttribute('required', 'required');
         lunchDropdown.style.display='none';
         requiredlunchTime.removeAttribute('required')
         requiredlunchTime.value = '';
         
       }
      });

    