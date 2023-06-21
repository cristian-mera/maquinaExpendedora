/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const maquina_1 = __importDefault(__webpack_require__(/*! ./src/maquina */ "./src/maquina.ts"));
const maquina = new maquina_1.default();
maquina.iniciarMaquina();


/***/ }),

/***/ "./src/maquina.ts":
/*!************************!*\
  !*** ./src/maquina.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
const producto_1 = __importDefault(__webpack_require__(/*! ./producto */ "./src/producto.ts"));
const question_1 = __importDefault(__webpack_require__(/*! ./question */ "./src/question.ts"));
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
exports["default"] = MaquinaExpendedora;


/***/ }),

/***/ "./src/producto.ts":
/*!*************************!*\
  !*** ./src/producto.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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
exports["default"] = Producto;


/***/ }),

/***/ "./src/question.ts":
/*!*************************!*\
  !*** ./src/question.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const readline = __importStar(__webpack_require__(/*! node:readline/promises */ "node:readline/promises"));
const node_process_1 = __webpack_require__(/*! node:process */ "node:process");
const rl = readline.createInterface({ input: node_process_1.stdin, output: node_process_1.stdout });
exports["default"] = rl;


/***/ }),

/***/ "node:process":
/*!*******************************!*\
  !*** external "node:process" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("node:process");

/***/ }),

/***/ "node:readline/promises":
/*!*****************************************!*\
  !*** external "node:readline/promises" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("node:readline/promises");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGtDQUFrQyxtQkFBTyxDQUFDLHVDQUFlO0FBQ3pEO0FBQ0E7Ozs7Ozs7Ozs7O0FDUGE7QUFDYjtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsbUNBQW1DLG1CQUFPLENBQUMscUNBQVk7QUFDdkQsbUNBQW1DLG1CQUFPLENBQUMscUNBQVk7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxzQkFBc0IsSUFBSSxzQkFBc0IsWUFBWSx1QkFBdUIsWUFBWSx1QkFBdUI7QUFDekosU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyw0QkFBNEIsa0JBQWtCLFdBQVc7QUFDcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsZ0JBQWdCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGtCQUFlOzs7Ozs7Ozs7OztBQzdHRjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7Ozs7O0FDdEJGO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9DQUFvQztBQUNuRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwwQ0FBMEMsNEJBQTRCO0FBQ3RFLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCw4QkFBOEIsbUJBQU8sQ0FBQyxzREFBd0I7QUFDOUQsdUJBQXVCLG1CQUFPLENBQUMsa0NBQWM7QUFDN0Msc0NBQXNDLDREQUE0RDtBQUNsRyxrQkFBZTs7Ozs7Ozs7Ozs7QUM1QmY7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21hcXVpbmFleHBlbmRlZG9yYS8uL2luZGV4LnRzIiwid2VicGFjazovL21hcXVpbmFleHBlbmRlZG9yYS8uL3NyYy9tYXF1aW5hLnRzIiwid2VicGFjazovL21hcXVpbmFleHBlbmRlZG9yYS8uL3NyYy9wcm9kdWN0by50cyIsIndlYnBhY2s6Ly9tYXF1aW5hZXhwZW5kZWRvcmEvLi9zcmMvcXVlc3Rpb24udHMiLCJ3ZWJwYWNrOi8vbWFxdWluYWV4cGVuZGVkb3JhL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJub2RlOnByb2Nlc3NcIiIsIndlYnBhY2s6Ly9tYXF1aW5hZXhwZW5kZWRvcmEvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcIm5vZGU6cmVhZGxpbmUvcHJvbWlzZXNcIiIsIndlYnBhY2s6Ly9tYXF1aW5hZXhwZW5kZWRvcmEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWFxdWluYWV4cGVuZGVkb3JhL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbWFxdWluYWV4cGVuZGVkb3JhL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9tYXF1aW5hZXhwZW5kZWRvcmEvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbWFxdWluYV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3NyYy9tYXF1aW5hXCIpKTtcbmNvbnN0IG1hcXVpbmEgPSBuZXcgbWFxdWluYV8xLmRlZmF1bHQoKTtcbm1hcXVpbmEuaW5pY2lhck1hcXVpbmEoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBwcm9kdWN0b18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3Byb2R1Y3RvXCIpKTtcbmNvbnN0IHF1ZXN0aW9uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcXVlc3Rpb25cIikpO1xuY2xhc3MgTWFxdWluYUV4cGVuZGVkb3JhIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0b3MgPSBbXTtcbiAgICAgICAgdGhpcy5zYWxkbyA9IDA7XG4gICAgICAgIHRoaXMuc2V0UHJvZHVjdG9zKCk7XG4gICAgfVxuICAgIHNldFByb2R1Y3RvcygpIHtcbiAgICAgICAgdGhpcy5zZXRQcm9kdWN0byhcIjFcIiwgXCJDaG9jb3JyYW1vXCIsIDIyMDAsIDEwKTtcbiAgICAgICAgdGhpcy5zZXRQcm9kdWN0byhcIjJcIiwgXCJDaG9jb2xlY2hlXCIsIDE1MDAsIDUpO1xuICAgICAgICB0aGlzLnNldFByb2R1Y3RvKFwiM1wiLCBcIlBhbmRlYm9ub1wiLCA1MDAsIDgpO1xuICAgIH1cbiAgICBzZXRQcm9kdWN0byhjb2RpZ28sIG5vbWJyZSwgcHJlY2lvLCBjYW50aWRhZCkge1xuICAgICAgICBjb25zdCBudWV2b1Byb2R1Y3RvID0gbmV3IHByb2R1Y3RvXzEuZGVmYXVsdChjb2RpZ28sIG5vbWJyZSwgcHJlY2lvLCBjYW50aWRhZCk7XG4gICAgICAgIHRoaXMucHJvZHVjdG9zLnB1c2gobnVldm9Qcm9kdWN0byk7XG4gICAgfVxuICAgIHNldFNhbGRvKHNhbGRvKSB7XG4gICAgICAgIHRoaXMuc2FsZG8gKz0gc2FsZG87XG4gICAgfVxuICAgIGxpc3RhclByb2R1Y3RvcygpIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0b3MuZm9yRWFjaCgocHJvZHVjdG8pID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBjb2RpZ286ICR7cHJvZHVjdG8uZ2V0Q29kaWdvKCl9IC0gJHtwcm9kdWN0by5nZXROb21icmUoKX0gLSBwcmVjaW86ICR7cHJvZHVjdG8uZ2V0UHJlY2lvKCl9ICBjYW50aWRhZDogJHtwcm9kdWN0by5nZXRDYW50aWRhZCgpfWApO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0UHJvZHVjdG8oY29kaWdvKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3Rvcy5maW5kKChwcm9kdWN0bykgPT4gY29kaWdvID09PSBwcm9kdWN0by5nZXRDb2RpZ28oKSk7XG4gICAgfVxuICAgIGdldFNhbGRvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zYWxkbztcbiAgICB9XG4gICAgY29tcHJhclByb2R1Y3RvKGNvZGlnbykge1xuICAgICAgICBjb25zdCBwcm9kdWN0b0VsZWdpZG8gPSB0aGlzLmdldFByb2R1Y3RvKGNvZGlnbyk7XG4gICAgICAgIGlmIChwcm9kdWN0b0VsZWdpZG8pIHtcbiAgICAgICAgICAgIGlmIChwcm9kdWN0b0VsZWdpZG8uZ2V0Q2FudGlkYWQoKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQcm9kdWN0byBhZ290YWRvICEhJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5zYWxkbyA8IHByb2R1Y3RvRWxlZ2lkby5nZXRQcmVjaW8oKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTYWxkbyBpbnN1ZmljaWVudGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U2FsZG8oLXByb2R1Y3RvRWxlZ2lkby5nZXRQcmVjaW8oKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYERpc2ZydXRhIHR1ICR7cHJvZHVjdG9FbGVnaWRvLmdldE5vbWJyZSgpfSwgc3UgY2FtYmlvIGVzOiAke3RoaXMuc2FsZG99YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRWwgcHJvZHVjdG8gbm8gZXhpc3RlICEhIScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGluaWNpYXJNYXF1aW5hKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgbGV0IGFwYWdhck1hcXVpbmEgPSBmYWxzZTtcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyoqLyBNZW51IC8qKicpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcxLiBNb3N0cmFyIHByb2R1Y3RvcycpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcyLiBDYXJnYXIgZGluZXJvJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzMuIFNlbGVjY2lvbmFyIHByb2R1Y3RvJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzQuIFNhbGlyJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlY2Npb24gPSB5aWVsZCBxdWVzdGlvbl8xLmRlZmF1bHQucXVlc3Rpb24oJ0VsaWdlIHVuYSBvcGNpb246ICcpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZWxlY2Npb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnMSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RhclByb2R1Y3RvcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJzInOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2FsZG9JbmdyZXNhZG8gPSB5aWVsZCBxdWVzdGlvbl8xLmRlZmF1bHQucXVlc3Rpb24oJ0luZ3Jlc2EgdHUgc2FsZG86ICcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2FsZG9QYXJzZWFkbyA9IE51bWJlcihzYWxkb0luZ3Jlc2Fkbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNOYU4oc2FsZG9QYXJzZWFkbykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2FsZG8gbm8gdmFsaWRvJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFNhbGRvKHNhbGRvUGFyc2VhZG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGB0dSBzYWxkbyBlczogJHt0aGlzLmdldFNhbGRvKCl9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnMyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2RpZ29Qcm9kdWN0byA9IHlpZWxkIHF1ZXN0aW9uXzEuZGVmYXVsdC5xdWVzdGlvbignU2VsZWNjaW9uYSB0dSBwcm9kdWN0bzogJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kaWdvUHJvZHVjdG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXByYXJQcm9kdWN0byhjb2RpZ29Qcm9kdWN0byk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnNCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBhcGFnYXJNYXF1aW5hID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChhcGFnYXJNYXF1aW5hKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHcmFjaWFzIHBvciB1c2FyIGxhIEV4cGVuZGVkb3JhJyk7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uXzEuZGVmYXVsdC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IE1hcXVpbmFFeHBlbmRlZG9yYTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgUHJvZHVjdG8ge1xuICAgIGNvbnN0cnVjdG9yKGNvZGlnbywgbm9tYnJlLCBwcmVjaW8sIGNhbnRpZGFkKSB7XG4gICAgICAgIHRoaXMuY29kaWdvID0gY29kaWdvO1xuICAgICAgICB0aGlzLm5vbWJyZSA9IG5vbWJyZTtcbiAgICAgICAgdGhpcy5wcmVjaW8gPSBwcmVjaW87XG4gICAgICAgIHRoaXMuY2FudGlkYWQgPSBjYW50aWRhZDtcbiAgICB9XG4gICAgZ2V0Q29kaWdvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2RpZ287XG4gICAgfVxuICAgIGdldE5vbWJyZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9tYnJlO1xuICAgIH1cbiAgICBnZXRQcmVjaW8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByZWNpbztcbiAgICB9XG4gICAgZ2V0Q2FudGlkYWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbnRpZGFkO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFByb2R1Y3RvO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHJlYWRsaW5lID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJub2RlOnJlYWRsaW5lL3Byb21pc2VzXCIpKTtcbmNvbnN0IG5vZGVfcHJvY2Vzc18xID0gcmVxdWlyZShcIm5vZGU6cHJvY2Vzc1wiKTtcbmNvbnN0IHJsID0gcmVhZGxpbmUuY3JlYXRlSW50ZXJmYWNlKHsgaW5wdXQ6IG5vZGVfcHJvY2Vzc18xLnN0ZGluLCBvdXRwdXQ6IG5vZGVfcHJvY2Vzc18xLnN0ZG91dCB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHJsO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZTpwcm9jZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGU6cmVhZGxpbmUvcHJvbWlzZXNcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=