var express = require('express');

const listPersona= (req, res, next) => {
    const db = req.app.get("db"); //para llamar la bd que creamos en app.js y conectarnos
    const query = "SELECT * from persona"; // seleccion en la tabla persona
    db.query(query, function(err, rows){ //llama a la bd selecciona todos los elementos, se crea una funcion con 2 parametros err(error) y rows(filas)
    if(err){
      console.log(err);
      return;
    } 
    res.render("personas", {personas:rows, title:"Lista de personas"}); //creo un objeto persona y devuelvo filas
    });
};

const agregarPersona= (req, res, next) => {
    res.render('agregarPersona', {title:"Agregar persona"});
};

const postAgregarPersona= (req,res,next) => {
    const db = req.app.get("db");
    const nombre =req.body.nombre;
    const email =req.body.email;
    const oficina_id = req.body.oficina_id;
    const query = "INSERT into persona(nombre,email, oficina_id) VALUES (?, ?, ?)";
    db.query(query, [nombre, email, oficina_id], function(err){
      if(err){
        console.log(err);
        return;
      }
      res.redirect("/personas");
    });
};

const getEditarPersona = (req, res, next) => {
    var db = req.app.get('db');
    var id = req.params.id;
    db.query("SELECT * FROM persona WHERE id= (?)", [id], function(err, row){
      if(err){
        console.error(err);
        return;
    }
      res.render('editPersona', {item: row[0], title:"Editar persona"});
    });
};

const postUpdatePersona = (req, res, next) => {
    var db = req.app.get('db');
    var id = req.params.id;
    var nombre = req.body.nombre;
    var email = req.body.email;
    var oficina_id = req.body.oficina_id;
    db.query("UPDATE persona SET nombre=?, email=?, oficina_id= ? WHERE id=?", [nombre, email, oficina_id , id], function(err) {
    if (err) {
        console.error(err);
        return;
    }
    res.redirect('/personas');
    });
};

const getDeletePersona = (req, res, next) => {
  var db = req.app.get('db');
  var id = req.params.id;
  db.query("SELECT * FROM persona WHERE id=?", id, function(err, rows) {
      if (err) {
          console.error(err);
          return;
      }
      res.render('borrarPersona', { item: rows[0], title: "Borrar" });
  });
}

const postDeletePersona = function(req, res, next) {
  var db = req.app.get('db');
  var id = req.params.id;
  db.query("DELETE FROM persona WHERE id=?", id, function(err) {
      if (err) {
          console.error(err);
          return;
      }
      res.redirect('/personas');
  });
}

const buscarPersona = (req,res, next) => {
  res.render('busquedaPersona',  {title: "Buscar"});
};

const buscarPersonaResultados = (req, res, next) => {
  var db= req.app.get("db");
  var keyword = req.body.keyword;
  const query = 'SELECT persona.nombre, persona.email, oficina.denominacion FROM persona JOIN oficina ON persona.oficina_id = oficina.id WHERE nombre LIKE ?';
  db.query(query, [`%${keyword}`], (err, rows) => {
    if(err) throw err;
    res.render('resultadosPersona', {personas: rows, title: "Resultados"})
  });
};

const listOficina= (req, res, next) => {
    const db = req.app.get("db"); //para llamar la bd que creamos en app.js y conectarnos
    const query = "SELECT * from oficina"; // seleccion en la tabla persona
    db.query(query, function(err, rows){ //llama a la bd selecciona todos los elementos, se crea una funcion con 2 parametros err(error) y rows(filas)
    if(err){
      console.log(err);
      return;
    } 
    res.render("oficinas", {oficinas:rows, title:"Lista de la oficina"}); //creo un objeto oficina y devuelvo filas
    });
  };
  
  const agregarOficina= (req, res, next) => {
    res.render('agregarOficina', {title:"Agregar oficina"});
  };
  
  const postAgregarOficina= (req,res,next) => {
    const db = req.app.get("db");
    const denominacion =req.body.denominacion;
    const query = "INSERT into oficina(denominacion) VALUES (?)";
    db.query(query, [denominacion], function(err){
      if(err){
        console.log(err);
        return;
      }
      res.redirect("/oficinas");
    });
  };
  
  const getEditarOficina = (req, res, next) => {
    var db = req.app.get('db');
    var id = req.params.id;
    db.query("SELECT * FROM oficina WHERE id= (?)", [id], function(err, row){
      if(err){
        console.error(err);
        return;
    }
      res.render('editOficina', {item: row[0], title:"Editar oficina"});
    });
  };
  
  const postUpdateOficina = (req, res, next) => {
    var db = req.app.get('db');
    var id = req.params.id;
    var denominacion = req.body.denominacion;
    db.query("UPDATE oficina SET denominacion=? WHERE id=?", [denominacion , id], function(err) {
    if (err) {
        console.error(err);
        return;
    }
    res.redirect('/oficinas');
    });
  };
  
  const getDeleteOficina = (req, res, next) => {
    var db = req.app.get('db');
    var id = req.params.id;
    db.query("SELECT * FROM oficina WHERE id=?", id, function(err, rows) {
        if (err) {
            console.error(err);
            return;
        }
        res.render('borrarOficina', { item: rows[0], title: "Borrar" });
    });
  }
  
  const postDeleteOficina = function(req, res, next) {
    var db = req.app.get('db');
    var id = req.params.id;
    db.query("DELETE FROM oficina WHERE id=?", id, function(err) {
        if (err) {
            console.error(err);
            return;
        }
        res.redirect('/oficinas');
    });
  };
  
  const buscarOficina = (req,res, next) => {
    res.render('busquedaOficina',  {title: "Buscar"});
  };
  
  const buscarOficinaResultados = (req, res, next) => {
    var db= req.app.get("db");
    var keyword = req.body.keyword;
    const query = 'SELECT * FROM oficina WHERE denominacion LIKE ?'; 
    db.query(query, [`%${keyword}`], (err, rows) => {
      if(err) throw err;
      res.render('resultadosOficina', {oficinas: rows, title: "Resultados"})
    });
  };

module.exports = { //nos permite hacer referencia en otros archivos
    listPersona,
    agregarPersona,
    postAgregarPersona,
    getEditarPersona,
    postUpdatePersona,
    getDeletePersona,
    postDeletePersona,
    buscarPersona,
    buscarPersonaResultados,

    listOficina,
    agregarOficina,
    postAgregarOficina,
    getEditarOficina,
    postUpdateOficina,
    getDeleteOficina,
    postDeleteOficina,
    buscarOficina,
    buscarOficinaResultados
}