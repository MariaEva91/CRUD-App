var id 
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');
console.log(myParam);

$.ajax('http://localhost:3000/api/users/'+ myParam).done(function(data){
   var nombreEditado = $('#editarNombreUsuario').val(data.nombre);
   var apellidoEditado = $('#editarApellidoUsuario').val(data.apellido);
  var telefonoEditado =  $('#editarTelefono').val(data.telefono);
   var emailEditado = $('#editarEmail').val(data.email)
    
})

$('#editUsuario').on('click',function(){
    
  /* var validar = true;

    if(nombreEditado.length === 0 || nombreEditado.length > 30){
        $('.errorNombre').removeClass('hide');
        validar = false;
    } 
    if(apellidoEditado.length === 0 || apellidoEditado.length > 30){
        $('.errorApellido').removeClass('hide');
        validar = false;
    }
    if(!(/^\d+$/.test(telefonoEditado))){
        $('.errorTelefono').removeClass('hide');
        validar = false;
    }
    if( !(/^(([^<>()\[\]\\.,;:\s@“]+(\.[^<>()\[\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailEditado)) ){
        $('.errorEmail').removeClass('hide');
        validar = false;
    }
    if( validar == false)
    return ;*/
    
   
    $.ajax('http://localhost:3000/api/users/' + myParam,{
        method:"PUT",
        data:{
            nombre: $('#editarNombreUsuario').val(),
            apellido: $('#editarApellidoUsuario').val(),
            telefono: $('#editarTelefono').val(),
            email: $('#editarEmail').val()

        }
           }).done(function(){
            $('.nav').addClass('opacity');
            $('.form').addClass('opacity');
            $('body').append( ` <div class="modal" id="modalAdd">
            <p>El usuario se ha editado correctamente!🎉😍</p>
        </div>`);
         setTimeout(function(){
                location.href = '/usuarios'}
                ,1000)
            }
           )})