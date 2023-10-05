var forms = document.querySelectorAll('.needs-validation');
        
Array.prototype.slice.call( forms ).forEach( function( form ){
    form.addEventListener( 'submit', function ( event ){

            event.preventDefault( )
            event.stopPropagation( );

        
        form.classList.add('was-validated');
        
        if(form.checkValidity()){
            //Bootstrap Modal does not work which we expected because of using two different bootstrap
            //(Modal can not be closed with close button )
            //var orderModal= new bootstrap.Modal(document.getElementById('orderModal'));
            //orderModal.show();
            alert("Din meddelande är skickats!");
        }

  }, false );
} );