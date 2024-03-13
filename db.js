const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    //host: 'mysql',
    user: 'root',
    password: '1234'
});

// Conectar al servidor
db.connect((err) => {
    if(err){
        console.log("Error en la conexión al servidor");
        return;
    }

    // Verificar si existe la base de datos
    db.query("CREATE DATABASE IF NOT EXISTS crudBD" ,(err) => {
        if(err){
            console.log("Error al crear la base de datos");
            return;
        }
        console.log("BD creada o ya existente");
    });

    // Seleccionar la base de datos
    db.query("USE crudBD", (err) =>{
        if(err){
            console.log("Error al seleccionar la base de datos");
            return;
        }
        console.log("Conexión exitosa");
    });
    // Crear tabla oficina
    const createTableOficinaSQL = `
        CREATE TABLE IF NOT EXISTS oficina(
            id INT AUTO_INCREMENT PRIMARY KEY,
            denominacion VARCHAR(255) NOT NULL
        )
    `; 
    db.query(createTableOficinaSQL, (err) => {
        if(err){
            console.log("Error al crear la tabla oficina");
            console.log(err);
            return;
        }
        console.log("Tabla oficina creada o ya existente");
    });
    //verificar si existe la tabla persona o crear tabla persona
    const createTablePersonaSQL = `
        CREATE TABLE IF NOT EXISTS persona(
            id INT AUTO_INCREMENT PRIMARY KEY,
            nombre VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            oficina_id INT NOT NULL, 
            FOREIGN KEY (oficina_id) REFERENCES oficina(id)
        )
    `;   
    db.query(createTablePersonaSQL, (err) => {
        if(err){
            console.log("Error al crear la tabla persona");
            console.log(err);
            return;
        }
        console.log("Tabla persona creada o ya existente");
    });
});

module.exports = db;