$.ajax('http://localhost:3000/api/users').done(function (users) {
    console.log(users)
    for (let i = 0; i < users.length; i++) {
        $('table').append(
            ` <tr>
            <td>${users[i].nombre}</td>
             <td>${users[i].apellido}</td>
             <td>${users[i].telefono}</td>
             <td>${users[i].email}</td>
             <td><i onclick= "eliminar(${users[i].id})" class="fas fa-trash-alt"></i> <a href="/usuarios/edit?id=${users[i].id}" id="editarUsuario" ><i class="fas fa-edit"></i></a>     </td>
             <td id="user-${users[i].id}"></td>
             </tr>
              `
        )
    }

});

//funcion para eliminar

function eliminar(id){
    $.ajax('http://localhost:3000/api/users/'+ id,{
        method: 'DELETE',
        success: function(){
            $('#user-' + id).remove();
            $('body').append( ` <div class="modal" id="modalAdd">
            <p>El usuario  fue eliminado correctamente!🎉😍</p>
        </div>`);
        setTimeout(function(){
            location.href = '/usuarios'}
            ,2000)
        }
    })
}

//funcion para filtrar

$('#filtrar').on('click',function(){
    const palabraBuscada = $('#filtrar').val();
    console.log(palabraBuscada);
    $.ajax('http://localhost:3000/api/users?search=' + palabraBuscada ).done(function(users){
        console.log(users)
        for (let i = 0; i < users.length; i++){
        $('table td').remove();
        $('table').append(
            ` <tr>
            <td>${users[i].nombre}</td>
             <td>${users[i].apellido}</td>
             <td>${users[i].telefono}</td>
             <td>${users[i].email}</td>
             <td><i onclick= "eliminar(${users[i].id})" class="fas fa-trash-alt"></i> <a href="/usuarios/edit?id=${users[i].id}" id="editarUsuario" ><i class="fas fa-edit"></i></a>     </td>
             <td id="user-${users[i].id}"></td>
             </tr>
              `
        )
        }
    })
})
