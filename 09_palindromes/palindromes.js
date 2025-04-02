const palindromes = function (word) {
    const cleanedChar = word
        .toLowerCase()
        .split('')
        .filter(str => /[a-zA-Z0-9]/g.test(str))
        .join("");
    let reversedChar = cleanedChar.split("").slice().reverse().join('');
        return cleanedChar==reversedChar ;
};

// Do not edit below this line
module.exports = palindromes;
