
//codigo de ingreso de la tarjeta
const contenedorTarjeta = document.createElement("div");
contenedorTarjeta.className = "contenedorTarjeta";
document.body.append(contenedorTarjeta);

//h2 titulo
const h2Tarjeta = document.createElement("h2");
h2Tarjeta.className = "h2Tarjeta";
h2Tarjeta.innerText = "Ingrese el codigo de su tarjeta para poder calcular el total.";
contenedorTarjeta.append(h2Tarjeta);

//boton para guardar el codigo de la tarjeta
const buttonEnviarCodigo = document.createElement("button");
buttonEnviarCodigo.className = "buttonEnviarCodigo"
buttonEnviarCodigo.innerText = "Enviar codigo";
contenedorTarjeta.append(buttonEnviarCodigo);


//input para ingresar el codigo de la tarjeta
const inputTarjeta = document.createElement("input");
inputTarjeta.className = "inputTarjeta";
inputTarjeta.type = "password";
inputTarjeta.placeholder = "codigo de la tarjeta";
contenedorTarjeta.append(inputTarjeta);

//obtencion de la clave de la tarjeta
buttonEnviarCodigo.addEventListener("click", () => {
    const codigo = inputTarjeta.value;// logro capturar lo que ingresa el usuario

    if (codigo === "") {
        alert("porfavor ingrese la clave de su tarjeta")
    }
    else {
        button4.addEventListener("click", () => {
            // Calcular el precio total de los productos en el carrito
            const precioFinal = carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);

            // Mostramos el precio final en el input
            input.value = `$${precioFinal}`;
        });
    }
})


//creo un div para poner adrentro del mismo un boton y un input asi luego lo puedo centrar en la pagina
const contenedorBoton4 = document.createElement("div");
contenedorBoton4.className = "contenedorBoton4";
document.body.append(contenedorBoton4);

//boton de total
const button4 = document.createElement("button");
button4.innerText = "Total";
button4.className = "boton4";
contenedorBoton4.append(button4);

//input
const input = document.createElement("input");
input.placeholder = "total";
input.className = "total";
input.type = "text";
contenedorBoton4.append(input);


