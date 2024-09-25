const { log } = require("console");
var crypto = require ("crypto");
function encriptarPassword(password){
    var salt=crypto.randomBytes(32).toString("hex");
    const hash=crypto.scryptSync(password,salt,100000,64,"sha512").toString("hex");
    return {
        salt, 
        hash
    }
}
function validarPassword(password, hash, salt, ){
    const hashValidar=crypto.scryptSync(password,salt,100000,64,"sha512").toString("hex");
    return hashValidar==hash;
    
}

function usuarioAutorizado(){
    var autorizado=false;

    return autorizado;
}
function adminAutorizado(){
    var autorizado=false;

    return autorizado;
}

module.exports={
    encriptarPassword,
    validarPassword,
    usuarioAutorizado,
    adminAutorizado
}

//encriptarPassword("HOLA");