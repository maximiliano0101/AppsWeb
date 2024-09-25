var a = require("./variable"); //para recibir variables de otro archivo.
var objeto=require("./variable2");
var {b,c }=require("./variable2");
var be = require("./variable2").b;
var d=require("./variable3").d;
console.log(a);
console.log(objeto.b);
console.log(c);
console.log(be);
console.log(d);