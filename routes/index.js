var express = require('express');
var router = express.Router();
var controllers = require('../controllers/controllers') // ../ para que se salga del index.js e ingrese a la carpeta y archivo controllers

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CRUD' });
});

//Rutas de Persona
router.get('/personas', controllers.listPersona);
router.get('/agregarPersona', controllers.agregarPersona);
router.post("/agregarPersona", controllers.postAgregarPersona);
router.get('/editPersona/:id', controllers.getEditarPersona);
router.post('/updatePersona/:id', controllers.postUpdatePersona);
router.get('/deletePersona/:id', controllers.getDeletePersona);
router.post('/deletePersona/:id', controllers.postDeletePersona);
router.get("/buscarPersonas", controllers.buscarPersona);
router.post('/resultadosPersona', controllers.buscarPersonaResultados); 

module.exports = router;
