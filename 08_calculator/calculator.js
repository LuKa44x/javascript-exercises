const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(numbers) {
  const somma = numbers.reduce((total, num) =>{
    return total + num;
  },0);
  return somma;
};

const multiply = function(mult) {
    return mult.reduce((total, num) => total * num ,1);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	let total = 1;
  for(let i=a;i>0;i--){
    total*=i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
