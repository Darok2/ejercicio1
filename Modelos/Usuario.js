const mongoose = require('mongoose');

let UsuarioSchema = new mongoose.Schema({
    idUsuario: Number,
    nombreUsuario:  String,
    telefonoUsuario: Number,
    ciudadUsuario: String,
});

module.exports = mongoose.model('usuario',UsuarioSchema, 'Usuarios');