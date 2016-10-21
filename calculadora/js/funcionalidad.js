var operadorPulsado;
var valOperador="+";
var display=document.getElementById("visor");
function escribir(elemento){
	var valor= elemento.value;
	var display=document.getElementById("visor");
	if (operadorPulsado==false){
        display.value = parseInt(display.value)*10+parseInt(valor);
    }
    else{
        display.value = parseInt(valor);
        operadorPulsado=false;
    }
}
function inicializar(){
	var display=document.getElementById("visor");
    display.value=0;
    operadorPulsado=true;
    calcular.limpiar;
}
function operar(elemento){
    var display=document.getElementById("visor");
	operadorPulsado=true;
    if(elemento.value!="="){
        //display.value=calcular.total;
        calcular.operar(display.value,elemento.value);
    }
    else{
        display.value=calcular.total;
    }
    
}
function valorMemoria(){
    return calcular.total;
}

var calcular= new Calculadora();
inicializar;