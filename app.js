console.log("Hola mundo!");
variableGlobales = "variablesGobales";
var variableGlobalesConVar = "Esto sigue siendo una variable global";
mi_funcion_con_var();
mi_funcion_con_let();
function mi_funcion_con_var(){
    var otraVariable = "esto es una variable local";
    for (var i= 0; i<10 ; i++){
        console.log("valor de i "+i);
    }
    console.log("vaor de i al final "+i);
}
function mi_funcion_con_let(){
    let otraVariable = "esto es una variable local";
    for (let i= 0; i<10 ; i++){
        console.log("valor de i "+i);
    }
    //TODO:buscar una condicion para evaluar si la variable existe
    if (typeof(i) === "undefined") {
        console.log("objeto no está definido.");
    }
    //console.log("valor de i al final "+i);
}
console.log("Tipos de datos");
var tipoDeDatoNumerico = 7;
var tipoDeDatoCadena ="Siete";
var fechaDeEstreno = new Date();
var otraFecha = fechaDeEstreno;
otraFecha.setFullYear(1989);
console.log("fecha de estreno "+ fechaDeEstreno.getFullYear());
cambiarYear(otraFecha);
function cambiarYear(fecha){
    //TODO: Asegurarse que lo que llega es de tipo fecha
    if (fecha instanceof Date){
        fecha.setFullYear(1990);
        console.log("fecha de la funcion " + fecha.getFullYear());
    }
}
console.log("fecha de la funcion " + otraFecha.getFullYear());
console.log("fecha de la funcion " + fechaDeEstreno.getFullYear());
console.log("Resultado typeOf numerico "+typeof tipoDeDatoNumerico);
console.log("Resultado typeOf numerico "+typeof tipoDeDatoCadena);
console.log("Resultado de un new Date()"+ typeof fechaDeEstreno);
pruebaNumerico();
function pruebaNumerico(){
    let numero = new Number(3.43543);
    console.log("valor almacenado" + numero.valueOf());
    console.log("valor almacenado" + numero.toFixed());
    console.log("valor almacenado" + numero.toFixed(4));
}
console.log("Referencias");
function pruebaDeArgumentos(argumento1){
    console.log("Numero de parametros "+arguments.length);
    console.log("Numero de argumentos esperados "+arguments.callee.length);
    for(let i= 0; i<arguments.length;i++){
        console.log("posicion: "+i + " valor: "+arguments[i]);
    }
}
//Funcion sumar dos o mas, no puede aceptar menos de dos parametros
//Si no es numerico no se cuenta y se escribe en el log
function suma (num1, num2){
    console.log("------------------------");
    let suma=0;
    if (arguments.length<2){
        console.log("menos de dos parametros");
        return;
    }
    else{
        for(let i=0; i<arguments.length; i++){
            if(typeof(arguments[i])=="number"){
                suma=suma + arguments[i];
            }
            else{
                console.log("valor no numerico "+arguments[i]);
            }
        }
        return suma;
    }
}

console.log(suma(1));
console.log(suma(1,2));
console.log(suma(1,"pascual",3));
pruebaDeArgumentos();
pruebaDeArgumentos(1);
pruebaDeArgumentos("hola", 21, "pepito",43);
console.log("inicio de ejemplos js con arrays");
console.log("Adios mundo cruel!");