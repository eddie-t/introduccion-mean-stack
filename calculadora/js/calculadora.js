function Calculadora() {
 	this.total = 0;
	this.operador = "+";
}
Calculadora.prototype.limpiar = function() {
	this.total = 0;
	this.operador = "+";
}
Calculadora.prototype.suma = function(operando) {
	this.total=parseInt(this.total)+parseInt(operando);
}
Calculadora.prototype.operar = function(operando,operacion){

	var valor = eval(this.total + this.operador + operando); // 3+2
	if (operacion!="="){
		this.operador=operacion;
		this.total=valor;
	} 
	else{
		this.limpiar();
		//this.total=0;
	}
	return valor;
	//this.operador=operacion;
	//this.total;
	
}

/* prueba */

/*calc = new Calculadora();

console.log(calc.operar(0,"+"));
console.log(calc.operar(5,"-"));
console.log(calc.operar(7,"+"));
console.log(calc.operar(3,"-"));
calc.limpiar();*/