# SoulWear - eCommerce con React y Nodejs

Ejercicio para [The Bridge, Digital Talent Accelerator](https://thebridge.tech).

https://classroom.google.com/u/0/c/NDgwNDYwMTI2OTAz/a/NTM0NDk2NzAzMzA4/details

## Autores
* Imanol [GitHub @Imi21](https://github.com/Imi21)
* Xavimat [GitHub @xavi-mat](https://github.com/xavi-mat) | [LinkedIn](https://www.linkedin.com/in/xavier-matoses/)

### Requisitos del ejercicio
#### Funcionalidades
* Registro de usuarios.
* Login de usuarios.
* Home / Header / Footer
* Que se puedan ver los productos, cada producto y añadir al carrito de compra
* Que se puedan crear pedidos
* Que en tu perfil puedas ver tus datos y tus pedidos
#### Herramientas
* React Router `/home`, `/login`, `/register`, `/profile`...
* React Context
* SASS
#### Ejecución del proyecto
* Uso de ramas con git, cuando se termine el proyecto deberán quedar dos ramas la master o main y la develop.
* Presentación de README excelente.
#### Reglas
* Los componentes no podrán sobrepasar las 400 líneas de código.
* Las funciones no deberán sobrepasar las 75 líneas de código
#### Extras
* Frontend disponible en producción (ej:Heroku)
* Buscador de productos
* Implementación de filtros, por ejemplo que se pueda filtrar un producto por precio
* El usuario con rol Admin tiene una opción en el nav que le lleva a la vista Admin
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

### Instalación
BACKEND:
https://github.com/xavi-mat/boot507-ecommerce-backend

FRONTEND:
https://github.com/xavi-mat/boot507-ecommerce-frontend

* El proyecto utiliza un backend creado con NodeJS, asociado con una base de datos MySQL gestionada con sequelize.
* Es necesario clonarse los dos repositorios: Backend y Frontend y ejecutar `npm install` en ambos.
* En el Backend será necesario crear el archivo `config.json` con los datos de acceso a la Base de Datos (ver estructura del archivo en [`config.example.json`](https://github.com/xavi-mat/boot507-ecommerce-backend/blob/main/config/config.example.json).
* En el Frontend se debe crear el archivo `.env` con la ruta de la API (ver ejemplo en [`.env.example`](./.env.example)).

### Tecnologías utilizadas

#### Frontend
* HTML
* JS / JSX
* CSS / SASS
* NodeJS
* ReactJS
* React-Router
* React Context
* Ant Design
* Axios
* DotEnv
* Git / GitHub

#### Backend
* NodeJS / ExpressJS
* sequelize
* MySql
* Postman
* JWT

Descripción amplia del backend en https://github.com/xavi-mat/boot507-ecommerce-backend#ecommerce---soulwear

## Funcionamiento
### Secciones
Cada página tiene tres secciones. El header y el footer son comunes a todas ellas y el cuerpo principal de la página, que viene definido por la ruta.

#### Header
En el Header se presenta un menú que accede a las distintas rutas. Algunas de ellas son accesibles para todos los usuarios, otras para los usuarios logueados y otras para los usuarios con un determinado rol.
* Inicio, Productos y Carrito (todos)
* Registro y Acceso (no logueados)
* Premium (clientes premium)
* Pedidos y Perfil (logueados)
* Gerente (rol de gerente)
* Administrador (rol de administrador)

#### Footer
El pie de cada página presenta el &copy; de la web con los nombres de los autores.

#### Cuerpo de la página
El contenido que se encuentra descrito en cada ruta, en la sección siguiente.

### Rutas. Listado completo

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

<img src="C:\Users\kokol\Desktop\Nueva carpeta\boot507-ecommerce-frontend\src\assets\gif.gif">


#### `/products` Productos
Presenta el listado de todos los productos. Cada uno en una tarjeta con su imagen, nombre, descripción, precio y el botón "añadir al carrito". La parte central de cada tarjeta es clicable, y lleva a la página del producto.

#### `/product/:id` Producto individual
Página de cada producto individual. Presenta la imagen en grande, el nombre, la descripción, el precio y un botón "añadir al carrito".
Incluye la media de las valoraciones y el listado de reseñas con sus valoraciones. En cada reseña se puede ver el username y el avatar de quien la escribió, el texto y la valoración individual que puso.

Los usuarios logueados que no han hecho todavía reseña a ese producto ven también un formulario para hacer su valoración y escribir su comentario. Los que ya han hecho una reseña, la ven resaltada en color amarillo y tienen la opción de borrarla.

#### `/cart` Carrito
Listado de productos que han sido añadidos en el carrito. Cada uno en una tarjeta con la imagen, nombre, descripción, precio y la cantidad incluida en el carrito. Se incluyen también dos botones uno con (+) para añadir uno a la cantidad y otro con (-) para eliminar uno. Si la cantidad queda a 0, el producto se elimina del carrito.

Al final del listado aparece el precio total.

Si el usuario está logueado, aparece también el botón "Paga ahora". Si no lo está, aparecen las dos opciones "Registro" y "Acceso", igual que se encuentran en el Header.

#### `/register` Registro
Formulario de registro con cuatro campos requeridos y dos opcionales:
* Nombre de usuario
* Correo
* Contraseña
* Confirmación de contraseña (con validación automática)
* Nombre (opcional)
* Apellido(s) (opcional)

El botón de registro envía los datos a la API. Si todo funciona bien, se muestra un mensaje de éxito que indica que se ha enviado un correo de confirmación al correo indicado.
En realidad, la API actualmente no envía el correo (por los problemas de bloqueo en puertos y los servicios de correo), por ello, junto al mensaje, aparece el enlace "CLIC AQUÍ PARA CONFIRMAR", que lleva al enlace que se hubiese enviado por correo.

#### `/login` Acceso
Presenta el clásico formulario con correo y contraseña.

#### `/premium` Cliente premium
Actualmente muestra un texto y una imagen exclusivas para los clientes premium.

#### `/orders` Pedidos
Los usuarios logueados pueden ver los pedidos que han realizado. En cada uno de ellos se presenta el total, la fecha y hora, el estado y el listado de productos con sus cantidades y precios.

Los estados posibles de los pedidos son : *abierto, pagado, enviado, recibido, cancelado*. Se muestran con etiquetas de colores distintos.

#### `/profile` Perfil
En el perfil, el usuario logueado puede ver sus datos:
* Nombre de usuario
* Nombre
* Apellido(s)
* Email
* Rol
* Avatar

Puede editar algunos de ellos (nombre de usuario, nombre, apellidos), y también puede escribir una nueva contraseña.

La vista incluye un botón para *Actualizar* y otro para hacer el *Log out*.

#### `/manager` Gerente
El gerente tiene acceso a la gestión de productos.
Puede añadir productos con un formulario, escribiendo el nombre, descripción y precio, y decidiendo si el producto estará activo o no.
También puede editar los productos existentes o borrarlos definitivamente.

#### `/admin` Administrador
La vista de administrador presenta el listado de todas las reseñas con referencia al producto reseñado y al usuario que la escribió. Tiene la opción de activar/desactivar las reseñas como lo considere oportuno.

### Funcionalidades
* Al **añadir al carrito** se almacenan en la memoria del cliente los productos añadidos y sus cantidades. Esta información no está ligada a ningún usuario en concreto. Solo un usuario logueado podrá hacer clic en **Paga ahora**.
* Al hacer clic en **Paga ahora**, la información del carrito se envía a la API para generar un pedido nuevo e incluir los productos con sus cantidades. Tras esto, se borra el carrito.
* Cuando el gerente **activa/desactiva productos**, los productos aparecen o desaparecen del listado de productos.
* Cuando el administrador **activa/desactiva reseñas**... no sucede nada. Las reseñas siguen viéndose igualmente.

## Retos y desafíos
Ha sido nuestra primera experiencia con **React** en un proyecto de cierta envergadura, por lo que era necesario aprenderlo todo al mismo tiempo que lo íbamos implementando.

Hemos empleado mucho tiempo intentando comprender la biblioteca **Ant Design**, que era completamente nueva para nosotros. Hemos utilizado algunas de sus funcionalidades (formularios con validación, paginación automática de listas y tablas, textos editables...), aunque reconocemos que nos queda mucho de su potencial por descubrir. Por otro lado, se nos ha hecho difícil utilizarla para funciones más simples como la colocación de la estructura de la pantalla.

La **carga de imágenes** ha sido un verdadero desafío que no hemos tenido tiempo de implementar. Se podría utilizar en los avatares de los usuarios y en la creación y actualización de los productos por parte del gerente.

Tampoco se ha realizado una **gestión de errores centralizada** que enviase al usuario mensajes de error personalizados y redirigiese al login en caso de fallo en la autenticación.

## Agradecimientos
* A [Sofía](https://github.com/SofiaPinilla), [Ger](https://github.com/GeerDev) e [Iván](https://github.com/ivanpuebla10), nuestros profes.
* A los compañeros/as del bootcamp.