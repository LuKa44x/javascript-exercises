const sumAll = function(num1 , num2) {
    let max;
    let min;
    let sum=0;
    if(num1<0 || num2<0 ) return 'ERROR';
    if (Number.isInteger(num1) && Number.isInteger(num2)) {
    if ( num1> num2) max= num1, min= num2;
    else  max= num2, min= num1;
    for (let i=max; i>=min; i--){
        sum= sum+i;
    }
    return sum;
}
    else return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
