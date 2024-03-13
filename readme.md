    Proyecto desarrollo de una pagina web.

Materia: Practica Profecionalizante 1.

Profesor: Luis Romano.

---

## Herramientas y tecnologias utilizadas en el proyecto

En el proyecto se desarrolló un sistema CRUD sus siglas significan crear(create), leer (read), 
actualizar(Update), eliminar(Delete) utilizando la  tecnología Node.js. Este sistema permite 
la gestión de datos a través de una interfaz web dinámica y eficiente. Me permitio construir una 
aplicacion web escalable y de alto rendimiento.
Gracias a esta tecnología pude utilizar npm (Node Package Manager o manejador de paquetes de node) 
que permite crear los archivos necesarios para gestionar los desarrollos. Tambien un framework 
(esestructura base para elaborar un proyecto) Express.js para realizar plantillas.
Se utilizo mysql para poder crear una base de datos y para la creación de las tablas Persona con sus 
campos id(int), nombre(text), email(text), id_oficina(int (para relacionar con la tabla oficina)) y 
Oficina con sus campos id(int) y denominación(text(nombre de oficina)).
Javascript para dar funcinalidad a las plantillas y a las rutas. HTML para su estructura,Bootstrap 
es una biblioteca de herramientas de código abierto optimizadas permitiendo realizar el diseño del 
sitio web.
Docker me permitio realizar un contenedor del proyecto(sitio web) y docker-compose 
para poder levantar el contenedor.


## Requisitos Previos 
Antes de comenzar, asegúrate de tener 
instalado lo siguiente:


- Una computadora
- Sistema Operativo (Linux o Windows)
- Editor de código (recomendado: Visual Studio Code)
- Base de Datos (MySQL Workbench)
- Control de versiones (Github)
- Entorno de codigo abierto(Node.js)
- Administrador de paquetes (NPM)
- Framework (Express.js)
- Contenedor (Docker Hub)

## Instalación 🔧

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu computadora 
local para propósitos de desarrollo y pruebas:
En Git o en la Terminal de Visual.
1. Clona el repositorio:
git clone https://github.com/laragimenez/tpcruddb

2. Navega al directorio del proyecto:
cd cruddb

3. Instalar dependecias: npm install

4. Instalar base de datos: npm install mysql2

5. Desplegarlo en docker:
docker-compose up -d

## Funcionalidades: 🔩

1. Registrar oficinas: Los usuarios pueden agregar oficinas proporcionando un nombre y asignándoles 
un número identificador único.
2. Registrar personas: Permite la inclusión de personas ingresando su nombre y apellido, email y el 
ID de la oficina a la que pertenecen.
3. Listado de personas: Muestra a las personas registradas en la base de datos.
4. Listado de oficinas: Muestra a las oficinas registradas en la base de datos.
5. Modificación y borrado de datos: Permite editar la información de personas u oficinas ya 
registradas, a su vez eliminar esos registros.
6. Busqueda de la personas: Permite buscar a una persona. oficina a travez de su nombre(persona) y 
denominacion(oficina), lo muestra si esta registrado en caso contrario no aparece.

### Construido con 🛠️
- JavaScript: lenguaje de programación utilizado para hacer páginas web interactivas.

- Node.js: Permite crear sitios web dinámicos muy eficientes, escritos con el lenguaje de 
programación JavaScript.

- NPM: Node Package Manager o manejador de paquetes de node, es la herramienta por defecto de 
JavaScript para la tarea de compartir e instalar paquetes.

- Express: Es el framework backend más popular para Node.js, y es una parte extensa de JavaScript. 
Permite utilizar html para la creación de las plantillas.

- MySQL: Es una base de datos que nos permite administrar, crear, eliminar datos.

- Github: Es un sistema de control de versiones que nos permite almacenar proyectos.

- Docker: Es un sistema operativo para contenedores, permite tener un registros en la nube.

-Docker compose:  Es una herramienta de orquestación diseñada para simplificar la gestión y el despliegue de aplicaciones multicontenedor mediante Docker.

- Boostrap: Es una biblioteca de herramientas de codigo abierto y es el framework de CSS y 
Javascript diseñado para la creación de interfaces limpias y con un diseño responsive.

### Versionado 📌
Para todas las versiones disponibles, los tags del repositorio son los siguientes: 

### Explicación de los archivos

La carpeta _bin_ tiene un archivo llamado _www_ es la encargada de conectarse con el navegador a 
traves del puerto 3000, para poder visualizar la aplicación porque se creo una instancia de la app.
js en donde tiene todos los modulos cargados, a su vez tiene un manejador de errores y de escucha, a 
su vez un puerto para escuchar peticiones.

---

El archivo _app.js_ contiene los modulos para el manejo de errores(http-errors) y de rutas(path), 
para la creacion de plantillas(express), cokies,registros(morgan).
Tambien tiene una instancia indexRouter y usersRouter para acceder a los datos almacenados en esos 
archivos (carpeta:router, archivo: index.js y users.js). Se crea una instancia de express para poder 
crear la aplicación (var app = express();) y tambien importa la base de datos (var db = require('./
db');)

app.set('views', path.join(__dirname, 'views'));: Configura la carpeta de vistas para que Express 
busque las plantillas en la carpeta views.
app.set('view engine', 'ejs');: Configura el motor de vistas para usar EJS, que es un motor de 
plantillas para Node.js.
app.set("db", db): Configura la variable db en la aplicación Express, lo que permite que otros 
componentes de la aplicación accedan a ella.
app.use(logger('dev'));: Registra información sobre cada solicitud HTTP en la consola.
app.use(express.json());: Utiliza express.json() para analizar el cuerpo de las solicitudes HTTP con 
formato JSON.
module.exports = app; Permite exportar los datos del archivo para poder utilizar en todos las 
carpetas/archivo

---

El archivo _db.js_ descargar el modulo mysql2, crea una conexion con un hots, user y password. Una 
conexion con la base de datos, se crea la base de datos, las tablas y si ocurre un error retorna un 
mensaje por consola. Por ultimo se exporta el archivo.

---

La carpeta _routes_ tiene el archivo _index.js_ en donde contiene las rutas del sitio web, gracias a 
express, tambien importa la carpeta y su archivo llamado controllers, para poder llamar a las 
funciones de cada ruta. 

router.                get            ('/personas',       controllers.listPersona);
crear la ruta | adquirir información | ruta (navegador) | llama la variable controllers y a su 
función.

---

La carpeta y archivo llamado _Controllers_ contiene las funciones que le da interactividad a las 
rutas, estas funciones se conectan a la base de datos, realizan consultas y devuelve los resultados 
a traves de las vistas(views).

---

Carpeta _views_ estan las plantillas .ejs en donde estan las pestañas de las rutas hechas con html. 
Para dar estilo utilice boostrap para dar estilo a las plantillas.

---

La carpeta _public_ contiene archivos estaticos como las imagenes, javascript, stylesheets(dar 
estilo) en donde no cambiara a traves del tiempo.

---

La carpeta _node modules_ tiene todas las dependencias de la aplicación.


## Autor

-Lara Giménez

## contacto

- Gmail: laragimenez@itscordoba.edu.ar
- Nombre de usuario gitlab: laragimenez
Repositorio: https://github.com/laragimenez/tpcruddb
