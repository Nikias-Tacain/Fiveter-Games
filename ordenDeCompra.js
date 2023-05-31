//Declarando variables

let ordenDeCompra = document.getElementById("ordenDeCompra")
let cardNumberInput = document.getElementById("card-number-input");
let cardHolderInput = document.getElementById("card-holder-input");
let expirationDateInput = document.getElementById("expiration-date-input");
let cardNumberElement = document.getElementById("card-number");
let cardHolderElement = document.getElementById("card-holder");
let expirationDateElement = document.getElementById("expiration-date");
let tarjetaFinally = document.getElementById("tarjetaFinally")
const carritoCompra = JSON.parse(localStorage.getItem('carrito'));
const precioCarrito = document.getElementById('montoTotal')

carritoCompra.forEach((prod) =>{
    const div = document.createElement('div')
    div.innerHTML = `
    <p>${prod.nombre}</p>
    <p>Precio: ${prod.precio}</p>
    <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>`
    ordenDeCompra.appendChild(div)
})
precioCarrito.innerText = carritoCompra.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
function validar() {
    let numTarjeta = document.getElementById('card-number-input').value;
    let titularTarjeta = document.getElementById('card-holder-input').value;
    let expirationTarjeta = document.getElementById('expiration-date-input').value;
    if (numTarjeta && titularTarjeta && expirationTarjeta) {
        tarjetaFinally.style.backgroundColor = 'green';
        localStorage.removeItem('carrito');
    }
}
//Numero Tarjeta
cardNumberInput.addEventListener("input", function(event) {
    let inputValue = event.target.value;
    
    if (inputValue.length >= 16) {
      event.target.value = inputValue.slice(0, 16);
    }
  
    cardNumberElement.textContent = event.target.value;
});
//Titular Tarjeta
function convertirMayusculas(input) {
    let valor = input.value;
  valor = valor.toUpperCase();
  valor = valor.replace(/[^A-Z\s]/g, '');
  input.value = valor;
}
cardHolderInput.addEventListener("input", function(event) {
    let inputValue = event.target.value;
    if (inputValue.length >= 19) {
        event.target.value = inputValue.slice(0, 19);
    }
    cardHolderElement.textContent = event.target.value;
});
//Fecha Expiracion Tarjeta
function formatoFecha(input) {
    let valor = input.value;
    valor = valor.replace(/\D/g, '');
    let mes = valor.substring(0, 2);
    let año = valor.substring(2, 4);
    valor = mes + (mes.length === 2 ? '/' : '') + año;
    input.value = valor;
}
expirationDateInput.addEventListener("input", function(event) {
    let expiration = event.target.value;
    
    if (expiration.length >= 5) {
      event.target.value = expiration.slice(0, 5);
    }
    expirationDateElement.textContent = event.target.value;
});