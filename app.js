var createError = require('http-errors'); //carga modulo de errores en las conexiones
var express = require('express'); 
var path = require('path'); //modulo de rutas
var cookieParser = require('cookie-parser'); //modulo de cookie
var logger = require('morgan'); //paquete npm morgan(tira mensajes de estado (error))

var indexRouter = require('./routes/index'); //carga contenidos de la carpeta routes y el archivo index
var usersRouter = require('./routes/users');

var app = express(); //crea una instancia de express para crear app

var db = require('./db'); //carga el contenido de db

// view engine setup
app.set('views', path.join(__dirname, 'views')); //setea las vistas, junta el directorio con las vistas
app.set('view engine', 'ejs'); //motor renderizado de ejs
app.set("db", db) //para vincular a la var db con la app y crea una copia

app.use(logger('dev')); //Registro de la actividad app
app.use(express.json()); //formatea la solicitud a json
app.use(express.urlencoded({ extended: false })); //codificacion de respuesta 
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); //donde estan los archivos estaticos

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) { //manejo de errores
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
