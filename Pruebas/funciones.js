function saludar(){
    console.log("Hola")
}
saludar();

function saludar2(nombre="anonoimo"){
    var s="Hola"+ nombre;
    return s;
}
saludar2("Josue ivan");

function saludar3(){
    var s="Hola"+ nombre;
    return s;
}

console.log(saludar3("Juancho"));
var saludo=()=>{
    console.log ("Hola");
    }


saludo();
 var saludar3=nombre=>{
    
    return "Hola"+nombre;
 }
console.log( saludar3("Perenganito"));

var saludar4=nombre=>"Hola"+nombre;
console.log(saludar4("pancracio"));
   

console.log(nombre=>"Hola"+nombre);

var saludo5=function(){
    console.log("hola");

}

saludo5();

var saludo6=()=>{
    console.log("Saludo6");
}

var saludo7=(nombre, s)=>{
    console.log("Hola");
}
saludo7("Bethoven", saludo6);