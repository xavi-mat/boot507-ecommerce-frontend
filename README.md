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

|Ruta        |Nombre|Rol  |Uso|
|------------|------|-----|---|
|`/`         |Inicio|todos|Página de inicio|
|`/products` |Productos|todos|Listado de productos|
|`/product/:id`|Producto individual|todos|Vista de un producto con sus reseñas|
|`/cart`     |Carrito|todos|Carrito|
|`/register`|Registro|no logueado|Formulario de registro|
|`/login`|Acceso|no logueado|Formulario de acceso|
|`/premium`|Cliente premium|premium|Vista para clientes premium|
|`/orders`|Pedidos|logueado|Listado de pedidos realizados|
|`/profile`|Perfil|logueado|Perfil con los datos del usuario|
|`/manager`|Gerente|manager|CRUD de productos|
|`/admin`|Administrador|admin|Gestión de reseñas|

#### `/` Inicio
Presenta la página principal con el logo y un carrusel de imágenes.

#### `/products` Productos
Presenta el listado de todos los productos. Cada uno en una tarjeta con su imagen, nombre, descripción, precio y el botón "añadir al carrito". La parte central de cada tarjeta es clicable, y lleva a la página del producto.

#### `/product/:id` Producto individual
Página de cada producto individual. Presenta la imagen en grande, el nombre, la descripción, el precio y un botón "añadir al carrito".
Incluye la media de las valoraciones y el listado de reseñas con sus valoraciones. En cada reseña se puede ver el username y el avatar de quién las escribió, el texto y la valoración individual que puso.

Los usuarios logueados que no han hecho todavía reseña a ese producto en concreto ven también un formulario para hacer su valoración y escribir su comentario. Los que ya han hecho una reseña, la ven resaltada en color amarillo y tienen la opción de borrarla.

#### `/cart` Carrito
Listado de productos que han sido añadidos en el carrito. Cada uno en una tarjeta con la imagen, nombre, descripción, precio y la cantidad incluida en el carrito. Se incluyen también dos botones uno con (+) para añadir uno a la cantidad y otro con (-) para eliminar uno. Si la cantidad queda a 0, el producto se elimina del carrito.

#### `/register` Registro


#### `/login` Acceso


#### `/premium` Cliente premium


#### `/orders` Pedidos


#### `/profile` Perfil


#### `/manager` Gerente


#### `/admin` Administrador


### Funcionalidades
* Al **añadir al carrito** ...
* ...
## Agradecimientos
* ...


