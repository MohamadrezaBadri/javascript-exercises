const sumAll = function(num1 , num2) {
let temp 
let sum  = 0
    if (num2  < num1){
    temp = num2
    num2 = num1
    num1 = temp
}
if (num1 < 0 || Number.isInteger(num1) == false || Number.isInteger(num2) == false ){
    return 'ERROR'
}
for (let i = num1 ; i<= num2 ; i++){
    sum +=  i 

}
return sum
};

// Do not edit below this line
module.exports = sumAll;
