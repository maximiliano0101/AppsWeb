const Producto = require("../modelos/ProductoModelo");
const productosBD = require("./conexion").productos;

function validarDatos(producto){
    var valido=false;
    if(producto.nombre!=undefined && producto.precio!=undefined && producto.tipoProducto!=undefined){
        valido=true;
    }
    return valido;
}


async function mostrarProducto(){
    const productos = await productosBD.get();
    //console.log(usuarios);
    productosValidos=[];
    productos.forEach(producto => {
        //console.log(usuario.id);
        const producto1=new Producto({id:producto.id,...producto.data()})
        if(validarDatos(producto1.getProducto)){
            productosValidos.push(producto1.getProducto);
        }
        //listaUsuarios.push(usuario.data())
        //console.log(usuario.data());
    });
    //console.log(usuariosValidos);
    return productosValidos;
}

async function buscarPorID(id) {
    const producto=await productosBD.doc(id).get();
    const producto1=new Producto({id:producto.id,...producto.data()});
    var productoValido;
    if(validarDatos(producto1.getProducto)){
        productoValido=producto1.getProducto;
    }
    //console.log(usuario1.getUsuario)
    return productoValido;
}
async function nuevoProducto(data) {
    data.tipoProducto="producto";
    const producto1=new Producto(data);
    
    
    //console.log(usuario1.getUsuario);
    var productoValido=false;
    if(validarDatos(producto1.getProducto)){
        await productosBD.doc().set(producto1.getProducto);
        productoValido=true;
    }
    return productoValido;
}
/*data={
    nombre:"martillo",
    precio: "$120.00",
    tipoProducto: "Herramienta"
}

async function prueba() {
    console.log(await nuevoProducto(data));
}
/*prueba();
buscarPorID("00001");
mostrarProducto();*/

async function borrarProducto(id) {
    var productoValido= await buscarPorID(id);
    var productoBorrado=false;
    if(productoValido){
        await productosBD.doc(id).delete();
        productoBorrado=true;
    }
    return productoBorrado;
}
module.exports={
    mostrarProducto,
    nuevoProducto,
    borrarProducto,
    buscarPorID
}
//Revisar cuando si existe el usuario, pero es incorrecto.
//borrarProducto("WMroKYZf9eCzooiiqduB");