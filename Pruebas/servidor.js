const express = require("express");
require ("dotenv").config();
const app=express();
const port=process.env.PORT || 3000
//Middleware
var saludo=(req, res, next)=>{
    console.log("Hola");
    next();
}

app.use(saludo);  // el app.use es un tipo de middleware wue se va a ejecutar siempre.

app.get("/",saludo,(req, res)=>{
    res.send("Hola estás en raíz")
});

app.get("/home",saludo,(req, res)=>{
    res.send("Hola estás en home")
});

app.get("/otro",(req, res)=>{
    res.send("Hola estás en home")
});
    
app.listen(port,()=>{
    console.log("Servidor en http://localhost"+port) //Usaremos esto cada vez que hagamos un login
});