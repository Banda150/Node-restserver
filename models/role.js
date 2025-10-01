//Modelo de Mongoose o también llamado Esquema de Mongoose (Mongoose Schema).

const { Schema, model } = require('mongoose');

const RoleSchema = Schema({
    rol:{
        type: String,
        required: [true, 'El rol es obligatorio']
    },

    correo: {
        required: true,
        unique: true, // 🔒 Previene duplicados en la base de datos
        type: String,
    },

});


module.exports = model( 'Role', RoleSchema );