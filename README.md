# SoulWear - eCommerce con React y Nodejs

Ejercicio para [The Bridge](https://thebridge.tech).

## Requisitos del ejercicio
### Funcionalidades
* Registro de usuarios.
* Login de usuarios.
* Home / Header / Footer
* Que se puedan ver los productos, cada producto y añadir al carrito de compra
* Que se pueda crear pedidos
* Que en tu perfil puedas ver tus datos y tus pedidos
### Herramientas
* React Router `/home`, `/login`, `/register`, `/profile`...
* React Context
* SASS
### Ejecución del proyecto
* Uso de ramas con git, cuando se termine el proyecto deberán quedar dos ramas la master o main y la develop.
* Presentación de README excelente.
### Reglas
* Los componentes no podrán sobrepasar las 400 líneas de código.
* Las funciones no deberán sobrepasar las 75 líneas de código
### Extras
* Frontend disponible en producción (ej:Heroku)
* Buscador de productos
* Implementación de filtros, por ejemplo que se pueda filtrar un producto por precio
* El usuario con rol Admin pueda tiene una opción en el nav que le lleva a la vista Admin
* Vista Admin donde se puede hacer el CRUD de productos (solamente si tienes el role Admin)
* CRUD de los productos
* Añadir o quitar un producto de favoritos
* Que el usuario pueda añadir reviews a un producto
* Que solo puedas editar y eliminar las reviews que tu creas.
* El usuario puede subir fotos en las reviews o cambiar su foto de perfil.
* El usuario puede dar likes a las reviews de los productos.
* El usuario en su perfil puede ver sus pedidos
* Implementación de guards
* Que sea responsive

## Autores
* Imanol [GitHub](https://github.com/Imi21)
* Xavimat [GitHub](https://github.com/xavi-mat) [LinkedIn](https://www.linkedin.com/in/xavier-matoses/)

### Instalación
BACKEND:
https://github.com/xavi-mat/boot507-ecommerce-backend

FRONTEND:
https://github.com/xavi-mat/boot507-ecommerce-frontend

* El proyecto utiliza un backend creado con NodeJS, asociado con una base de datos MySQL gestionada con sequelize.
* Es necesario clonarse los dos repositorios: Backend y Frontend y ejecutar `npm install` en ambos.
* En el Backend será necesario crear el archivo `config.json` con los datos de acceso a la Base de Datos (ver estructura del archivo en `config.example.json`).
* En el Frontend se debe crear el archivo `.env` con la ruta de la API (ver ejemplo en `.env.example`).

### Tecnologías utilizadas

#### Frontend
* ...

#### Backend
* ...

## Funcionamiento
* ...
### Rutas
Listado completo

|Ruta|Nombre|Rol|Uso|
|----+------+---+---|
|`/`|Inicio|||
|`/products`|Productos|||
|`/product/?`|Producto ?|||
|`/cart`|Carrito|||
|`/register`|Registro|||
|`/login`|Acceso|||
|`/premium`|Cliente premium|||
|`/orders`|Pedidos|||
|`/profile`|Perfil|||
|`/manager`|Gerente|||
|`/admin`|Administrador|||

#### `/` Inicio
#### `/products` Productos
#### `/product/?` Producto ?
#### `/cart` Carrito
#### `/register` Registro
#### `/login` Acceso
#### `/premium` Cliente premium
#### `/orders` Pedidos
#### `/profile` Perfil
#### `/manager` Gerente
#### `/admin` Administrador

## Agradecimientos
* ...


