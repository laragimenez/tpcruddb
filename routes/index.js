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

//Rutas de Oficina
router.get('/oficinas', controllers.listOficina);
router.get('/agregarOficina', controllers.agregarOficina);
router.post('/agregarOficina', controllers.postAgregarOficina);
router.get('/editOficina/:id', controllers.getEditarOficina);
router.post('/updateOficina/:id', controllers.postUpdateOficina);
router.get('/deleteOficina/:id', controllers.getDeleteOficina);
router.post('/deleteOficina/:id', controllers.postDeleteOficina);
router.get("/buscarOficina", controllers.buscarOficina);
router.post('/resultadosOficina', controllers.buscarOficinaResultados); 

module.exports = router;
