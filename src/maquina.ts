import  Producto  from "./producto"
import rl from "./question"

export default class MaquinaExpendedora {

  private productos : Array<Producto> = []
  private saldo : number = 0

  constructor(){
    this.setProductos()
  }

  private setProductos(): void {
    this.setProducto("1", "Chocorramo", 2200, 10);
    this.setProducto("2", "Chocoleche", 1500, 5);
    this.setProducto("3", "Pandebono", 500, 8);
  }

  private setProducto(codigo:string, nombre: string, precio: number, cantidad:number): void {
    const nuevoProducto = new Producto(codigo, nombre, precio, cantidad)
    this.productos.push(nuevoProducto)
  }

  public setSaldo(saldo:number) : void{
    this.saldo += saldo
  }

  private listarProductos (){
    this.productos.forEach((producto)=>{
      console.log(`codigo: ${producto.getCodigo()} - ${producto.getNombre()} - precio: ${producto.getPrecio()}  cantidad: ${producto.getCantidad()}`)
    })
  }

  private getProducto(codigo: string) : Producto | undefined {
    return this.productos.find((producto) => codigo === producto.getCodigo())
  }

  private getSaldo(){
    return this.saldo
  }
  
  public comprarProducto(codigo:string) : void {
    const productoElegido = this.getProducto(codigo)
    if (productoElegido){

      if (productoElegido.getCantidad() === 0){
        console.log('Producto agotado !!')
      }
      
      if (this.saldo < productoElegido.getPrecio()){
        console.log('Saldo insuficiente')
      } else {
        this.setSaldo(-productoElegido.getPrecio())
        console.log(`Disfruta tu ${productoElegido.getNombre()}, su cambio es: ${this.saldo}`)
      }
    } else {
      console.log('El producto no existe !!!')
    }
  }

  public async  iniciarMaquina () {
    let apagarMaquina = false

    while(true){
      console.log('**/ Menu /**')
      console.log('1. Mostrar productos')
      console.log('2. Cargar dinero')
      console.log('3. Seleccionar producto')
      console.log('4. Salir')
      

      const eleccion = await rl.question('Elige una opcion: ')
      
      switch (eleccion) {
        case '1':
          this.listarProductos()
          break;
        case '2':
          const saldoIngresado : string | null = await rl.question('Ingresa tu saldo: ') 
          
          const saldoParseado : number = Number(saldoIngresado)
          if(isNaN(saldoParseado)){
            console.log('Saldo no valido')
          }else {
            this.setSaldo(saldoParseado)
            console.log(`tu saldo es: ${this.getSaldo()}`)
          }
          break;
        case '3':
          const codigoProducto = await rl.question('Selecciona tu producto: ')
          
          if(codigoProducto){
            this.comprarProducto(codigoProducto)
          }
          break;
        case '4':
          apagarMaquina = true
          break;
        default:
          break;
      } 
      
      if (apagarMaquina) {
        console.log('Gracias por usar la Expendedora')
        rl.close()
        break
      }
    }


  }


}


