
//Permite escribir en el display teniendo en cuenta
//el punto y el inicio de la calculadora
function escribir(elemento){
	var valor= elemento.value;
	var display=document.getElementById("visor");
	if (operadorPulsado==false){
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
//prepara la calculadora en un estado inicial
function inicializar(){
	var display=document.getElementById("visor");
    display.value=0;
    operadorPulsado=true;
    calcular.limpiar;
}
//llama a las operaciones de Calculadora
function operar(elemento){
    var display=document.getElementById("visor");
	operadorPulsado=true;
    display.value=calcular.operar(display.value,elemento.value);

}
var operadorPulsado;
var valOperador="+";
var display=document.getElementById("visor");
var calcular= new Calculadora();
inicializar;