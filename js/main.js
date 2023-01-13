const contenedor = document.querySelector(".contenedor-cards");
const buscarInput = document.querySelector("#buscarInput");
const btnBuscar = document.querySelector("#btnBuscar");

const productos = [
    { nombre: "vodka 750cc",   precio: 2000 , img:"slide1.jpg"},
    { nombre: "fernet 750cc",  precio: 2200 , img:"slide3.jpg"},
    { nombre: "whisky 750cc",  precio: 5000 , img:"slide2.jpg"},
    { nombre: "gancia 750cc",  precio: 1500 , img:"slide3.jpg"},
    { nombre: "chandon 750cc", precio: 3500 , img:"slide2.jpg"},
    { nombre: "mumm 750cc",    precio: 1500 , img:"slide1.jpg"},
    { nombre: "moett 750cc",   precio: 7000 , img:"slide3.jpg"},
    { nombre: "Absolut 750cc", precio: 2000 , img:"slide2.jpg"},
]

// funcion filtrado
function productoFiltro(filtro) {
    const filtrado = productos.filter((elemento) => {
        return elemento.nombre.includes(filtro)
    })
    return filtrado;
}

// funcion crear HTML
function crearHTML(array) {
    let html;
    contenedor.innerHTML = "";
    for (const productos of array) {
        html = `<div class="card text-center shadow p-3 mb-5 bg-body-tertiary rounded "  style = "width: 18rem;" >
        <img src="./assets/${productos.img}" class="card-img-top" alt="...">
            <div class="card-body ">
                <h5 class="card-title">${productos.nombre.toUpperCase()}</h5>
                <p class="card-text">Precio: $${productos.precio}</p>
                <a href="#" class="btn btn-primary">Agregrar al carrito</a>
            </div>
        </div> `
        contenedor.innerHTML += html;
    }
    }


crearHTML(productos)

btnBuscar.addEventListener("click", (e) => {
    e.preventDefault()
    let filtro = productoFiltro(buscarInput.value)
    console.log(filtro);
    crearHTML(filtro);
})







// `< div class="card text-center" style = "width: 18rem;" >
//         <img src="./assets/${productos.img}" class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title">${productos.nombre}</h5>
//                 <p class="card-text">${productos.precio}</p>
//                 <a href="#" class="btn btn-primary">Agregrar al carrito</a>
//             </div>
//         </div> `