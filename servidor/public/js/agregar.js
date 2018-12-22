
$('#crearUsuario').on('click', function(){
    var nombre = $('#nombreUsuario').val();
    var apellido = $('#apellidoUsuario').val();
    var telefono = $('#telefonoUsuario').val();
    var email = $('#emailUsuario').val();

//funcion para validar
//las validaciones se pueden hacer aparecer los carteles de a uno o que aparezcan todos juntos

var validar = true;

    if(nombre.length === 0 || nombre.length > 30){
        $('.errorNombre').removeClass('hide');
        validar = false;
    } 
    if(apellido.length === 0 || apellido.length > 30){
        $('.errorApellido').removeClass('hide');
        validar = false;
    }
    if(!(/^\d+$/.test(telefono))){
        $('.errorTelefono').removeClass('hide');
        validar = false;
    }
    if( !(/^(([^<>()\[\]\\.,;:\s@“]+(\.[^<>()\[\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) ){
        $('.errorEmail').removeClass('hide');
        validar = false;
    }
    if( validar == false)
    return ;
    
    $.ajax('http://localhost:3000/api/users',{
            method: "POST",
            data:{
                nombre: nombre,
                 apellido: apellido,
                 telefono: telefono,
                email: email 
            }
        }).done(function(){
           $('#editarUsuario').on('click',function(){
    
   var validar = true;

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
    return ;
    
   
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
            <p>El usuario se ha creado correctamente!🎉😍</p>
        </div>`);
         setTimeout(function(){
                location.href = '/usuarios'}
                ,1000)
            }
           )})
         setTimeout(function(){
                location.href = '/usuarios'}
                ,1000)
        }
)})


