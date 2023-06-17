"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Producto {
    constructor(codigo, nombre, precio, cantidad) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    getCodigo() {
        return this.codigo;
    }
    getNombre() {
        return this.nombre;
    }
    getPrecio() {
        return this.precio;
    }
    getCantidad() {
        return this.cantidad;
    }
}
exports.default = Producto;
