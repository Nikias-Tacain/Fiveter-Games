let catalogo = [
    {id: 1, 
    nombre: "Memoria GeiL DDR4 16GB 3000MHz Super Luce RGB Black",
    precio: 39550, 
    imagen:"./img/MemoriaGeiLDDR416GB3000MHzSuperLuceRGBBlack.jpg",
    cantidad: 1,
    categoria: "memorias"},
    {id: 2, 
    nombre: "Auriculares HyperX Cloud Revolver 7.1", 
    precio: 35380, 
    imagen: "./img/AuricularesHyperXCloudRevolver7.1.jpg", 
    cantidad: 1},
    {id: 3, 
    nombre: "Gabinete Kolink Inspire K3 RGB  M-ATX Vidrio Templado", 
    precio: 26550, 
    imagen: "./img/GabineteKolinkInspireK3RGBM-ATXVidrioTemplado.jpg", 
    cantidad: 1,
    categoria: "gabinete"},
    {id: 4, 
    nombre: "Gabinete Kolink Void Black ARGB ATX Vidrio Templado", 
    precio: 29200, 
    imagen: "./img/GabineteKolinkVoidBlackARGBATXVidrioTemplado.jpg", 
    cantidad: 1,
    categoria: "gabinete"},
    {id: 5, 
    nombre: "Gabinete ASUS ROG STRIX Helios Aluminum Black RGB", 
    precio: 167650, 
    imagen: "./img/GabineteASUSROGSTRIHeliosAluminumBlackRGB.jpg", 
    cantidad: 1,
    categoria: "gabinete"},
    {id: 6, 
    nombre: "Placa de Video Zotac GeForce RTX 3070 8GB GDDR6 Twin Edge OC", 
    precio: 237550, 
    imagen: "./img/PlacadeVideoZotacGeForceRTX30708GBGDDR6TwinEdgeOC.jpg", 
    cantidad: 1},
    {id: 7, 
    nombre: "Gabinete Be Quiet! DARK BASE PRO 900 Black Rev 2", 
    precio: 124450, 
    imagen: "./img/GabineteBeQuiet!DARKBASEPRO900BlackRev2.jpg", 
    cantidad: 1,
    categoria: "gabinete"},
    {id: 8, 
    nombre: "Fuente ASUS ROG THOR 850W 80 Plus Platinum 850P Full modular", 
    precio: 89200, 
    imagen: "./img/FuenteASUSROGTHOR850W80PlusPlatinum850Fullmodular.jpg", 
    cantidad: 1},
    {id: 9, 
    nombre: "Fuente ASUS TUF 550W 80 Plus Bronze 550B", 
    precio: 33050, 
    imagen: "./img/FuenteASUSTUF550W80PlusBronze550B.jpg", 
    cantidad: 1}
]
//Declarando variables

const productsManager = document.getElementById("productsManager")
const modalCarrito = document.getElementById('modal-body')
const vaciarCarrito = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotalCarrito = document.getElementById('precioTotal')
let todosLosProductos = document.getElementById("allProducts")
let memoriasCategoria = document.getElementById("memoriasCategoria")
let gabineteCategoria = document.getElementById("gabineteCategoria")

//LocalStorage

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})
let carrito = []
//Todos los productos

async function allProducts(){
    catalogo.forEach((productos) => {
        const div = document.createElement('div')
        div.classList.add('flex')
        div.innerHTML = `
        <div class="card" style="width: 19rem;">
            <img src=${productos.imagen} class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${productos.nombre}</h5>
                <p class="card-text">$ ${productos.precio}</p>
                <button id="agregar${productos.id}" class="btn btn-primary"><i class="fa-solid fa-cart-plus"></i> AGREGAR</button>
            </div>
        </div>`
        productsManager.appendChild(div)
        const boton = document.getElementById(`agregar${productos.id}`)

        boton.addEventListener('click', () => {
            agregarAlCarrito(productos.id)
        })
    })
}

//Categoria memoria

async function categoriaMemorias() {
    const datosFiltrados = catalogo.filter(dato => dato.categoria === "memorias")
    datosFiltrados.forEach((productos)=>{
        const div = document.createElement("div")
        div.classList= "flex"
            div.innerHTML = `
            <div class="card" style="width: 19rem;">
                <img src=${productos.imagen} class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${productos.nombre}</h5>
                    <p class="card-text">$ ${productos.precio}</p>
                    <button id="agregar${productos.id}" class="btn btn-primary"><i class="fa-solid fa-cart-plus"></i> AGREGAR</button>
                </div>
            </div>`
        productsManager.appendChild(div)
        const boton = document.getElementById(`agregar${productos.id}`)

        boton.addEventListener('click', () => {
            agregarAlCarrito(productos.id)
        })
    })
}

//Categoria gabinete

async function categoriaGabinetes() {
    const datosFiltrados = catalogo.filter(dato => dato.categoria === "gabinete")
    datosFiltrados.forEach((productos)=>{
        const div = document.createElement("div")
        div.classList= "flex"
            div.innerHTML = `
            <div class="card" style="width: 19rem;">
                <img src=${productos.imagen} class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${productos.nombre}</h5>
                    <p class="card-text">$ ${productos.precio}</p>
                    <button id="agregar${productos.id}" class="btn btn-primary"><i class="fa-solid fa-cart-plus"></i> AGREGAR</button>
                </div>
            </div>`
        productsManager.appendChild(div)
        const boton = document.getElementById(`agregar${productos.id}`)

        boton.addEventListener('click', () => {
            agregarAlCarrito(productos.id)
        })
    })
}

//imprimir main de la tienda

allProducts()

//imprimir categoria todos

todosLosProductos.addEventListener('click', () => {
    productsManager.innerHTML= ''
    allProducts()
});

//imprimir categoria memorias

memoriasCategoria.addEventListener('click', () => {
    productsManager.innerHTML= ''
    categoriaMemorias()    
});

//imprimir categoria gabinete

gabineteCategoria.addEventListener('click', () => {
    productsManager.innerHTML= ''
    categoriaGabinetes()    
});

const actualizarCarrito = () => {
    let finallyCompra = document.getElementById('finallyCompra')
    let mensaje = carrito.length === 0 ? "Carrito vacío..." : "";
    modalCarrito.innerHTML = mensaje;
    carrito.forEach((prod) =>{
        const div = document.createElement('div')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio: ${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})"<i class="fas fa-trash-alt"></button>`
        modalCarrito.appendChild(div)
        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
    contadorCarrito.innerText = carrito.length
    precioTotalCarrito.innerText = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
    if (carrito.length === 0) {
        finallyCompra.style.display = 'none';
        vaciarCarrito.style.display = 'none';
    }else{
        finallyCompra.style.display = 'block';
        vaciarCarrito.style.display = 'block';
    }
}
const agregarAlCarrito = (prodId) => {
    const existe = carrito.some(prod => prod.id === prodId)
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se agrego correctamente al carrito.',
        showConfirmButton: false,
        timer: 900
    })
    if (existe) {
        carrito.map(prod => {
        if (prod.id === prodId){
            prod.cantidad++
        }
        })
    }else{
        const item = catalogo.find((prod) => prod.id === prodId)
        carrito.push(item)
    }
    actualizarCarrito()
}
vaciarCarrito.addEventListener('click', () => {
    Swal.fire({
        title: 'Quiere vaciar el carrito de compras?',
        showDenyButton: true,
        confirmButton: false,
        showConfirmButton: false,
        showCancelButton: true,
        denyButtonText: `Borrar`,
    }).then((result) => {
        if (result.isDenied) {
            Swal.fire('Se borro el carrito', '', 'info')
            carrito.length = 0
            localStorage.setItem('carrito', JSON.stringify(carrito))
            actualizarCarrito()
        }
    })
})
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    localStorage.setItem('carrito', JSON.stringify(carrito))
    actualizarCarrito()
}