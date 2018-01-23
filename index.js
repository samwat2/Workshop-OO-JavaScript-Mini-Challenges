class Multiplier{
	constructor(n){
		this.n = n;
		this.current_value = 1;
	}
	multiply(){
		this.current_value = this.n * this.current_value;
	}
	get_current_value(){
		return this.current_value;
	}

}
var number = new Multiplier(8);
number.multiply();
console.log(number.get_current_value());
number.multiply();
console.log(number.get_current_value());
number.multiply();
console.log(number.get_current_value());
number.multiply();
console.log(number.get_current_value());