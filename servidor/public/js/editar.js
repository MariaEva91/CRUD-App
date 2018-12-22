var id 
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');
console.log(myParam);

$.ajax('http://localhost:3000/api/users/'+ myParam).done(function(data){
    $('#editarNombreUsuario').val(data.nombre);
    $('#editarApellidoUsuario').val(data.apellido);
    $('#editarTelefono').val(data.telefono);
    $('#editarEmail').val(data.email)
    
})

$('#editarUsuario').on('click',function(){
  /*  var validar = true;

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
            alert('El usuario fue editado corrrectamente');
            location.href = '/usuarios';
    })
})
