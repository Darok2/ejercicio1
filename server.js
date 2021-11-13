const { Router } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const UsuarioSchema = require("./Modelos/Usuario.js");

const app = express();
const route = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//conexion a base de datos

mongoose.connect("mongodb+srv://dava:Dava0316@clusteg46c4.pq9t3.mongodb.net/ciclo4eje1?retryWrites=true&w=majority")


// Operaciones Crud

route.get('/',(req, res)=> {
    res.send("Este es el inicio de mi primera API")
});

// Consultar todos
route.get('/', (req, res) => {
    UsuarioSchema.find(function(err, datos) {
        

        if(err){
            console.log("Error leyendo los usuarios");
        }
        else{
        res.send(datos);
        }
    })
})
//Insertar

route.post('/Usuario', (req, res) =>{
    let nuevoUsuario = new UsuarioSchema({
     
        idUsuario: req.body.id,
        nombreUsuario: req.body.nombre,
        telefonoUsuario: req.body.telefono,
        ciudadUsuario: req.body.ciudad,
    });
    nuevoUsuario.save(function(err, datos){
        if(err){
            console.log(err);
        }
        res.send("Usuario Almacenado")
    })
})
app.use(route);
app.listen(3000, ()=> {
     console.log("servidor corriendo en el puerto 3000")

});