const fibonacci = function(index) {
    let fibNum = [0, 1];
    if(index<0) return "OOPS";
    for(let i=2;i<=index;i++){
        fibNum[i]= fibNum[i-2] + fibNum[i-1];
    }
    return fibNum[index];
};

// Do not edit below this line
module.exports = fibonacci;
