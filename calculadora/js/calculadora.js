function Calculadora() {
 	this.total = 0;
	this.operador = "+";
}
//Devuelve valores a estado inicial
Calculadora.prototype.limpiar = function() {
	this.total = 0;
	this.operador = "+";
}
//realiza las operaciones 
//parametros operando y operacion siguiente
//Se realizan los calculos con operador grabado en Calculadora
Calculadora.prototype.operar = function(operando,operacion){

	var valor = eval(this.total + this.operador + operando); 
	if (operacion!="="){
		this.operador=operacion;
		this.total=valor;
	} 
	else{
		this.limpiar();
	}
	return valor;
}
