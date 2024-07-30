const reverseString = function(text) {
    let reverse = '' ; 
    for (let i = text.length ; i > 0  ; i--){
        reverse += text[i-1];
    }
    return reverse
};

// Do not edit below this line
module.exports = reverseString;
