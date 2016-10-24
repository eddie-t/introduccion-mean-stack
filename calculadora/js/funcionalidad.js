var operadorPulsado;
var valOperador="+";
var display=document.getElementById("visor");
function escribir(elemento){
	var valor= elemento.value;
	var display=document.getElementById("visor");
	if (operadorPulsado==false){
        //display.value = parseInt(display.value)*10+parseInt(valor);
        if (valor=="."){
           if(display.value.indexOf('.')==(-1)){
              display.value=display.value+valor;
           }
        }
        else{
             display.value=display.value+valor;
        }
        
    }
    else{
        if(valor=="."){
            display.value = "0.";
        }
        else{
            display.value = valor;
        }
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
    display.value=calcular.operar(display.value,elemento.value);
    /*if(elemento.value!="="){

       
        //display.value=calcular.total;
    }
    else {
        display.value=calcular.operar(display.value,elemento.value);
        operadorPulsado=true;
        //=calcular.total;
    }
*/
    
}
function valorMemoria(){
    return calcular.total;
}

var calcular= new Calculadora();
inicializar;