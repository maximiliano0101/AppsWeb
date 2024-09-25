class Usuario{
    constructor(data){
        //console.log(data);
        this.id=data.id;
        this.nombre=data.nombre;
        this.usuario=data.usuario;
        this.password=data.password;
        this.salt=data.salt;
        this.tipoUsuario=data.tipoUsuario;
    }
    set id(id){
        this._id=id;
    }
    set nombre(nombre){
        const nombreRegex=/^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
        if(nombreRegex.test(nombre)){
            this._nombre=nombre;
        }
    }
    set usuario(usuario){
        this._usuario=usuario;
    }
    set password(password){
        this._password=password;
    }
    set salt(salt){
        this._salt=salt;
    }
    set tipoUsuario(tipoUsuario){
        this._tipoUsuario=tipoUsuario;
    }
    get id(){
        return this._id;
    }
    get nombre(){
        return this._nombre;
    }
    get usuario(){
        return this._usuario;
    }
    get password(){
        return this._password;
    }
    get salt(){
        return this._salt;
    }
    get tipoUsuario(){
        return this._tipoUsuario;
    }
    get getUsuario(){
        const conid={
            id:this.id,
            nombre:this.nombre,
            usuario:this.usuario,
            password:this.password
        }
        const sinid={
            nombre:this.nombre,
            usuario:this.usuario,
            password:this.password
        }
        if(this.id==undefined){
            return sinid;
        }
        else {
            return conid;
        }
    }
}
module.exports=Usuario;