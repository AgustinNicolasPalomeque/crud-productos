export class Producto {
    codigo;
    nombre;
    precio;
    imagen;

    constructor(codigo, nombre, precio, imagen) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }

    static items = [];

    static agregar(producto) {
        Producto.items.push(producto);
    }

    static quitar(codigo) {
        Producto.items = Producto.items.filter(p => p.codigo !== codigo);
    }
}
