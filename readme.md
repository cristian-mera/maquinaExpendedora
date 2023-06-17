Maquina expendedora

En esta primera aproximacion de la maquina expendedora, se crean las clases "Producto" y "MaquinaExpendedora".
se emplea la libreria Readline para gestionar el ingreso de datos por consola, y se hace una ligera aproximacion al manejo de errores.

## Ejecución

para ejecutar la aplicacion utilize el comando node para ejecutar el archivo index

```bash
node index.js
```

Es posible que deba ejecutarde el comando para compilacion del archivo ts a Js.

```bash
npx tsc
```

es posible que deba inicializar node dentro del proyecto.

## Uso

la aplicacion desplegara el menu solicitado:

```
**/ Menu /**
1. Mostrar productos
2. Cargar dinero
3. Seleccionar producto
4. Salir
```

la opcion 1 mostrara los productos disponibles:

```
codigo: 1 - Chocorramo - precio: 2200  cantidad: 10
codigo: 2 - Chocoleche - precio: 1500  cantidad: 5
codigo: 3 - Pandebono - precio: 500  cantidad: 8
```

la opcion 2 te pide que cargues una cantidad de dinero, lo cargara a tu salo y lo muestra por consola:

```
Ingresa tu saldo: 5000
tu saldo es: 5000
```
la opcion 3 te permite adquirir uno de los productos listados y te dice cual es el cambio de la compra :

```
Selecciona tu producto: 2
Disfruta tu Chocoleche, su cambio es: 3500
```
la opcion 4 termina el proceso.




## License

[MIT](https://choosealicense.com/licenses/mit/)