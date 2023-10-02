var forms = document.querySelectorAll('.needs-validation');
        
Array.prototype.slice.call( forms ).forEach( function( form ){
    form.addEventListener( 'submit', function ( event ){

            event.preventDefault( )
            event.stopPropagation( );

        
        form.classList.add('was-validated');
        
        if(form.checkValidity()){
            //Form is valid, trigger the modal
            //var orderModal= new bootstrap.Modal(document.getElementById('orderModal'));
            //orderModal.show();
            alert("Din meddelande är skickats!");
        }

  }, false );
} );