// add the new user

$('#crearUsuario').on('click', function(){
    var nombre = $('#nombreUsuario').val();
    var apellido = $('#apellidoUsuario').val();
    var telefono = $('#telefonoUsuario').val();
    var email = $('#emailUsuario').val();

//validation

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
           $('#crearUsuario').on('click',function(){
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
        })


