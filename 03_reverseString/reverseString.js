const reverseString = function(str) {
    
    let text="";
    for (let i=str.length-1; i>=0; i--){
        text= text + str[i];
        
    }
    return text;
};

// Do not edit below this line
module.exports = reverseString;
