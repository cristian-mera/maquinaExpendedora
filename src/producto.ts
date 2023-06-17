export default class Producto {

  private codigo: string 
  private nombre: string 
  private precio: number 
  private cantidad: number 

  constructor (codigo:string,nombre: string, precio: number, cantidad:number){
    this.codigo = codigo
    this.nombre = nombre
    this.precio = precio
    this.cantidad = cantidad
  }

  public getCodigo () {
    return this.codigo
  }
  public getNombre () {
    return this.nombre
  }
  public getPrecio () {
    return this.precio
  }
  public getCantidad () {
    return this.cantidad
  }

  
}