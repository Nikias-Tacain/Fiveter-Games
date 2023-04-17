const productsManager = document.getElementById("productsManager")

//Fetch asincronico

async function pedirProducts() {
    const resp = await
    fetch('./data.json')
    const data = await resp.json()

    data.forEach((product)=>{
        const div = document.createElement("div")
        div.classList= "flex"
            div.innerHTML = `
            <div class="card" style="width: 19rem;">
                <img src=${product.imagen} class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${product.nombre}</h5>
                    <p class="card-text">$ ${product.precio}</p>
                    <button class="btn btn-primary"><i class="fa-solid fa-cart-plus"></i></button>
                </div>
            </div>`
        productsManager.appendChild(div)
    })
}

pedirProducts()

//Categoria memoria

async function categoriaMemorias() {
    const resp = await
    fetch('./data.json')
    const data = await resp.json()
    const datosFiltrados = data.filter(dato => dato.categoria === "memorias")
    datosFiltrados.forEach((memorias)=>{
        const div = document.createElement("div")
        div.classList= "flex"
            div.innerHTML = `
            <div class="card" style="width: 19rem;">
                <img src=${memorias.imagen} class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${memorias.nombre}</h5>
                    <p class="card-text">$ ${memorias.precio}</p>
                    <button class="btn btn-primary"><i class="fa-solid fa-cart-plus"></i></button>
                </div>
            </div>`
        productsManager.appendChild(div)
    })
}
let memoriasCategoria = document.getElementById("memoriasCategoria")

memoriasCategoria.addEventListener('click', () => {
    productsManager.innerHTML= ''
    categoriaMemorias()    
});

//Categoria gabinete

async function categoriaGabinetes() {
    const resp = await
    fetch('./data.json')
    const data = await resp.json()
    const datosFiltrados = data.filter(dato => dato.categoria === "gabinete")
    datosFiltrados.forEach((gabinete)=>{
        const div = document.createElement("div")
        div.classList= "flex"
            div.innerHTML = `
            <div class="card" style="width: 19rem;">
                <img src=${gabinete.imagen} class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${gabinete.nombre}</h5>
                    <p class="card-text">$ ${gabinete.precio}</p>
                    <button class="btn btn-primary"><i class="fa-solid fa-cart-plus"></i></button>
                </div>
            </div>`
        productsManager.appendChild(div)
    })
}
let gabineteCategoria = document.getElementById("gabineteCategoria")

gabineteCategoria.addEventListener('click', () => {
    productsManager.innerHTML= ''
    categoriaGabinetes()    
});
