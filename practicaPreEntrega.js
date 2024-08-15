
/* <div class"card">  
<h2 class"titulo"> Predator </h2>
<img class"img">
<p> precio <p>
</div>  */
const productos = [
    {
        id: 1, nombre: "Messi", precio: 20000, img: "https://acdn.mitiendanube.com/stores/819/313/products/010hb1-8bc12a2d5ff7c47cb316710289632568-640-0.png"
    },

    {
        id: 2, nombre: "Selección Argentina", precio: 30000, img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/89cc99c51bc240c8a5f8c259c5fb76b3_9366/Remera_Argentina_24_Beige_IY5490_01_laydown.jpg"
    },

    {
        id: 3, nombre: "Jesús", precio: 60000, img: "https://acdn.mitiendanube.com/stores/830/660/products/zt-0672-frente1-a055546af8894e9f3d16008130900809-1024-1024.jpg"
    },

    {
        id: 4, nombre: "Alternativa Selección ", precio: 100000, img: "https://s3.sa-east-1.amazonaws.com/www.vaypol.com.ar/variants/gqa64pkpgx8zoyntqkxdfh7ezd00/c77c2a06864ac9aca38dc5bd9371de015471edcdbf322dfb14411689bf968ae5"
    },
];




let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
/*Dejo esto comentado para saber que es lo que hacia el codigo 
intento de recuperar el carrito del localStorage
let carritoGuardado = localStorage.getItem("carrito");

//si hay un carrito guardado, lo convertimos a un objeto de JavaScript
if(carritoGuardado){
    carrito=JSON.parse(carritoGuardado);
}else{
    //si no hay un carrito guardado, inicializamos un carrito con un array vacio
    carrito=[];
}
*/

function card(producto) {

    //desestructure productos para no usar la palabra producto.
    const { id, nombre, precio, img } = producto;

    const contenedor = document.createElement("div");
    contenedor.className = "contenedor";

    const card = document.createElement("div");
    card.className = "card";

    const titulo = document.createElement("h2");
    titulo.className = "titulo";
    titulo.innerText = nombre;

    const imagen = document.createElement("img");
    imagen.className = "imagen";
    imagen.src = img;

    const Precio = document.createElement("p");
    Precio.innerText = `$${precio}`;

    const button = document.createElement("button");
    button.innerText = "Agregar al carrito";
    button.className = "button";
    button.addEventListener("click", () => {
        //verificar si el producto no se repite
        const productoEnCarrito = carrito.find(el => el.id === id);
        if (productoEnCarrito) {
            //si esta el producto, le incremento la cantidad
            productoEnCarrito.cantidad = productoEnCarrito.cantidad + 1;//acumulador
            console.log()

        } else {
            //copio todas las propiedades de producto y le agrego la propiedad de cantidad, para hacer eso uso el operador spread
            carrito.push({ ...producto, cantidad: 1 });
        }
        //le paso al localStorage el carrito stringifiado
        localStorage.setItem("carrito", JSON.stringify(carrito));

    })

    const button2 = document.createElement("button");
    button2.className = "button2"
    button2.innerText = "Borrar ultimo producto del carrito"
    button2.addEventListener("click", () => {
        carrito.pop();
        localStorage.setItem("carrito", JSON.stringify(carrito));
    })

    const button3 = document.createElement("button");
    button3.className = "button3"
    button3.innerText = "Mostrar carrito"
    button3.addEventListener("click", () => {
        //en esta parte recorremos carrito 
        let msjCarrito = "Productos en carrito:\n";
        //el index es algo que viene incorporado en el forEach, me permite saber la posicion de cada elemento en este caso el (objeto) dentro del array, el conteo empieaza desde cero, por eso le sumo uno  porque en el primer recorrido el index que es cero, se muestre como 1 para el cliente 
        carrito.forEach((producto, index) => {
            msjCarrito += ` ${index + 1} - ${producto.nombre} -Cantidad: ${producto.cantidad} - Precio: $${producto.precio}\n`
        })
        alert(msjCarrito);

    })

    // Agregamos todo al div card:
    card.append(titulo);
    card.append(imagen);
    card.append(Precio);
    card.append(button);
    card.append(button2);
    card.append(button3);

    // Agregamos el div card (que contiene todo) al div contenedor
    contenedor.append(card);

    // Por ultimo, agregamos todo al DOM
    document.body.append(contenedor);
}

// Recorre cada elemento del array agregandole la funcion card a cada producto
productos.forEach(el => {
    card(el);
});

