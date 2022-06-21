Desarrollo de una API REST que permite al usuario lo siguiente:

a) Registro de usuario (signup)

b) Autenticarse en el sistema (login)

c) Crear una tarea.

d) Visualizar tareas.

e) Modificar tareas.

f) Marcar como completado una tarea.

g) Eliminar tarea, ver tareas completadas.

Además se enlazó a una base de datos (MySQL) para su funcionamiento. Se proporciona el archivo sql para la construcción rápida de la base de datos y que además contiene datos que se utilizaron para las pruebas en conexión. También se comparte el diagrama de entidad-relación de la base de datos con la que se trabajó.

Iniciando el proyecto: 

1- Instalar dependencias con npm install.

2- Luego levantar el servidor con npm start que ocupará el puerto 5000.

Datos adicionales con respecto a la API:

- Utilizar Postman para consumir la API.

- Todos los resultados se mostrarán mediante dato JSON.

- Para registrarse, los campos deben llegar por formulario (body) y los campos a validar son: name (nombre), lastname (apellido), email (correo) y pass (contraseña).
POST entry point -> localhost:5000/api/register

- Para el login se valida con el email y pass. Dato importante: el id del usuario, que se podrá observar al momento de consumir la API como "id", será de gran importancia para el uso de los otros entry points.
POST entry point -> localhost:5000/api/login

- Para crear tareas, los campos deben llegar por formulario (body) y los campos a validar son: priority (prioridad), info_task (información de la tarea). Cabe destacar que cuando se crea una tarea al mismo tiempo se registra el campo status (estado, que corresponde si la tarea esta completada o no. En este caso se registran siempre como no completadas. Otro detalle es que el valor se tomó como booleano pero con números: 0 se entiende como no completado y 1 como completado).
POST entry point -> localhost:5000/api/2/createtask El id del usuario es necesario para poder crear una tarea: /2/createtask, /3/createtask, /4/createtask

- Visualizar las tareas. Dato importante: cuando se visualize la(s) tarea(s), tendrá(n) un id que correspondera al id de la tarea y esto será de gran importancia para poder manipular la(s) tarea(s) con los otros entry points.
GET entry point -> localhost:5000/api/1/listoftasks El id del usuario es necesario para visualizar las tareas que tendría el usuario registrado: /2/listoftasks, /3/listoftasks 

- Modificar una tarea
PUT entry point -> localhost:5000/api/1/updatetask/1 Tanto el id del usuario como el id de la tarea son necesarios para realizar la modificación pertinente: /1/updatetask/2, /1/updatetask/3, /2/updatetask/5 el primer número o parámetro es el id del usuario y el segundo número o parámetro es el id de la tarea

- Marcar una tarea como completado
PUT entry point -> localhost:5000/api/1/checktask/3 Nuevamente el id del usuario y el id de la tarea son necesarios para dar como completado una tarea: /1/checktask/5, /2/checktask/4, /3/checktask/1 el primer número o parámetro es el id del usuario y el segundo número o parámetro es el id de la tarea

- Eliminar una tarea
DELETE entry point -> localhost:5000/api/1/deletetask/6 Una vez más, el id del usuario y el id de la tarea son necesarios para eliminar por completo una tarea: /2/deletetask/1, /2/deletetask/5, /3/deletetask/3 el primer número o parámetro es el id del usuario y el segundo número o parámetro es el id de la tarea

- Ver tareas que se completaron
GET entry point -> localhost:5000/api/2/taskscompleted Solamente se necesita el id del usuario para visualizar las tareas que se marcaron como completadas: /3/taskscompleted, /4/taskscompleted

¡¨¨¨DATO IMPORTANTE¨¨!

Se desarrollo el proyecto con Docker de manera local (uso de docker-compose), por lo que para poder ejecutar el proyecto desde otro dispositivo se deberán cambiar las credenciales y configuraciones en el archivo config.json ubicado en la carpeta config que esta dentro de la carpeta database. Adicionalmente, se agrega la propiedad "port" al archivo config.json para lograr enlazar la base de datos, por lo que esta propiedad puede llegar a afectar la ejecución del proyecto. 