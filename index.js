import { Producto } from "./classes/Producto.js";

const formulario = document.getElementById('formulario');
const tabla = document.getElementById('tabla-productos');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const codigo = document.getElementById('codigo').value;
    const nombre = document.getElementById('nombre').value;
    const precio = Number(document.getElementById('precio').value);
    const imagen = document.getElementById('imagen').value;

    const producto = new Producto(codigo, nombre, precio, imagen);
    Producto.agregar(producto);
    guardar();
    mostrarProducto(producto);
    formulario.reset();
});

tabla.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const codigo = e.target.dataset.codigo;
        Producto.quitar(codigo);
        guardar();
        e.target.closest('tr').remove();
    }
});

function mostrarProducto(producto) {
    const fila = document.createElement('tr');

    fila.innerHTML = `
        <td>${producto.codigo}</td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td><img src="${producto.imagen}" width="60"></td>
        <td><button data-codigo="${producto.codigo}">Eliminar</button></td>
    `;

    tabla.appendChild(fila);
}

function guardar() {
    localStorage.setItem('productos', JSON.stringify(Producto.items));
}

// Recuperar los productos guardados al abrir la página
const guardados = JSON.parse(localStorage.getItem('productos')) || [];
guardados.forEach(p => {
    const producto = new Producto(p.codigo, p.nombre, p.precio, p.imagen);
    Producto.agregar(producto);
    mostrarProducto(producto);
});
