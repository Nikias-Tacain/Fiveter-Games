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

//Tarjeta

cardNumberInput.addEventListener("input", function(event) {
    let inputValue = event.target.value;
    
    if (inputValue.length >= 16) {
      event.target.value = inputValue.slice(0, 16);
    }
  
    cardNumberElement.textContent = event.target.value;
});

cardHolderInput.addEventListener("input", function(event) {
    let inputValue = event.target.value;
    let uppercaseValue = inputValue.toUpperCase();
    let lettersOnly = inputValue.replace(/[^a-zA-Z]/g, '');
    cardHolderElement.textContent = event.target.value;
    if (inputValue.length >= 16) {
        event.target.value = inputValue.slice(0, 16);
    }
    cardHolderElement.textContent = event.target.value;
    event.target.value = lettersOnly;
    event.target.value = uppercaseValue;
});

expirationDateInput.addEventListener("input", function(event) {
  expirationDateElement.textContent = event.target.value;
});

tarjetaFinally.addEventListener('click' , function() {
    tarjetaFinally.style.backgroundColor = 'green';
    tarjetaFinally.innerText = 'Gracias por confiar !!!'
    setTimeout(function() {
        localStorage.removeItem('carrito');
        window.location.href = 'tienda.html';
    }, 2000);
})