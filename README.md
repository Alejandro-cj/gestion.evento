# Gestión de Eventos

## Descripción

Este proyecto es una aplicación backend para la **gestión de eventos** que permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre una base de datos MongoDB. La aplicación sigue la **arquitectura hexagonal**, lo que garantiza la separación de responsabilidades entre las diferentes capas del sistema. El proyecto utiliza **Node.js** con **TypeScript** y varios paquetes adicionales como **Express**, **Mongoose**, **Joi** y **Jest** para la validación y pruebas.

### Autor

Este proyecto fue desarrollado por **Alejandro Cogollo Julio**.

## Requisitos

- **Node.js** (versión 14 o superior)
- **MongoDB**
- **npm** o **yarn** (gestor de dependencias)
  
### Dependencias del proyecto:

- `express`: Framework web para manejar las rutas.
- `mongoose`: ODM para interactuar con la base de datos MongoDB.
- `dotenv`: Manejo de variables de entorno.
- `joi`: Validación de datos.
- `jest`: Framework para realizar pruebas unitarias.

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/Alejandro-cj/gestion.evento.git

2. Ve al directorio del proyecto:
    cd gestion.eventos

3. Instala las dependencias del proyecto:
    npm install

4. Crea un archivo .env en la raíz del proyecto para las variables de entorno. Incluye la URL de conexión a tu base de datos MongoDB:

MONGODB_URL=mongodb://localhost:27017/gestion.eventos

5. Inicia el servidor:
    npm run dev



# Arquitectura del Proyecto
La aplicación sigue la arquitectura hexagonal y está dividida en las siguientes capas:

## Capa de Dominio: 
Contiene las entidades y lógica de negocio, así como un catálogo de errores específico para manejar excepciones.

## Capa de Aplicación: 
Contiene los servicios que interactúan con la capa de dominio para realizar las operaciones CRUD.
## Capa de Infraestructura: 
Maneja la persistencia de datos y la comunicación con MongoDB a través de Mongoose.
## Capa de Presentación: 
Implementa las rutas HTTP que permiten interactuar con la aplicación.

# Modelo de Datos
El modelo de Evento está definido en la capa de infraestructura utilizando Mongoose. El esquema del evento incluye los siguientes campos:

title (string): Título del evento.
description (string): Descripción del evento.
date (Date): Fecha y hora del evento.
location (string): Ubicación del evento.
organizer (string): Nombre del organizador del evento.

# Rutas

## Crear un Evento
 POST /events
Esta ruta permite crear un nuevo evento. Los datos de entrada son validados mediante Joi. Ejemplo de solicitud:
{
  "title": "Concierto de Rock",
  "description": "Un concierto al aire libre",
  "date": "2024-12-01T19:00:00.000Z",
  "location": "Parque Central",
  "organizer": "Live Nation"
}

## Leer eventos 
    Obtener todos los eventos
    GET /events
    Obtener eventos especificos por su id:
    GET /events/:id

## Actualizar evento
    PATCH /events/:id
    Esta ruta permite actualizar los detalles de un evento existente. La validación también se realiza usando Joi.

## Eliminar evento
    DELETE /events/:id
    Permite eliminar un evento específico de la base de datos.



# Validación de Datos
Se utiliza Joi para la validación de los datos en las solicitudes. Antes de que la solicitud sea procesada por las rutas, el middleware de validación comprueba que los datos cumplen con los requisitos definidos.

# Pruebas Unitarias
El proyecto utiliza Jest para las pruebas unitarias. Las pruebas cubren tanto los casos de éxito como los errores esperados en la lógica de negocio. Para ejecutar las pruebas, usa el siguiente comando:
    npm run test





