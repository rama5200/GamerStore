const carro = new Carrito();
const carrito = document.getElementById('carro');
const listaProductosCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.getElementById('vaciar-carrito');
const comprar = document.getElementById('procesar-comprar');


function cargarEventos(){
    const productos = document.getElementById("lista-productos");
    productos.addEventListener('click', (e) => {carro.agregarProducto(e)});
    carrito.addEventListener('click', (e) => {carro.eliminarProducto(e)});
    vaciarCarrito.addEventListener('click', (e) => {carro.vaciarCarrito(e)});
    comprar.addEventListener('click', (e) => {carro.comprar(e)});
}


$(() => {
    cargarEventos();
    document.addEventListener('DOMContentLoaded', carro.leerProductosLocalStorage());
});
