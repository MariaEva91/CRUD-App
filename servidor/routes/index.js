var express = require('express');
var path = require('path');
const fs = require('fs');
var router = express.Router();

const users = [{
  id: 1,
  nombre: 'Ada',
  apellido: 'Lovelace',
  telefono: '1234567890',
  email: 'contacto@gmail.com'
}, {
  id:2,
  nombre: 'Grace',
  apellido: 'Hopper',
  telefono: '087654321',
  email: 'contacto@hotmail.com'
}]

//prueba ping pong
router.get('/ping', function(req, res, next) {
  res.send('pong');
});

//agregar rutas para tener todo en un mismo dominio

router.get('/usuarios', function(req,res,next){
  res.sendFile(path.join(__dirname,'..','public','html','index.html'))
})

router.get('/usuarios/new',function(req,res,next){
  res.sendFile(path.join(__dirname,'..','public','html','add.html'))
})

router.get('/usuarios/edit',function(req,res,next){
  res.sendFile(path.join(__dirname,'..','public','html','editar.html'))
})

//ruta para mostrar todos los usuarios

router.get('/users', function(req, res, next) {
  res.json(users);
});


// ruta que me muestre todos los usuarios : api/users
//ruta para filtrar por usuario

router.get('/api/users', function(req, res, next) {
  let search = req.query.search;
 
  if(search && search.length > 0){
  let usuariosFiltrados = ArchivoEnJson.filter(function(u){
 
     return u.nombre.toLowerCase().indexOf(search.toLowerCase()) >=0 ||
        u.apellido.toLowerCase().indexOf(search.toLowerCase()) >= 0||
       u.telefono.indexOf(search) >= 0||
       u.email.toLowerCase().indexOf(search.toLowerCase()) >=0;
     });
     
  res.json(usuariosFiltrados);
  return;
  }res.json(ArchivoEnJson)
 });
 

//importar el modulo fs
//esto es para escribir en un archivo

// fs.writeFileSync('datos.json',JSON.stringify(users))

//Tambien puedo leer el archivo

 let contenidoDelArchivo = fs.readFileSync('datos.json');
 let ArchivoEnJson = JSON.parse(contenidoDelArchivo);



//ruta para agregar un nuevo usuario con id autoincremental

router.get('/api/users/:id',function(req,res,next){
  const id = req.params.id

  for(let i = 0; i < ArchivoEnJson.length; i++){
    if(id == ArchivoEnJson[i].id){
      return res.json(ArchivoEnJson[i])
    }
  }
});

router.post('/api/users',function(req,res,next){
  const user = req.body;
  const lastId = ArchivoEnJson[ArchivoEnJson.length-1].id;
  user.id = lastId + 1;

  //validar desde el lado del servidor

const body = req.body

    if(body.nombre === 0 || body.nombre.length >= 30){
      return res.status(400).end('');
    }
    if(body.apellido === 0  || body.apellido.length >= 30){
      return res.status(400).end('');
    }
    if(!(/^\d+$/.test(body.telefono))){
      return res.status(400).end('');
    }
    if(!(/^(([^<>()\[\]\\.,;:\s@“]+(\.[^<>()\[\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(body.email))){
      return res.status(400).end('');
}
    
 ArchivoEnJson.push(user);
  //agregar un nuevo usuario y guardarlo en json
  fs.writeFileSync('datos.json',JSON.stringify(ArchivoEnJson));
    res.json(ArchivoEnJson)

})

//ruta para editar un usuario

router.put('/api/users/:id',function(req,res,next){
  const id = req.params.id;
  const body = req.body;

  //validar

  if(body.nombre === 0 || body.nombre.length >= 30){
    return res.status(400).end('');
  }
  if(body.apellido === 0  || body.apellido.length >= 30){
    return res.status(400).end('');
  }
  if(!(/^\d+$/.test(body.telefono))){
    return res.status(400).end('');
  }
  if(!(/^(([^<>()\[\]\\.,;:\s@“]+(\.[^<>()\[\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(body.email))){
    return res.status(400).end('');
};
//buscar el usuario
  for(let i = 0; i < ArchivoEnJson.length; i++){
   console.log('editado', ArchivoEnJson[i])
    const currentUser = ArchivoEnJson[i];
    if(id == currentUser.id){
      currentUser.nombre = body.nombre,
      currentUser.apellido = body.apellido,
      currentUser.telefono = body.telefono,
      currentUser.email = body.email
    }
    fs.writeFileSync('datos.json',JSON.stringify(ArchivoEnJson));
    console.log(ArchivoEnJson);
    res.json(ArchivoEnJson)
  }
})

//ruta para eliminar un usuario

router.delete('/api/users/:id',function(req,res,next){
  const id = req.params.id;

  for(let i = 0; i < ArchivoEnJson.length;i++){
    console.log('hfjfjfh', ArchivoEnJson[i])
    const currentUser = ArchivoEnJson[i];
    if(id == currentUser.id){
    // var posicion = ArchivoEnJson.indexOf[currentUser];
      ArchivoEnJson.splice(i,1)
    }
  }
  fs.writeFileSync('datos.json',JSON.stringify(ArchivoEnJson));
  res.json(ArchivoEnJson)
   res.send('ok')
  
})


module.exports = router;
