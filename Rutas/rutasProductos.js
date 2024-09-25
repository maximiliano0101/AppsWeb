var rutas  = require("express").Router();
//var {Router} = require("express");
var {mostrarProducto,nuevoProducto,borrarProducto,buscarPorID} = require ("../BD/productosBD");

rutas.get("/",async(req,res)=>{
    //res.send("Hola estás en raíz");
    var productosValidos = await mostrarProducto();

    res.json(productosValidos);
});

rutas.get("/buscarPorId/idP",async(req, res)=>{
    var productoValido = await buscarPorID(req.params.idP);
    res.json(productoValido);
});

rutas.delete("/borrarProducto/idP",async(req, res)=>{
    var productoBorrado = await borrarProducto(req.params.idP);
    res.json(productoBorrado);
});
rutas.post("/nuevoProducto",async(req, res)=>{
    var productoValido = await nuevoProducto(req.body);
    res.json(productoValido);
});
module.exports=rutas;