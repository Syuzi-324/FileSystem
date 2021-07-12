class Stack {
	constructor () {}

	arr = [];

	pop(){
		if(this.arr.length != 0){

			console.log(this.arr.pop);
		} else {
			console.log('Stack is already empty!');
		}
	}
	push(elem) {
		this.arr.push(elem);

	}	


}

let stack = new Stack().arr;

module.exports = stack;