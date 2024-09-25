class Producto{
    constructor(data){
        //console.log(data);
        this.id=data.id;
        this.nombre=data.nombre;
        this.precio=data.precio;
        this.tipoProducto=data.tipoProducto;
    }
    set id(id){
        this._id=id;
    }
    set nombre(nombre){
            this._nombre=nombre;
    }
    set precio(precio){
        this._precio=precio;
    }
    set tipoProducto(tipoProducto){
        this._tipoProducto=tipoProducto;
    }
    get id(){
        return this._id;
    }
    get nombre(){
        return this._nombre;
    }
    get precio(){
        return this._precio;
    }
    get tipoProducto(){
        return this._tipoProducto;
    }
    get getProducto(){
        const conid={
            id:this.id,
            nombre:this.nombre,
            precio:this.precio,
            tipoProducto:this.tipoProducto
        }
        const sinid={
            nombre:this.nombre,
            precio:this.precio,
            tipoProducto:this.tipoProducto
        }
        if(this.id==undefined){
            return sinid;
        }
        else {
            return conid;
        }
    }
}
module.exports=Producto;