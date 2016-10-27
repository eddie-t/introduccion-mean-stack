$(document).ready(inicializarEventos);
function inicializarEventos(){
    $(".numero").click(escribir);
    $(".operacion").click(operar);
    $("#ce").click(inicializar);
}
//Permite escribir en el display teniendo en cuenta
//el punto y el inicio de la calculadora
function escribir(){
    var valor= $(this).val();
    var display=$("#visor");
    if (operadorPulsado==false){
        if (valor=="."){
           if(display.val().indexOf('.')==(-1)){
              display.val(display.val()+valor);
           }
        }
        else{
             display.val(display.val()+valor);
        }

    }
    else{
        if(valor=="."){
            display.val("0.") ;
        }
        else{
            display.val(valor);
        }
        operadorPulsado=false;
    }
}
//prepara la calculadora en un estado inicial
function inicializar(){
    var display=$("#visor");
    display.val(0);
    operadorPulsado=true;
    calcular.limpiar;
}
//llama a las operaciones de Calculadora
function operar(){
    let operador = $(this).val();
    var display=$("#visor");
	operadorPulsado=true;
    display.val(calcular.operar(display.val(),operador));
}
var operadorPulsado;
var valOperador="+";
var display=$("#visor");
var calcular= new Calculadora();
inicializar;