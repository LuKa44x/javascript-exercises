const removeFromArray = function(text, n) {
    for(let i=0; i<text.length; i++) {
    let index = text.indexOf(n);
    let x = text.splice(index, 1);
    }
    return text;
};

// Do not edit below this line
module.exports = removeFromArray;
