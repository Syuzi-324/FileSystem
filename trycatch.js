
const stack = require ('./classstack.js');


class Bracket {
	constructor() {}



checkBrackets (string) {
	let a = '(';
	let b = '{';
	let c = '[';
	let A = ')';
	let B = '}';
	let C = ']';

	

	for(let i = 0; i < string.length; i++) {

		if((stack[stack.length-1] == a && string[i] == A) || (stack[stack.length-1] == b && string[i] == B) || (stack[stack.length-1] == c && string[i] == C) ) {

					stack.pop();
					

					

		} else if(string[i] == a || string[i] == b || string[i] == c) {

					stack.push(string[i]);
				

				 }
			else if(string[i] == A || string[i] == B || string[i] == C){
				return 'Incorrect Brackets';
			}
			else { continue;}
				
				
		
			
		
	}
	
	return stack.length;
}

}


let bracket = new Bracket();



	try { if(bracket.checkBrackets('{{jhdbk}hc(dbkj[kjdhn]dskjb{djhkbc}dkcbj()kbdcbk)}}') == 0){

		console.log(`Quantity of brackets are correct!`);

		}   else {

			console.log(`Quantity of brackets aren't correct!`);

			}
		
		
	 }
	catch(err) {

		console.log('some error has occured');

		console.log(err);
	}

	

