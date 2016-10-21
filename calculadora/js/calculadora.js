function Calculadora() {
 	this.total = 0;
	this.operador = "=";
}
Calculadora.prototype.limpiar = function() {
	this.total = 0;
	this.operador = "=";
}
Calculadora.prototype.suma = function(operando) {
	this.total=parseInt(this.total)+parseInt(operando);
}
Calculadora.prototype.operar = function(operando,operacion){

	this.total = eval(this.total + operacion + operando); // 3+2
	//this.operador=operacion;
	//this.total;
}

/* prueba */
calc = new Calculadora();
console.log(calc.operar(7,"+"));
console.log(calc.operar(7,"+"));
console.log(calc.operar(7,"+"));
console.log(calc.operar(7,"+"));