"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const producto_1 = __importDefault(require("./producto"));
const question_1 = __importDefault(require("./question"));
class MaquinaExpendedora {
    constructor() {
        this.productos = [];
        this.saldo = 0;
        this.setProductos();
    }
    setProductos() {
        this.setProducto("1", "Chocorramo", 2200, 10);
        this.setProducto("2", "Chocoleche", 1500, 5);
        this.setProducto("3", "Pandebono", 500, 8);
    }
    setProducto(codigo, nombre, precio, cantidad) {
        const nuevoProducto = new producto_1.default(codigo, nombre, precio, cantidad);
        this.productos.push(nuevoProducto);
    }
    setSaldo(saldo) {
        this.saldo += saldo;
    }
    listarProductos() {
        this.productos.forEach((producto) => {
            console.log(`codigo: ${producto.getCodigo()} - ${producto.getNombre()} - precio: ${producto.getPrecio()}  cantidad: ${producto.getCantidad()}`);
        });
    }
    getProducto(codigo) {
        return this.productos.find((producto) => codigo === producto.getCodigo());
    }
    getSaldo() {
        return this.saldo;
    }
    comprarProducto(codigo) {
        const productoElegido = this.getProducto(codigo);
        if (productoElegido) {
            if (productoElegido.getCantidad() === 0) {
                console.log('Producto agotado !!');
            }
            if (this.saldo < productoElegido.getPrecio()) {
                console.log('Saldo insuficiente');
            }
            else {
                this.setSaldo(-productoElegido.getPrecio());
                console.log(`Disfruta tu ${productoElegido.getNombre()}, su cambio es: ${this.saldo}`);
            }
        }
        else {
            console.log('El producto no existe !!!');
        }
    }
    iniciarMaquina() {
        return __awaiter(this, void 0, void 0, function* () {
            let apagarMaquina = false;
            while (true) {
                console.log('**/ Menu /**');
                console.log('1. Mostrar productos');
                console.log('2. Cargar dinero');
                console.log('3. Seleccionar producto');
                console.log('4. Salir');
                const eleccion = yield question_1.default.question('Elige una opcion: ');
                switch (eleccion) {
                    case '1':
                        this.listarProductos();
                        break;
                    case '2':
                        const saldoIngresado = yield question_1.default.question('Ingresa tu saldo: ');
                        const saldoParseado = Number(saldoIngresado);
                        if (isNaN(saldoParseado)) {
                            console.log('Saldo no valido');
                        }
                        else {
                            this.setSaldo(saldoParseado);
                            console.log(`tu saldo es: ${this.getSaldo()}`);
                        }
                        break;
                    case '3':
                        const codigoProducto = yield question_1.default.question('Selecciona tu producto: ');
                        if (codigoProducto) {
                            this.comprarProducto(codigoProducto);
                        }
                        break;
                    case '4':
                        apagarMaquina = true;
                        break;
                    default:
                        break;
                }
                if (apagarMaquina) {
                    console.log('Gracias por usar la Expendedora');
                    question_1.default.close();
                    break;
                }
            }
        });
    }
}
exports.default = MaquinaExpendedora;
